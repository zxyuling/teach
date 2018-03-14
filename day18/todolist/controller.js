var app = angular.module('input',[]);
app.controller('inputCtrl',function($scope)
{
	var doneEvent=null;
	$scope.doingEvents=[];
	$scope.doneEvents=[];
	$scope.add = function()
	{
		console.log($scope.value)
		if($scope.value)
		{
			$scope.doingEvents.push($scope.value);
		}
	}
	$scope.done = function(index)
	{
		doneEvent = $scope.doingEvents[index];
		$scope.doingEvents.splice(index,1);
		$scope.doneEvents.push(doneEvent);
		console.log($scope.doingEvents)
	}
	$scope.doing = function(index)
	{
		doneEvent = $scope.doneEvents[index];
		console.log(doneEvent)
		$scope.doneEvents.splice(index,1);
		$scope.doingEvents.push(doneEvent);
		//console.log($scope.doneEvents);
	}
	$scope.doingDel=function(index)
	{
		$scope.doingEvents.splice(index,1);
	}
	$scope.doneDel=function(index)
	{
		$scope.doneEvents.splice(index,1);
	}
})