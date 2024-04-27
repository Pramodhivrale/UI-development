var express=require("express");
var app=express();

app.get('/',function(req,res){
    res.send("<h2>HOME | API</h2>");
});

app.get('/products',function(req,res){
    res.send([{'Name':'Tv','Price':2000},{'Name':'Mobile','price':2000}]);
});

app.get('/details/:id/:name/:price',function(req,res){
    res.send(`
        id :${req.params.id} <br>
        name :${req.params.name} <br>
        price :${req.params.price} <br>
    
    `);
});


app.listen(3030);
console.log(`Server started listning on :http://127.0.0.1:3030`);