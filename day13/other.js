define(function(require,exports,module)
{
	function fun(listen)
	{
		listen.on('move',function(){console.log('监听到弹窗移动')})
	}
	exports.fun = fun;
})