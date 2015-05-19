var io = require('socket.io').listen(5000);

io.sockets.on('connection', function (socket) {
	socket.on('connection name',function(user){
		console.log("new user "+user.name + " has joined.");
	    io.sockets.emit('new user', user.name + " has joined.");
	  });
});