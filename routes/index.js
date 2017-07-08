var express = require('express')
var router = express.Router()
var request = require('request');
var parser = require('json-parser');
var _ = require('underscore');

router.get('/dash/:partido_id?',function(req,res,next) {
  var partido_id = req.params.partido_id
  getPoliticosPartido(partido_id, function(data) {
    request("https://zlvtn47i82.execute-api.us-east-1.amazonaws.com/dev/politicos",function(err,response,body) {
      var b = parser.parse(body, null, true)
      var politicos = _.sortBy(b,'parcialNote')
      politicos = _.reject(politicos,function(politico){
        return !politico.parcialNote
      })
      res.render('dash',{politicos:politicos.reverse(),politicos_selected:data})
    })
  })
})

router.get('/',function(req,res,next){
  res.render('index')
})

router.get('/profile', function(req,res,next){
  res.render('profile_menu')
})

router.get('/profile_menu', function(req,res,next){
  res.render('account_menu')
})

module.exports = router;

var getPoliticosPartido = function(partido_id, callback) {
  console.log(partido_id);
  request("https://6l45vhrrof.execute-api.us-east-1.amazonaws.com/dev/partido/" + partido_id, function(err,response,body){
    console.log(body,'BODY')
    var result = parser.parse(body, null, true);
    var politicos_selected = result.politicos
    callback(politicos_selected)
  })
}
