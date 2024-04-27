var mongoClient = require("mongodb").MongoClient;

var connectionString = "mongodb://127.0.0.1:27017/";

mongoClient.connect(connectionString, function(err, clientObj) {
    if (!err) {
        var dbo = clientObj.db("ishop");
        var data = {
            CategoryId: 4,
            CategoryName: "prmaod"
        };
        dbo.collection("tblcategories").insertOne(data, function(err, result) {
            if (!err) {
                console.log('Inserted');
            } else {
                console.log(err);
            }
            clientObj.close(); // Close the MongoDB connection
        });
    } else {
        console.log(err);
    }
});
