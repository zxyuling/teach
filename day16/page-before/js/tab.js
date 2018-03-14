define(function(require,exports,module)
{
	let api = require('api');
	let tab = () =>
	{
		let tabUl = document.querySelector('.consult-nav');
		api.delegate(tabUl,'click','LI',callback);
		function callback(tar)
		{
			let defaultNav = document.querySelector('.default-tab');
			defaultNav.className = defaultNav.className.replace('default-tab','');
			tar.className = tar.className+' default-tab';

			let data = tar.getAttribute('data-section');
			let defaultSection = document.querySelector('.default-section');
			defaultSection.className = defaultSection.className.replace('default-section','');
			let tarSection = document.querySelector('.'+data);
			tarSection.className = tarSection.className+' default-section';
		}
	}
exports.tab= tab;
})