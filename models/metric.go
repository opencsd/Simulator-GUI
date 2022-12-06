package models

import "time"

type Metric struct {
	Id        string    `json:"userid,omitempty"`
	StartTime time.Time `json:"date,omitempty"`
	Type      string    `json:"type,omitempty" validate:"required"`
	Query     string    `json:"query,omitempty" validate:"required"`
	CPU       float32   `json:"cpu,omitempty" validate:"required"`
	Memory    float32   `json:"memory,omitempty" validate:"required"`
	NetworkRx float32   `json:"networkRx,omitempty" validate:"required"`
	NetworkTx float32   `json:"networkTx,omitempty" validate:"required"`
	Time      float32   `json:"taskcount,omitempty" validate:"required"`
	HashKey   string    `json:"hash"`
}

type MetricData struct {
	SSDMetric Metric `json:"ssd"`
	CSDMetric Metric `json:"csd"`
}

type CollectorResp struct {
	Code     int         `json:"code"`
	HashCode string      `json:"message"`
	Data     interface{} `json:"data"`
}

// SSD=1, ENGINE=2
type CollectorReq struct {
	UserId    string `json:"userID"`
	QueryType int    `json:"queryType"`
	Query     string `json:"query"`
}
