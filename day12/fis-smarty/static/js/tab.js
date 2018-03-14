define(function(require,exports,module)
{
	var api = require('api');
	function tab()
	{
		var tabUl = document.querySelector('.consult-nav');
		api.delegate(tabUl,'click','LI',callback);
		function callback(tar)
		{
			var defaultNav = document.querySelector('.default-tab');
			defaultNav.className = defaultNav.className.replace('default-tab','');
			tar.className = tar.className+' default-tab';

			var data = tar.getAttribute('data-section');
			var defaultSection = document.querySelector('.default-section');
			defaultSection.className = defaultSection.className.replace('default-section','');
			var tarSection = document.querySelector('.'+data);
			tarSection.className = tarSection.className+' default-section';
		}
	}
exports.tab= tab;
})