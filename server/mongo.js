const MongoClient = require("mongodb").MongoClient;

const connString="mongodb://127.0.0.1:27017";
const database='ishop';
const client=new MongoClient(connString);

async function getData()
{
    let result=await client.connect();
    let db=result.db(database);
    let collection=db.collection('productCategories');
    let response=await collection.find({}).toArray();
    console.log(response); 
}
getData();

// client.connect(function(err,clientObj){
//    if(!err)
//    {
//     console.log('Connected');
//    }
// })
