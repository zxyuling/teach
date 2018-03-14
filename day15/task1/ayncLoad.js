var load  = 
{
	ayncLoad:function(file)
	{
		var regCss = /\w\.css/;
		var regJs = /\w\.js/;
			for(var i =0;i<file.length;i++)
			{
				if(regCss.test(file[i]))
					this.loadCss(file[i]);
				if(regJs.test(file[i]))
					this.loadJs(file[i]);
			}	
	},
	loadCss:function(file)
	{
		var link = document.createElement('link');
		link.href = file;
		document.querySelector('head').appendChild(link);
	},
	loadJs:function(file)
	{
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		script.defer = 'defer';
		script.src = file;
		document.body.appendChild(script);
	}

}


var file = new Array();
file[0] = 'css1.css';
file[1] = 'css2.css';
file[2] = 'js1.js';
file[3] = 'js2.js';
load.ayncLoad(file);