var ajax = function(type,url,bool,data)
{
	var promise = new Promise(function(resolve,reject)
	{
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function()
		{
			if(xhr.readyState == 4)
				if(xhr.status == 200)
					resolve(xhr.responseText)
				else
					reject('readyState:'+xhr.readyState+',status:'+xhr.status);
		}
		xhr.open(type,url,bool);
		if(type == 'POST')
		{
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xhr.send('d='+JSON.stringify(data));
		}
		else
			xhr.send();
	})
	return promise;
}

ajax('GET','data.json',true)//.then(function(res){console.log(res)},function(res){console.log(res)});