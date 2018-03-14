window.onload = function()
{
	tab();
	slide();
}

function tab()
{
	var tabUl = document.querySelector('.consult-nav');
	delegate(tabUl,'click','LI',callback);
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

function slide()
{
	var slideWidth = 0
	if(window.innerWidth>768)
	 slideWidth = document.body.clientWidth*0.4;
	else
	 slideWidth = document.body.clientWidth;
	var mediaAll = document.querySelector('.media-content-all');

	var mediaTab = document.querySelector('.media-tab');
	var slideContent = document.querySelector('.media-slide');
	 slideContent.style.width = 3*slideWidth+'px';
//	var slideCss = window.getComputedStyle(slideContent);
	delegate(mediaTab,'mouseover','LI',callback);
	function callback(tar)
	{
		var mediaTabLi = document.querySelector('.media-tab-select');
		mediaTabLi.className = mediaTabLi.className.replace('media-tab-select','');
		tar.className = tar.className+' media-tab-select';
		var eleNum = mediaTab.children.length;
		var data = tar.getAttribute('data-media');
		var left = -(data-1)*slideWidth;
		slideContent.style.transition = 'all 0.5s ease-in-out';
		slideContent.style.left = left+'px';
	}

}
