var server=require("http");
var sr=server.createServer(function(req,res){

    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    res.end("<h2>Hello</h2>");

});
sr.listen(3030);
console.log('server listning :http://127.0.0.1:3030');