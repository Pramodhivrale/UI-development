const express = require("express");
const { MongoClient } = require("mongodb");

const connectionString = "mongodb://127.0.0.1:27017";

const app = express();

app.get('/products', async function(req, res) {
    try {
        const client = await MongoClient.connect(connectionString);
        const dbo = client.db("ishop");
        const documents = await dbo.collection("productCategories").find().toArray();
        res.send(documents);
        client.close();
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/', function(req, res) {
    res.send("<h2>Welcome</h2>");
});

app.listen(3050);
console.log(`Server started listening on: http://127.0.0.1:3050`);


// var express=require("express");
// // var MongoClient = require("mongodb").MongoClient;
// const {MongoClient}=require('mongodb');

// var connectionString="mongodb://127.0.0.1:27017";

// var app=express();

// app.get('/products',function(req,res){
//     MongoClient.connect(connectionString,function(err,clientObj){
//         if(!err)
//         {
//             var dbo=clientObj.db("ishop");
//             dbo.collection("productCategories").find().toArray(function(err,documents){
//                 if(!err){
//                     res.send(documents);
//                 }
//             })
//         }
//   })
// });

// app.get('/',function(req,res){
//     res.send("<h2>Welcome</h2>")
// });

// app.listen(3050);
// console.log(`Server started listning on :http://127.0.0.1:3050`);