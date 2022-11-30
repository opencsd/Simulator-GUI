package models

type TPCHChart struct {
	Labels []string  `json:"labels"`
	Datas  []float32 `json:"datas"`
}
