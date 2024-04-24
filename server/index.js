var fs=require("fs");

console.log("reading started");
var data=fs.readFileSync("../data/help.txt");
console.log(data.toString());
console.log("reading completed");