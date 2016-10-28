var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
  res.render('index.ejs');
});

router.get('/Resume', function(req,res){
  res.download('public/SpencerKresgeResume.pdf');
});

router.get('/Algorithms',function(req,res){
  res.render('Algorithms.ejs');
});

router.get('/execute',function(req,res){
	res.send('This is from the server!');
});

router.get('/ace-builds/src-noconflict/ace.js', function(req,res){
	res.sendFile('/ace-builds/src-noconflict/ace.js');
})

module.exports = router;
