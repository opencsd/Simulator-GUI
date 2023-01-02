package routes

import (
	"github.com/gin-gonic/gin"

	controllers "gin_session_auth/controllers"
)

func PublicRoutes(g *gin.RouterGroup) {
	g.GET("/login", controllers.LoginHandler())
	g.POST("/login", controllers.UserLogin())
	g.GET("/register", controllers.RegisterHandler())
	g.POST("/register", controllers.UserRegister())
	g.GET("/", controllers.LoginHandler())

}

func PrivateRoutes(g *gin.RouterGroup) {
	g.GET("/tpchChart", controllers.CPUUsageChart())
	g.GET("/runquery", controllers.CollectMetric())
	g.GET("/ssdcsd", controllers.SSDCSDChart())
	g.GET("/table", controllers.TableInfo())
	g.GET("/dashboard", controllers.DashboardHandler())
	g.GET("/logout", controllers.UserLogout())
	g.GET("/metricGraph", controllers.MetricGraph())

}
