function gg(id,color,left,top,width,height)
{
	var canvas=document.querySelector(id);
	var ctx=canvas.getContext('2d');
	ctx.fillStyle=color;
	ctx.fillRect(left,top,width,height);
	canvas.addEventListener('mousedown',down,true);
	function down()
	{
		canvas.addEventListener('mousemove',clear,true);
		document.body.addEventListener('mouseup',up,true);
	}
	function up()
	{
		canvas.removeEventListener('mousemove',clear,true);
		document.body.removeEventListener('mouseup',up,true);
	}
	function clear()
	{

		var mouseX = event.clientX;
		var mouseY = event.clientY;
		ctx.globalCompositeOperation="destination-out";
		ctx.beginPath();
		ctx.fillStyle = "#000";
		ctx.arc(mouseX-canvas.offsetLeft, mouseY-canvas.offsetTop, 10, 0, Math.PI*2)
		ctx.fill();
		
	}
}

gg('#canvas','#bdbdbd',0,0,300,180);