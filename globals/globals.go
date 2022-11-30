package globals

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"k8s.io/klog"
)

var Secret = []byte("secret")

var Userkey = "user"
var UserTasks = "tasks"

type DataBaseAuth struct {
	UserName       string
	Password       string
	Host           string
	Port           string
	CollectionName string
}

var Authorization = DataBaseAuth{
	UserName: "admin",
	Password: "ketilinux",
	Host:     "10.0.5.123:",
	Port:     "32717",
}

var Client *mongo.Client

func ConnectDB() *mongo.Client {

	// Auth에러 처리를 위한 client option 구성
	clientOptions := options.Client().ApplyURI("mongodb://" + Authorization.Host + Authorization.Port).SetAuth(options.Credential{
		Username: Authorization.UserName,
		Password: Authorization.Password,
	})

	// MongoDB 연결
	client, err := mongo.NewClient(clientOptions)

	// Util에 작성한 에러 확인 함수
	if err != nil {
		klog.Errorln(err)
	}

	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	err = client.Connect(ctx)
	if err != nil {
		klog.Fatal(err)
	}

	//ping the database
	err = client.Ping(ctx, nil)
	if err != nil {
		klog.Fatal(err)
	}
	klog.Infoln("DBConnect")
	return client
}

func SetUerKey(userKey string) {
	Userkey = userKey
}

func GetCollection(client *mongo.Client, collectionName string) *mongo.Collection {
	collection := client.Database("simulator").Collection(collectionName)
	return collection
}
