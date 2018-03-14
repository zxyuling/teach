define(function(require,exports,moudle)
{
	var move = require('move');
	var pop = require('pop');
	function dialog(listen)
	{
		var div = document.createElement('div');
		div.setAttribute('class','dialog');
		var dialogM = new pop.pop('#a','click',div,1,'rgba(155,155,155,0.8)',1,listen);
		dialogM.addEvent();
		move.move(div,listen);
	}
	exports.dialog = dialog;
})
