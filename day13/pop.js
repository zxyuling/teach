
define(function(require,exports,module)
{
	var api = require('api')
	function pop(id,eventSort,content,hinderBool,hinderRGBA,type)
	{
		this.id = id || '#J-pop'; 						//弹框触发对象
		this.type = type || false;					//弹框触发是在冒泡阶段还是捕获阶段
		this.eventSort = eventSort || 'click'		//弹框触发事件
		this.content = content;						//弹框内容
		this.hinderBool = hinderBool || false	//是否遮罩		
		this.hinderRGBA = hinderRGBA || 'rgba(155,155,155,0.3)';	//遮罩层颜色
		this.extend = {}							//扩展对象
	}

	pop.prototype.addEvent = function() 
	{
		var tar = document.querySelector(this.id);
		var handle = this.handle();
		api.addEvent(tar,this.eventSort,handle,this.type)
	}
	pop.prototype.removeEvent = function()
	 {
	 	var tar = document.querySelector(id);
	 	var handle = this.handle();
		api.removeEvent(tar,this.eventSort,this.handle,this.type)

	 }

	pop.prototype.handle = function()
	{
		console.log()
		var o = this;
		return function()
		{
			var fragment = document.createDocumentFragment();
			var body = document.body;
			if(o.hinderBool)
			{
				var hinder = document.createElement('div');
				hinder.style.position = 'fixed';
				hinder.style.top = 0;
				hinder.style.left = 0;
				hinder.style.background = o.hinderRGBA;
				hinder.style.width = window.innerWidth+'px';
				hinder.style.height = window.innerHeight+'px';
				fragment.appendChild(hinder);
				if(typeof window.addEventListener === 'function')//非ie浏览器绑定事件
		        	{
		        	    window.addEventListener('resize',winSize,this.type);
		       		}
		   		 else
					{
		     	        window.attachEvent('onresize',winSize,this.type);
		    	    }
		    	function winSize()
		    	{
		    		hinder.style.width = window.innerWidth+'px';
					hinder.style.height = window.innerHeight+'px';
		    	}

			}
			var dialog  = document.createElement('div');
			fragment.appendChild(o.content);
			body.insertBefore(fragment,body.childNodes[0]);
		}

	}
	exports.pop = pop;
})



