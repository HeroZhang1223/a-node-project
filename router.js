var fs = require('fs')
var express = require('express')
var Student = require('./student.js')


// Student.updateById({
// 	id:1,
// 	name:'张正祥',
// 	},function(err){
// 		if(err){
// 			console.log('文件修改失败...')
// 		}
// 		console.log('文件修改成功...')
// 	}
	
// )
// 1.创建一个路由容器
var router = express.Router()

// 2.把router都挂载到router容器中
	router.get('/students',function(req,res) {
		// fs.readFile('./db.json',function(err,data) {
		// 	if(err){
		// 		return res.status(500).send('Server error...')
		// 	}
		// 	//将一个对象转化为字符串表示，此时的data为一个字符串
		// 	data=data.toString()
		// 	res.render('index.html',{
		// 		fruits:['苹果','香蕉','荔枝'],
		// 		// 在接收服务器数据时一般是字符串，我们可以使用 JSON.parse() 方法将数据转换为 JavaScript 对象
		// 		students:JSON.parse(data).students
		// 	})
		// })
		
		Student.find(function(err,students) {
			if(err){
				return res.status(500).send("Server error...")
			}
				res.render('index.html',{
					fruits:['苹果','香蕉','荔枝'],
					// 在接收服务器数据时一般是字符串，我们可以使用 JSON.parse() 方法将数据转换为 JavaScript 对象
					students:students
				})
		})
	})
	
	router.get('/students/new',function(req,res) {
		res.render('new.html')
	})
	
	router.post('/students/new',function(req,res) {
			new Student(req.body).save(function(err) {
				if(err){
					return res.status(500).send("Server error...")
				}
				res.redirect('/students')
			})
	})
	
	router.get('/students/edit',function(req,res) {
		var id=req.query.id.replace(/"/g,'')
		Student.findById(id,function(err,student){
			if(err){
				return res.status(500).send("Server error...")
			}
			// console.log(student)
			res.render('edit.html',{
				student:student
			})
		})
		
	})
	
	router.post('/students/edit',function(req,res) {
		var id=req.body.id.replace(/"/g,'')
		Student.findByIdAndUpdate(id,req.body,function(err) {
			if(err){
				return res.status(500).send("Server error...")
			}
			res.redirect('/students')
		})
	})
	
	router.get('/students/delete',function(req,res) {
		var id=req.query.id.replace(/"/g,'')
		Student.findByIdAndDelete(id,function(err){
			if(err){
				return res.status(500).send('Server error...')
			}
			res.redirect('/students')
		})
	})
	
	// 导出router
	module.exports=router
