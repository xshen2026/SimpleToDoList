var app = angular.module("myApp",[]);
app.controller('DoListController', function(){
	this.todos = [
		{'title':'Brush teeth', 'done':false},
		{'title':'Drink water', 'done':false}
	];
	this.addTodo = function(){
		this.todos.push({'title':this.newtodo,'done':false})
	}
	this.clearCompleted = funciton(){
		this.todos = this.todos.filter(function(item){
			return !item.done
		})
	}
})