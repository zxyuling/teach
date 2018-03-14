define(function(require,exports,module)
{
	let api = require('api');
	let slide = () =>
	{
		let slideWidth = 0
		if(window.innerWidth>768)
		 slideWidth = document.body.clientWidth*0.4;
		else
		 slideWidth = document.body.clientWidth;
		let mediaAll = document.querySelector('.media-content-all');

		let mediaTab = document.querySelector('.media-tab');
		let slideContent = document.querySelector('.media-slide');
		slideContent.style.width = 3*slideWidth+'px';
		api.delegate(mediaTab,'mouseover','LI',callback);
		function callback(tar)
		{
			let mediaTabLi = document.querySelector('.media-tab-select');
			mediaTabLi.className = mediaTabLi.className.replace('media-tab-select','');
			tar.className = tar.className+' media-tab-select';
			let eleNum = mediaTab.children.length;
			let data = tar.getAttribute('data-media');
			let left = -(data-1)*slideWidth;
			slideContent.style.transition = 'all 0.5s ease-in-out';
			slideContent.style.left = left+'px';
		}

	}
	exports.slide = slide;

})