function ajax(url,options)
{
	var set = options;
	var type = 'POST';
	var xhr = new XMLHttpRequest();
	if(set.type)
		type = set.type;
	xhr.onreadystatechange = function()
	{
		if(xhr.readyState === 4 && xhr.status === 200)
		{
			set.onsuccess(xhr.responseText,xhr);
		}
		else
			set.onfail(xhr);
	}
	xhr.open(type,'data.php',true);
	if(type == 'POST')
	{
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send('d='+JSON.stringify(set.data));
	}
	else
		xhr.send();
}

var op = 
{
	'type':"POST",
	'data':{'d1':'1'},
	'onsuccess': function(text,xhr)
				{
					console.log(text);
				},
	'onfail': function(xhr)
				{
					console.log(xhr.status);
				}
}
ajax('qwewd',op);