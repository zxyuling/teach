var express = require('express');
var upload_del = require('../module/upload.js');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/upload', function(req, res, next) {
  res.render('upload', {'data': 0 });
});
router.post('/upload', function(req, res, next) 
{

	var JSON = 
	{
		fileName:req.files.upload.originalname,
		tempName:req.files.upload.name
	};
	console.log(JSON);
		var upload = new upload_del(JSON);
		 upload.uploadDel(req,res,callback);
		function callback(status,data)
		{
						console.log(data);
			res.render('upload',{'data':data});  

		}
});


module.exports = router;