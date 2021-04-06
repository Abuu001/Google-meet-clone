require('dotenv').config({path : "../.env"})
// let redis = require("redis").createClient();
let client;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

if (process.env.REDISTOGO_URL) {
    
    let rtg   = JSON.parse(process.env.REDISTOGO_URL);
    client = require("redis").createClient(rtg.port, rtg.hostname);

    redis.auth(rtg.auth.split(":")[1]);
  } else {
    client = require("redis").createClient(REDIS_PORT);
  }

// client.on("connect", () => {
//     console.log("Connected to Redis.... ");
// });
   
module.exports= client;


// require('dotenv').config({path : "../.env"})
// let redis = require('redis');
// const REDIS_PORT = process.env.REDIS_PORT || 6379;

// let client = redis.createClient(REDIS_PORT);

// // client.on('error',(error)=>{
// //     console.log(error)
// // })

// client.on("connect", () => {
//     console.log("Connected to Redis.... ");
// });
  
// module.exports= client;