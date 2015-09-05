var connect=require('connect');
var http=require('http');

var app=connect();
function doFirst(request,response,next){
  console.log("xyz");
  next();
}
function doSecond(request,response,next){
  console.log("abc");
  next();
}
app.use(doFirst);
app.use(doSecond);
http.createServer(app).listen(8888);
console.log("server is running");
