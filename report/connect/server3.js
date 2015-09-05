var connect=require('connect');
var http=require('http');

var app=connect();
function profile(request,response){
  console.log("user request profile");
}
function forum(request,response){
  console.log("user request forum");
}
app.use('/profile',profile);
app.forum('/forum',forum);
http.createServer(app).listen(8888);
console.log("server is running");
