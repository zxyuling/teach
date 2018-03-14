function debounce(time,callback)
{
		var last;
		return function()
		{
			if(last)
				clearTimeout(last);
			last = setTimeout(callback,time)
		}
}
var mflag=false;
var cflag=true;
function scroll(id)
{

	var f1=debounce(500,doSth1);
	var f2=debounce(3000,doSth2);
	var tar = document.querySelector(id);
	tar.addEventListener('mousewheel',f1,true);
	tar.addEventListener('mousewheel',f2,true);
	tar.addEventListener('click',function(){cflag=false},true);

	function doSth1()
	{
		mflag =true;

	}
	function doSth2()
	{
		if(mflag&&cflag)
			console.log("鼠标滚动停止了500ms,且3s内无点击");
	}
}
scroll('#s');