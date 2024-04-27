const http = require("http");
const MongoClient = require("mongodb").MongoClient;

const connString = "mongodb://localhost:27017";

const server = http.createServer(async function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });

    try {
        const client = await MongoClient.connect(connString);
        const dbo = client.db("ishop");
        const documents = await dbo.collection("productCategories").find({}).toArray();
        response.write(JSON.stringify(documents));
        client.close();
    } catch (error) {
        console.error("Error:", error.message);
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.write("Internal Server Error");
    } finally {
        response.end(); // Ensure response is complete
    }
});

server.listen(8080);
console.log('Server Started');
 