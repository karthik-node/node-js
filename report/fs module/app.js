var fs= require('fs');

fs.writeFileSync("file.txt","node js is pretty cool");

console.log(fs.readFileSync("file.txt").toString());

var path= require('path');
var websiteHome="Desktop/mywork1//karthik/index.html";
var websiteAbout="desktop/mywork1/karthik/about.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));
