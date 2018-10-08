var todo = document.getElementById("todo"),
	todobtn = document.getElementById("list"),
	listclose = document.getElementById("listclose"),
	App = angular.module("App",[]);

App.controller("Controller",["$scope",function($scope){
	$scope.todos = [];
	$scope.doneTodos = [];

	$scope.addItem = function(){
		$scope.todos.push({text:$scope.todo, checked:false});
		$scope.todo = "";
	}

	$scope.done = function(index, ev){
		var tmp = $scope.todos.splice(index,1);
		tmp[0].checked = !tmp[0].checked;
		$scope.doneTodos = $scope.doneTodos.concat(tmp);
		ev.preventDefault();
	}

	$scope.undone = function(index, ev){
		var tmp = $scope.doneTodos.splice(index,1);
		tmp[0].checked = !tmp[0].checked;
		$scope.todos = $scope.todos.concat(tmp);
		ev.preventDefault();
	}

	$scope.delete = function(index, arr){
		arr.splice(index,1);
	}
}]);



todobtn.onclick = function(){
	todo.style.top = leader+80+"px";
	todo.style.display = "block";
	
}

listclose.onclick = function(){
	todo.style.display = "none";
}
