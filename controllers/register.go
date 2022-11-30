package controllers

import (
	"context"
	globals "gin_session_auth/globals"
	helpers "gin_session_auth/helpers"
	"gin_session_auth/models"
	"net/http"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"k8s.io/klog"
)

// Register
func RegisterHandler() gin.HandlerFunc {
	return func(c *gin.Context) {
		session := sessions.Default(c)
		user := session.Get(globals.Userkey)
		if user != nil {
			c.HTML(http.StatusBadRequest, "register.html",
				gin.H{
					"content": "Please logout first",
					"user":    user,
				})
			return
		}
		c.HTML(http.StatusOK, "register.html", gin.H{
			"content": "",
			"user":    user,
		})
	}
}

func UserRegister() gin.HandlerFunc {
	return func(c *gin.Context) {
		client := globals.ConnectDB()
		userCollection := globals.GetCollection(client, "user")
		session := sessions.Default(c)
		user := session.Get(globals.Userkey)
		if user != nil {
			c.HTML(http.StatusBadRequest, "register.html", gin.H{"content": "Please logout first"})
			return
		}

		name := c.PostForm("name")
		username := c.PostForm("username")
		password := c.PostForm("password")
		password4Check := c.PostForm("passwordCheck")
		gender := c.PostForm("gender")

		if !helpers.CheckRepeatedPassword(password, password4Check) {
			c.HTML(http.StatusBadRequest, "register.html", gin.H{"content": "Repeat password correct!"})
			return
		}

		if helpers.EmptyRegister(name, username, password, password4Check, gender) {
			c.HTML(http.StatusBadRequest, "register.html", gin.H{"content": "Parameters can't be empty"})
			return
		}

		newUser := models.User{
			Id:        username,
			Name:      name,
			Password:  password,
			TaskCount: 0,
			Profile:   helpers.GetProfileNum(gender),
		}
		result, err := userCollection.InsertOne(context.Background(), newUser)
		if err != nil {
			c.JSON(http.StatusInternalServerError, models.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: map[string]interface{}{"data": err.Error()}})
			return
		}
		klog.Infoln(result)
		c.Redirect(http.StatusMovedPermanently, "/login")
	}
}
