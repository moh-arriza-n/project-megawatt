//import REDIS
var redis = require ('redis');
var timer = require ('node-schedule');
var express = require ('express')
var client = redis.createClient({
  port : 6379,
  host : '192.168.197.36'
});

//notification connection
client.on('connect', function(){
  console.log('Unit 2 Connected');
});

//error handling
client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

//-----------------------------------separate------------------------------


timer.scheduleJob('1-59 * * * * *', function(){
  client.get('BLT2_MWGROSS.REAL', function(error, result){
  console.log('UNIT 2 = ' + result + ' Mega Watt');
})});
