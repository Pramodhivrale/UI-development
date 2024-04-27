var fs=require('fs');
0
console.log('Read Started');

fs.readFile("../data/help.txt",function(err,data){
    if(!err)
    {
        console.log(data.toString());
    }
    else{
        console.log('err');
    }
   

});
console.log('Read Completed');