// function fn(){
// 	setTimeout(function(){
// 		var data='hello'
// 		console.log(data)
// 	},1000)
// }

// fn()


// 得到一个函数中的返回值(return)
// function fn(callback){
// 	setTimeout(function(){
// 		var data='hello'
// 		// 此时的data数据为定时器中匿名函数的data
// 		return data
// 	},1000)
// }

// console.log(fn())

// 无法实现
// function fn(callback){
// 	var data
// 	setTimeout(function(){
// 		data='hello'
// 	},1000)
// 	return data
// }

// console.log(fn())


function fn(callback) {
	setTimeout(function() {
		var data='hello'
		callback(data)
	},1000)
}

fn(function(data){
	 console.log(data)
})