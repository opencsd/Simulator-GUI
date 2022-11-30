package models

type User struct {
	Id        string `json:"_id,omitempty" bson:"_id,omitempty"`
	Name      string `json:"name,omitempty" validate:"required"`
	Password  string `json:"password,omitempty" validate:"required"`
	Profile   string `json:"profile,omitempty" validate:"required"`
	TaskCount int    `json:"taskcount,omitempty" validate:"required"`
}
