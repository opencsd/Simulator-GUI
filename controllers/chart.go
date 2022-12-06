package controllers

import (
	globals "gin_session_auth/globals"
	"gin_session_auth/helpers"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
)

func CPUUsageChart() gin.HandlerFunc {
	return func(c *gin.Context) {
		session := sessions.Default(c)
		user := session.Get(globals.Userkey)
		paramMap := c.Request.URL.Query()
		tpchName := paramMap["query"][0]
		respData := helpers.GetTPCHChartData(user.(string), tpchName)

		c.JSON(200, respData)
	}
}

func SSDCSDChart() gin.HandlerFunc {
	return func(c *gin.Context) {
		session := sessions.Default(c)
		user := session.Get(globals.Userkey)
		paramMap := c.Request.URL.Query()
		tpchName := paramMap["query"][0]
		respData := helpers.GetSSDCSDChartData(user.(string), tpchName)

		c.JSON(200, respData)
	}
}

func TableInfo() gin.HandlerFunc {
	return func(c *gin.Context) {
		session := sessions.Default(c)
		user := session.Get(globals.Userkey)
		paramMap := c.Request.URL.Query()
		tpchName := paramMap["query"][0]
		respData := helpers.GetSpecificSnippet(user.(string), tpchName)

		c.JSON(200, respData)
	}
}

func CollectMetric() gin.HandlerFunc {
	return func(c *gin.Context) {
		session := sessions.Default(c)
		user := session.Get(globals.Userkey)
		paramMap := c.Request.URL.Query()
		tpchName := paramMap["query"][0]
		respData := helpers.QueryRun(user.(string), tpchName)

		c.JSON(200, respData)
	}
}
