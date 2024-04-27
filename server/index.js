const { MongoClient } = require("mongodb");

async function main() {
    const connectionString = "mongodb://127.0.0.1:27017";
    
    try {
        const client = await MongoClient.connect(connectionString);
        console.log("Connected to MongoDB");

        const db = client.db("ishop");
        const collection = db.collection("productCategories");

        const documents = await collection.find().toArray();
        
        if (documents.length > 0) {
            console.log("Documents found:");
            console.log(documents);
        } else {
            console.log("No documents found in the 'productCategories' collection.");
        }

        client.close();
        console.log("Connection closed");
    } catch (error) {
        console.error("Error:", error.message);
        process.exit(1); // Exit the process with a non-zero code to indicate failure
    }
}

main();

// var MongoClient = require("mongodb").MongoClient;


// var connectionString = "mongodb://127.0.0.1:27017";

// MongoClient.connect(connectionString, function(err, clientobj) {
//     if (!err) {
//         var dbo = clientobj.db("ishop");
//         dbo.collection("productCategories").find().toArray(function(err, documents) {
//             if (!err) {
//                 if (documents.length > 0) {
//                     console.log("Documents found:");
//                     console.log(documents);
//                 } else {
//                     console.log("No documents found in the 'productCategories' collection.");
//                 }
//             } else {
//                 console.log("Error finding documents:", err);
//             }
//             clientobj.close(); // Close the MongoDB connection
//         });
//     } else {
//         console.log("Error connecting to MongoDB:", err.message);
//     }
// });
