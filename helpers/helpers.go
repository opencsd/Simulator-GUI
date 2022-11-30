package helpers

import (
	"context"
	"gin_session_auth/globals"
	"gin_session_auth/models"
	"math"
	"math/rand"
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
	taskCollection := globals.GetCollection(client, "tasks")
	responseData := &models.TPCHChart{
		Labels: make([]string, 2),
		Datas:  make([]float32, 2),
	}
	var ssdStructs []models.Task
	var csdStructs []models.Task
	queryName := "TPC-H_" + queryNumber
	ssdCursor, err := taskCollection.Find(context.Background(), bson.M{"id": username, "query": queryName, "type": "SSD"})
	if err != nil {
		klog.Fatalln(err)
	}
	csdCursor, err := taskCollection.Find(context.Background(), bson.M{"id": username, "query": queryName, "type": "ENGINE"})
	if err != nil {
		klog.Fatalln(err)
	}
	if err = ssdCursor.All(context.Background(), &ssdStructs); err != nil {
		klog.Fatalln(err)
	}
	if err = csdCursor.All(context.Background(), &csdStructs); err != nil {
		klog.Fatalln(err)
	}
	ssdCount := 0
	if len(ssdStructs) == 0 || len(csdStructs) == 0 {
		return responseData
	}
	for _, task := range ssdStructs {
		responseData.Datas[0] = responseData.Datas[0] + task.CPU
		ssdCount++
	}
	responseData.Labels[0] = "SSD"
	responseData.Datas[0] = responseData.Datas[0] / float32(ssdCount)
	csdCount := 0
	for _, task := range csdStructs {
		responseData.Datas[1] = responseData.Datas[1] + task.CPU
		csdCount++
	}
	responseData.Labels[1] = "CSD"
	responseData.Datas[1] = responseData.Datas[1] / float32(csdCount)
	return responseData
}
