var net = require('net');

var socketutil = require('./socketutil');

var tcpServer =net.createServer();

tcpServer.on('connection',function(socket){
	
	console.log('connection established.....');
	
	socketutil.socketAddress(socket);
	
	socket.on('end',function(){
		socketutil.socketStats(socket);
                   console.log('server disconnected..');
	});
	
	socket.on('close',function(){
		console.log('closed event on socket fired');	
   
	});
	
	socket.on('data',function(data){

  		console.log('data received from tcp client');
		socket.write('server reply:'+data);
	
		//socket.emit('error',new Error('forecefully injected error');
	});

	socket.on('error',function(){
		console.log('something wrong happend');
		//socket.end('scoket can send some more data but it will be ended');  //explicit error handler
		socket.destroy();
		
	}); 
		 socket.setTimeout(20000);
		 socket.on('timeout',function(){             // for ideal sockets
			socket.end('timed out...');
		});
	
});



setTimeout(function(){
	 tcpServer.close(function(){              //client can't connect after one minute 
	 console.log('sever closed');})},60000);



tcpServer.on('close',function(){ console.log('second close event handler');});

tcpServer.maxConnections = 10;


tcpServer.listen(function(){

		var port=tcpServer.address().port;
		console.log('server starteed listening on port:'+port);
});

	


