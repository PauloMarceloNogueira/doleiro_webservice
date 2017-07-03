var express = require('express')
var router = express.Router()
var request = require('request');
var parser = require('json-parser');
router.get('/',function(req,res,next) {
  console.log('entrou aqui!')
  request("https://zlvtn47i82.execute-api.us-east-1.amazonaws.com/dev/politicos",function(err,response,body) {
    var b = parser.parse(body, null, true)
    console.log(b,'BODY');

    var politicos = b
    res.render('index',{politicos})
  })
})

module.exports = router;
