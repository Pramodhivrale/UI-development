var fs=require('fs');
console.log('Read Started');
var data= fs.readFileSync("../data/help.txt");
console.log(data.toString());
console.log('Read Completed');