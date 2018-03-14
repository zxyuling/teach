define(function(require,exports,module)
{
	var pubSub = require('listen');
	var dialog = require('dialog');
	var other = require('other');
	var moveListen = new pubSub.pubSub();
	other.fun(moveListen);
	dialog.dialog(moveListen);
	alert(1)
})