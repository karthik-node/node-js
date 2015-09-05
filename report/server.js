var http=require('http');

function onRequest(request,response){
  console.log("user made a  request "+ request.url);
  response.writeHead(200,{"Context-Type":"text/plain"});
  response.wite("data");
  response.end();
}

http.createServer(onRequest).listen(8888);
console.log("server is running....");
