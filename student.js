 var mongoose = require('mongoose')
 
 var Schema = mongoose.Schema
 
 mongoose.connect('mongodb://localhost/test',{ useUnifiedTopology: true })
 
 var studentSchema = new Schema({
	 name:{
		 type:String,
		 required:true
	 },
	 gender:{
		 type:Number,
		 // 性别只要0和1，使用枚举
		 enum:[0,1],
		 default:0
	 },
	 age:{
		 type:Number,
		 required:false
	 },
	 hobbies:{
		 type:String,
		 required:false
	 }
 })
 
 // 直接导出模型构造函数
module.exports = mongoose.model('Student',studentSchema)
