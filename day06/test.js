define(function(require,exports,module){
/*
*	测试工具，包含数组去重，判断是否为字符串，数组，对象，数组和函数
*/
var utils = 
{
	uniqueArray	: 	uniqueArray,//数组去重
	isString	: 	isString,//判断是否为字符串
	isNumber	: 	isNumber,//判断是否为数字
	isObject	: 	isObject,//判断是否为对象
	isArray		: 	isArray,//判断是否为数组
	isFunction	: 	isFunction 	//判断是否为函数
}
/************************************************************************/


/*
*	uniqueArray(array)
*	传入数组作为参数，函数将去重并返回新数组	
*/
function un2(aa){
	for(var i=0,k=0;i<aa.length;i++,k++){
		if(aa.indexOf(aa[i],i+1)!=-1){
			aa.splice(i,1)
			i--
		}
	}
	return aa.sort();
}
function uniqueArray(array)
{
	var i=0;
	var j=0;
	for(;i<array.length;i++)
		for(j = i+1;j<array.length;j++)
		{
			if(array[i] === array[j])
			{
				array.splice(i,1);
				i-=1;
				break;
			}
		}
		return array.sort();
}
/************************************************************************/


/*
*	isString(obj)
*	传入一个参数，函数将判断其是否为字符串
*/
function isString(obj)
{
	return (typeof obj == 'string' ) && obj.constructor==String;
}
/*************************************************************************/


/*
*	isNumber(obj)
*	传入一个参数，函数将判断其是否为数组
*/
function isNumber(obj)
{
	return (typeof obj == 'number' ) && obj.constructor==Number;
}
/*************************************************************************/

/*
*	isObject(obj)
*	传入一个参数，函数将判断其是否为对象
*/
function isObject(obj)
{
	return (typeof obj == 'object' ) && obj.constructor==Object;
}
/************************************************************************/

/*
*	isArray(obj)
*	传入一个参数，函数将判断其是否为数组
*/
function isArray(obj)
{
	return (typeof obj == 'object' ) && obj.constructor==Array;
}
/************************************************************************/

/*
*	isFunction(obj)
*	传入一个参数，函数将判断其是否为函数
*/
function isFunction(obj)
{
	return (typeof obj == 'function' ) && obj.constructor==Function;
}
/*************************************************************************/

/**************************************************************************************************************/
/**************************************************************************************************************/


/*
*	计时器工具，start开始计时，pause暂停计时，reset重置计时器，getDuration获取计时经过时间
*/
var timer = 
{
	startDate	: 	0,
	time		: 	0,
	isPaues 	: 	0,
	start		: 	start,
	pasue		: 	pause,
	reset		: 	reset,
	getDuration	: 	getDuration,
}

/*
*	start开始计时
*/


function start()
{
	var date = new Date();
	this.startDate = date.getTime()
	this.isPaues = 0;
	return this.startDate;
}

/*
*	pause暂停计时
*/


function pause()
{
	if(this.isPaues == 0)
	{
		var date = new Date();
		var pauseDate = date.getTime();
		this.isPaues = 1;
		this.time += (pauseDate-this.startDate);
		return 1;
	}
	else
	{
		return 0;
	}
}

/*
*	reset重置计时器
*/


function reset()
{
	if(this.isPaues == 1)
	{
		this.startDate = 0;
		this.isPaues = 0;
		this.time = 0;
		return 1;
	}
	else
	{
		return 0;
	}
}

/*
*	getDuration获取计时经过时间，并重置计时器
*/


function getDuration()
{
	var clock = 0;
	if(this.isPaues == 0)
	{
		var date = new Date();
		var lastDate = date.getTime();
		this.time += (lastDate-this.startDate);
		clock = this.time;
	}
	else
	{
		clock = this.time;
	}
	this.startDate = 0;
	this.isPaues = 0;
	this.time = 0;
	return clock;
}

/**************************************************************************************************************/
/**************************************************************************************************************/

function test(callback,message,bool)
{
	timer.start();
	if(callback())
	{
		console.log(message+'：测试通过');
	}
	else
	{
		console.log(message+'：测试未通过');
	}
	if(bool)
	{
		console.log('测试时间为:'+timer.getDuration()+'毫秒');
	}
}

(function (fun)
{
	test(function ()
		{
			if(fun.isNumber({})===true)
				return 1;
			else
				return 0;
		},'isNumber',1);
	test(function ()
		{
			if(fun.isFunction(function(){})===true)
				return 1;
			else
				return 0;
		},'isFunction',1)
	test(function ()
		{
			if(fun.isArray(111)===true)
				return 1;
			else
				return 0;
		},'isArray',1)
	test(function ()
		{
			if(fun.isObject({})===true)
				return 1;
			else
				return 0;
		},'isObject',1)
	test(function ()
		{
			if(fun.isString('111')===true)
				return 1;
			else
				return 0;
		},'isString',1)
})(utils);
var k=[1,23,4,53,45,7,567,8,567,6,6,6,3,3,5,67,23,4,6,3,6,78,3,4,6,2,6,8,9,5,4,3],s=[],h=[];
for(var i=0;i<10000;i++){
	var t=parseInt(Math.random()*1000)
	k.push(t);
	s.push(t);
	h.push(t);
}
function test2(callback,time,ay){
	timer.start()
	
	var aa;
	for(var i=0;i<time;i++){
		aa = ay.concat();
		callback(aa)
	}
	console.log(callback(aa));
	return timer.getDuration()/(time+1);
}

  function unique3(arr){
    var tmpArr = [], hash = {};//hash为hash表
    for(var i=0;i<arr.length;i++){
      if(!hash[arr[i]]){//如果hash表中没有当前项
        hash[arr[i]] = true;//存入hash表
        tmpArr.push(arr[i]);//存入临时数组
      }
    }
    return tmpArr.sort();
  }
console.log(test2(utils.uniqueArray,1,k)+':'+test2(unique3,1,s)+':'+test2(un2,1,h))
exports.test = timer;
})

