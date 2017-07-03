var express = require('express')
var router = express.Router()
var request = require('request');
var parser = require('json-parser');
var _ = require('underscore');
var refresh = function() {
  console.log('AQUI');
}
router.get('/',function(req,res,next) {
  console.log('entrou aqui!')
  request("https://zlvtn47i82.execute-api.us-east-1.amazonaws.com/dev/politicos",function(err,response,body) {
    var b = parser.parse(body, null, true)
    var politicos = _.sortBy(b,'parcialNote')
    politicos = _.reject(politicos,function(politico){
      return !politico.parcialNote
    })
    res.render('index',{politicos:politicos.reverse()})
  })
})

module.exports = router;
