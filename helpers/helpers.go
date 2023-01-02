package helpers

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"gin_session_auth/globals"
	"gin_session_auth/models"
	"io/ioutil"
	"math"
	"math/rand"
	"net/http"
	"strings"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"k8s.io/klog"
)

func CheckUserPass(username, password string) error {
	client := globals.ConnectDB()
	userCollection := globals.GetCollection(client, "user")
	var userStruct models.User
	err := userCollection.FindOne(context.Background(), bson.M{"_id": username}).Decode(&userStruct)
	return err
}

func EmptyUserPass(username, password string) bool {
	return strings.Trim(username, " ") == "" || strings.Trim(password, " ") == ""
}

func EmptyRegister(name, username, password, password4Check, gender string) bool {
	return strings.Trim(name, " ") == "" || strings.Trim(username, " ") == "" || strings.Trim(password, " ") == "" || strings.Trim(password4Check, " ") == "" || strings.Trim(gender, " ") == ""
}

func CheckRepeatedPassword(password, password4Check string) bool {

	return strings.Compare(password, password4Check) == 0
}

func GetProfile(username string) string {
	client := globals.ConnectDB()

	userCollection := globals.GetCollection(client, "user")

	var userStruct models.User

	err := userCollection.FindOne(context.Background(), bson.M{"_id": username}).Decode(&userStruct)
	if err != nil {
		klog.Errorln(err)
	}
	return userStruct.Profile
}

func GetTaskCPU(username string) (float32, int) {
	client := globals.ConnectDB()
	taskCollection := globals.GetCollection(client, "tasks")
	var taskStructs []models.Task
	filterCursor, err := taskCollection.Find(context.Background(), bson.M{"id": username})
	if err != nil {
		klog.Fatalln(err)
	}
	if err = filterCursor.All(context.Background(), &taskStructs); err != nil {
		klog.Fatalln(err)
	}
	avgCPU := float32(0)
	for _, task := range taskStructs {
		avgCPU += task.CPU
	}
	avgCPU = avgCPU / float32(len(taskStructs))
	return toFixed(avgCPU, 2), len(taskStructs)
}

func round(num float32) int {
	return int(float64(num) + math.Copysign(0.5, float64(num)))
}

func toFixed(num float32, precision int) float32 {
	output := float32(math.Pow(10, float64(precision)))
	return float32(round(num*output)) / output
}

func GetProfileNum(gender string) string {
	timeSource := rand.NewSource(time.Now().UnixNano())
	random := rand.New(timeSource)
	male := []string{"profile-1.svg", "profile-3.svg"}
	female := []string{"profile-2.svg", "profile-4.svg"}

	if strings.Compare(gender, "male") == 0 {
		return male[random.Intn(100)%2]
	} else {
		return female[random.Intn(100)%2]
	}
}

func GetSnippetCNT(user string) int {
	client := globals.ConnectDB()
	snippetCollection := globals.GetCollection(client, "snippets")
	model := mongo.IndexModel{Keys: bson.D{{"_id", "text"}}}
	_, err := snippetCollection.Indexes().CreateOne(context.TODO(), model)
	if err != nil {
		klog.Errorln(err)
	}

	filter := bson.D{{"$text", bson.D{{"$search", user}}}}
	cursor, err := snippetCollection.Find(context.Background(), filter)
	if err != nil {
		klog.Errorln(err)
	}
	var results []models.SnippetRequest
	if err = cursor.All(context.TODO(), &results); err != nil {
		klog.Errorln(err)
	}
	resultMap := make(map[string]string)
	for _, s := range results {
		snippteSlice := strings.Split(s.Id, "-")
		resultMap[snippteSlice[1]] = snippteSlice[0]
	}

	return len(resultMap)
}

func GetTPCHChartData(username string, queryNumber string) *models.TPCHChart {
	client := globals.ConnectDB()
	taskCollection := globals.GetCollection(client, "tasks")
	responseData := &models.TPCHChart{
		Labels: make([]string, 0),
		Datas:  make([]float32, 0),
	}
	var taskStructs []models.Task
	queryName := "TPC-H_" + queryNumber
	filterCursor, err := taskCollection.Find(context.Background(), bson.M{"id": username, "query": queryName})
	if err != nil {
		klog.Fatalln(err)
	}
	if err = filterCursor.All(context.Background(), &taskStructs); err != nil {
		klog.Fatalln(err)
	}
	for _, task := range taskStructs {
		responseData.Labels = append(responseData.Labels, task.StartTime.Format("2006-01-02 15:04:05"))
		responseData.Datas = append(responseData.Datas, toFixed(task.CPU, 2))
	}

	return responseData
}

func GetSSDCSDChartData(username string, queryNumber string) *models.TPCHChart {
	client := globals.ConnectDB()
	analyzeCollection := globals.GetCollection(client, "analyze")

	aStruct := &models.Analyze{}
	queryName := "TPC-H" + queryNumber
	err := analyzeCollection.FindOne(context.Background(), bson.M{"queryname": queryName}).Decode(aStruct)
	if err != nil {
		klog.Errorln(err)
	}
	sumData := aStruct.Aggregation + aStruct.Join + aStruct.SubQuery + aStruct.GroupBy + aStruct.OrderBy
	tmpData := &models.AnalyzeResp{
		QueryName:   aStruct.QueryName,
		Aggregation: float32(aStruct.Aggregation) / float32(sumData) * 100,
		Join:        float32(aStruct.Join) / float32(sumData) * 100,
		SubQuery:    float32(aStruct.SubQuery) / float32(sumData) * 100,
		GroupBy:     float32(aStruct.GroupBy) / float32(sumData) * 100,
		OrderBy:     float32(aStruct.OrderBy) / float32(sumData) * 100,
	}
	responseData := &models.TPCHChart{
		Labels: []string{"Aggregation", "Join", "SubQuery", "GroupBy", "OrderBy"},
		Datas:  []float32{toFixed(tmpData.Aggregation, 2), toFixed(tmpData.Join, 2), toFixed(tmpData.SubQuery, 2), toFixed(tmpData.GroupBy, 2), toFixed(tmpData.OrderBy, 2)},
	}

	return responseData
}

func GetSpecificSnippet(username string, queryNumber string) *models.Table {
	client := globals.ConnectDB()
	queryCollection := globals.GetCollection(client, "query")
	responseData := &models.Table{}
	queryName := "TPC-H" + queryNumber
	err := queryCollection.FindOne(context.Background(), bson.M{"queryname": queryName}).Decode(responseData)
	if err != nil {
		klog.Errorln(err)
	}
	return responseData
}

func QueryRun(username string, queryNumber string) *models.MetricData {
	queryName := "TPC-H_" + queryNumber
	ssdReq := &models.CollectorReq{
		UserId:    username,
		QueryType: 1,
		Query:     queryName,
	}
	csdReq := &models.CollectorReq{
		UserId:    username,
		QueryType: 2,
		Query:     queryName,
	}

	ssdChan := make(chan models.Metric)
	csdChan := make(chan models.Metric)
	go collectRequest(csdReq, csdChan)
	go collectRequest(ssdReq, ssdChan)

	result := &models.MetricData{}
	for i := 0; i < 2; i++ {
		select {
		case ssdMetric, open := <-ssdChan:
			if !open {
				klog.Errorln("Update channel is closed, exiting the sync loop")
			}
			result.SSDMetric = ssdMetric
			result.SSDMetric.CPU = toFixed(result.SSDMetric.CPU, 3)
			result.SSDMetric.Time = toFixed(result.SSDMetric.Time, 3)
			if result.SSDMetric.NetworkRx <= 0 {
				result.SSDMetric.NetworkRx = 0.001
			}
			if result.SSDMetric.NetworkTx <= 0 {
				result.SSDMetric.NetworkTx = 0.001
			}
			if result.SSDMetric.Memory <= 0 {
				result.SSDMetric.Memory = 0.001
			}
		case csdMetric, open := <-csdChan:
			if !open {
				klog.Errorln("Update channel is closed, exiting the sync loop")
			}

			result.CSDMetric = csdMetric
			result.CSDMetric.CPU = toFixed(result.CSDMetric.CPU, 3)
			result.CSDMetric.Time = toFixed(result.CSDMetric.Time, 3)
			if result.CSDMetric.NetworkRx <= 0 {
				result.SSDMetric.NetworkRx = 0.001
			}
			if result.CSDMetric.NetworkTx <= 0 {
				result.SSDMetric.NetworkTx = 0.001
			}
			if result.CSDMetric.Memory <= 0 {
				result.SSDMetric.Memory = 0.001
			}
		}
	}

	return result
}

func collectRequest(req *models.CollectorReq, hashCodeChan chan models.Metric) {
	reqByte, err := json.Marshal(req)
	if err != nil {
		klog.Errorln(err)
	}
	reqBody := bytes.NewBuffer(reqByte)
	httpReq, err := http.NewRequest("GET", "http://10.0.5.123:30950/query", reqBody)
	if err != nil {
		klog.Errorln(err)
	}
	httpReq.Header.Add("Content-Type", "application/json")
	client := &http.Client{}
	resp, err := client.Do(httpReq)
	if err != nil {
		klog.Errorln(err)
	}
	defer resp.Body.Close()

	// Response 체크.
	respBody, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		klog.Errorln(err)
	}

	fmt.Println(string(respBody))

	colResp := &models.Metric{}

	err = json.Unmarshal(respBody, colResp)
	if err != nil {
		klog.Errorln(err)
	}
	hashCodeChan <- *colResp
}

func GraphGet(startTime string, endTime string) *models.GraphDataAll {
	client := globals.ConnectDB()
	taskCollection := globals.GetCollection(client, "livemonitoring")
	responseData := &models.GraphDataAll{
		SSD: models.GraphData{
			CPU:     make([]float32, 0),
			Memory:  make([]float32, 0),
			Network: make([]float32, 0),
		},
		CSD: models.GraphData{
			CPU:     make([]float32, 0),
			Memory:  make([]float32, 0),
			Network: make([]float32, 0),
		},
		Label: make([]string, 0),
	}
	monitoringStructs := make([]models.MonitoringTask, 0)
	layoutISO := "01/02/2006 3:04 PM"
	t1, err := time.Parse(layoutISO, startTime) //converted to ISODate format
	if err != nil {
		klog.Fatalln(err)
	}
	t2, err := time.Parse(layoutISO, endTime) //converted to ISODate format
	if err != nil {
		klog.Fatalln(err)
	}

	timeTick := time.Second * 10
	timeDiff := t2.Sub(t1)
	klog.Infoln("Time Diff = ", timeDiff)
	if timeDiff.Hours() > (24 * 7) {
		timeTick = time.Hour * 24
	} else if timeDiff.Hours() > 24 {
		timeTick = time.Hour * 4
	} else if timeDiff.Hours() > 10 {
		timeTick = time.Hour * 2
	} else if timeDiff.Hours() > 1 {
		timeTick = time.Hour
	} else if timeDiff.Minutes() > 30 {
		timeTick = time.Minute * 10
	} else if timeDiff.Minutes() > 10 {
		timeTick = time.Minute * 5
	} else if timeDiff.Minutes() > 1 {
		timeTick = time.Minute
	} else {
		timeTick = time.Second * 10
	}
	filterCursor, err := taskCollection.Find(context.Background(), bson.M{"starttime": bson.M{"$gt": t1, "$lt": t2}})
	if err != nil {
		klog.Fatalln(err)
	}
	if err = filterCursor.All(context.Background(), &monitoringStructs); err != nil {
		klog.Fatalln(err)
	}

	ssdLastTime := time.Time{}
	csdLastTime := time.Time{}
	forCompare := time.Time{}
	klog.Infoln("Time Tick = ", timeTick)
	for i, task := range monitoringStructs {

		if task.Type == "SSD" {
			if ssdLastTime == forCompare {
				ssdLastTime = task.StartTime
			} else {
				if task.StartTime.Sub(ssdLastTime) < timeTick {
					continue
				} else {
					ssdLastTime = task.StartTime
				}
			}
		} else {
			continue
		}

		klog.Infoln("Format Time")
		responseData.Label = append(responseData.Label, task.StartTime.Format("01-02 15:04:05"))
		if task.CPU <= 0 {
			monitoringStructs[i].CPU = 0
		}
		monitoringStructs[i].NetworkRx = monitoringStructs[i].NetworkRx * 0.00000000001
		monitoringStructs[i].Memory = monitoringStructs[i].Memory * 0.00000000001
		monitoringStructs[i].NetworkTx = monitoringStructs[i].NetworkTx * 0.00000000001
		responseData.SSD.CPU = append(responseData.SSD.CPU, monitoringStructs[i].CPU)
		responseData.SSD.Memory = append(responseData.SSD.Memory, monitoringStructs[i].Memory)
		responseData.SSD.Network = append(responseData.SSD.Network, (monitoringStructs[i].NetworkRx + monitoringStructs[i].NetworkTx))
	}
	for i, task := range monitoringStructs {

		if task.Type == "SSD" {
			continue
		} else {
			if csdLastTime == forCompare {
				csdLastTime = task.StartTime
			} else {
				if task.StartTime.Sub(csdLastTime) < timeTick {
					continue
				} else {
					csdLastTime = task.StartTime
				}
			}
		}

		klog.Infoln("Format Time")
		if task.CPU <= 0 {
			monitoringStructs[i].CPU = 0
		}
		monitoringStructs[i].NetworkRx = monitoringStructs[i].NetworkRx * 0.00000000001
		monitoringStructs[i].Memory = monitoringStructs[i].Memory * 0.00000000001
		monitoringStructs[i].NetworkTx = monitoringStructs[i].NetworkTx * 0.00000000001

		responseData.CSD.CPU = append(responseData.CSD.CPU, monitoringStructs[i].CPU)
		responseData.CSD.Memory = append(responseData.CSD.Memory, monitoringStructs[i].Memory)
		responseData.CSD.Network = append(responseData.CSD.Network, (monitoringStructs[i].NetworkRx + monitoringStructs[i].NetworkTx))
	}
	klog.Infoln(responseData)
	return responseData
}
