define(function(require,exports,module)
{
	var api = require('api');
	function move(tar,listen)
	{

		api.addEvent(tar,'mousedown',mouseDown,true);
		var firstMouseX = 0;
		var firstMouseY = 0;
		var firstTarX = 0;
		var firstTarY = 0;
		function mouseDown(event)
		{
			console.log('down')
			api.addEvent(document.body,'mousemove',mouseMove,true);
			api.addEvent(document.body,'mouseup',mouseUp,true);
			firstMouseX = event.clientX;
			firstMouseY = event.clientY;
			var css = window.getComputedStyle(tar);
			firstTarX= parseInt(css.left);
			firstTarY = parseInt(css.top);
		}
		function mouseUp()
		{
			console.log('up')
			api.removeEvent(document.body,'mousemove',mouseMove,true);
			api.removeEvent(document.body,'mouseup',mouseUp,true);
		}

		function mouseMove(event)
		{

			var mouseX = event.clientX;
			var mouseY = event.clientY;
			var offsetX = mouseX - firstMouseX;
			var offsetY = mouseY - firstMouseY;
			tar.style.left = (firstTarX+offsetX)+'px';
			tar.style.top = (firstTarY+offsetY)+'px';
			listen.emmit('move');
		}
	} 
	exports.move = move;
})