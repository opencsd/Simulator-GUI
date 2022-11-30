package models

import "time"

type Task struct {
	Id        string    `json:"userid,omitempty"`
	StartTime time.Time `json:"date,omitempty"`
	Type      string    `json:"type,omitempty" validate:"required"`
	Query     string    `json:"query,omitempty" validate:"required"`
	CPU       float32   `json:"cpu,omitempty" validate:"required"`
	Memory    float32   `json:"memory,omitempty" validate:"required"`
	NetworkRx float32   `json:"networkRx,omitempty" validate:"required"`
	NetworkTx float32   `json:"networkTx,omitempty" validate:"required"`
	Time      string    `json:"taskcount,omitempty" validate:"required"`
}
