package controllers

import (
	"github.com/gin-contrib/sessions"

	"net/http"

	"github.com/gin-gonic/gin"

	globals "gin_session_auth/globals"
	"gin_session_auth/helpers"
)

func LoginHandler() gin.HandlerFunc {
	return func(c *gin.Context) {
		session := sessions.Default(c)
		user := session.Get(globals.Userkey)
		if user != nil {
			c.HTML(http.StatusBadRequest, "login.html",
				gin.H{
					"content": "Please logout first",
					"user":    user,
				})
			return
		}
		c.HTML(http.StatusOK, "login.html", gin.H{
			"user": user,
		})
	}
}

func DashboardHandler() gin.HandlerFunc {
	return func(c *gin.Context) {
		session := sessions.Default(c)
		user := session.Get(globals.Userkey)
		profile := helpers.GetProfile(user.(string))
		snippetCNT := helpers.GetSnippetCNT(user.(string))
		averageCPU, taskTotal := helpers.GetTaskCPU(user.(string))
		c.HTML(http.StatusOK, "dashboard.html", gin.H{
			"content": "KETI-Simulator",
			"user":    user,
			"tasks":   taskTotal,
			"profile": "/static/img/" + profile,
			"snippet": snippetCNT,
			"avgCPU":  averageCPU,
		})
	}
}
