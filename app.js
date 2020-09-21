var express = require('express')

var router = require('./router.js')

var bodyParser = require('body-parser')


var app = express()

// 把文件夹开放出来
app.use('/public/',express.static('./public/'))

app.engine('html',require('express-art-template'))

// 配置模板引擎和body-parser一定要在app.use(router)挂载路由之前
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// 把路由容器挂载到app服务中
app.use(router)

app.listen(8000,function() {
	console.log('server is running,please run http://192.168.1.106:8000 visit...')
})