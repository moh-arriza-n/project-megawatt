//import REDIS
var redis = require ('redis');
var timer = require ('node-schedule');
var requ = require ('requirejs');
var client = redis.createClient({
  port : 6379,
  host : '192.168.197.36'
});

//notification connection
client.on('connect', function(){
  console.log('Tersambung');
});

//error handling
client.on('error', function (err) {
    console.log('Error Bro ' + err);
});

//----------------------------separate------------------------------


timer.scheduleJob('1-59 * * * * *', function(){
  client.get('BLT1_MWGROSS.REAL', function(error, result){
  console.log('UNIT 1 = ' + result + ' MegaWatt');
})});
