var fs = require('fs');
var path = require('path');
function upload(JSON)
{
	this.json = JSON;
}
upload.prototype.uploadDel=function(req,res,callback)
{
	 json = this.json;
	 var dt=
	 {
       success: true,
       msg: '',
       data: [
          	 {
               view_src: 'http://localhost:8888/uploads/'+json.fileName
              }
       		]
	 }
	 fs.readFile("tmp\\"+json.tempName,'utf-8',read);
	 function read(err,data)
	 {  
    	if(err)
        	console.log(err);  
  		else
  		{
  			console.log(json.fileName)
	       	 fs.writeFile("uploads\\"+json.fileName,data,'utf-8',write);
	       	 function write(err)
	       	 {
	       	 	if(err)
	       	 		console.log(err);
				else
	       			{
	       				console.log('文件写入成功');
	       				console.log(dt);
	       				callback(1,dt);
	       			}
	       	 }
       	}
	}
	

}
module.exports = upload;