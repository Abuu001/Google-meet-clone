require('dotenv').config({path : "../.env"})
 
const redis = require("redis");
const REDIS_PORT = process.env.REDIS_URL || 6379;

const client = redis.createClient(REDIS_PORT, {
    tls: {
        rejectUnauthorized: false
    }
}); 

 
client.on("connect", () => {
    console.log("Connected to Redis.... ");
});
    
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