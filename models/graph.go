package models

import "time"

type MonitoringTask struct {
	StartTime time.Time `json:"date,omitempty"`
	Type      string    `json:"type,omitempty" validate:"required"`
	CPU       float32   `json:"cpu,omitempty" validate:"required"`
	Memory    float32   `json:"memory,omitempty" validate:"required"`
	NetworkRx float32   `json:"networkRx,omitempty" validate:"required"`
	NetworkTx float32   `json:"networkTx,omitempty" validate:"required"`
}

type GraphData struct {
	CPU     []float32 `json:"cpu"`
	Memory  []float32 `json:"memory"`
	Network []float32 `json:"network"`
}

type GraphDataAll struct {
	SSD   GraphData `json:"ssd"`
	CSD   GraphData `json:"csd"`
	Label []string  `json:"label"`
}
