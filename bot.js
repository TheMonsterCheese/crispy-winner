var twit = require(’twit’);
var config = require(’./config.js’);
var Twitter = new twit(config);

var retweet = function() {
  var params = {
    q: '#ACNH, #Daisy',
    result_type: 'recent',
    lang: 'en'    
  } 