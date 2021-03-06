var should = require('should');
var io = require('socket.io-client');

var socketURL = 'http://0.0.0.0:5000';

var options ={
  transports: ['websocket'],
  'force new connection': true
};

var chatUser1 = {'name':'Tom'};
var chatUser2 = {'name':'Sally'};
var chatUser3 = {'name':'Dana'};

describe("Chat Server",function(){
	it('Should broadcast new user to all users', function(done){
	//   var client1 = io.connect(socketURL, options);

	//   client1.on('connect', function(data){
	//     client1.emit('connection name', chatUser1);

	//     /* Since first client is connected, we connect
	//     the second client. */
	//     var client2 = io.connect(socketURL, options);

	//     client2.on('connect', function(data){
	//       client2.emit('connection name', chatUser2);
	//     });

	//     client2.on('new user', function(usersName){
	//       usersName.should.equal(chatUser2.name + " has joined.");
	//       client2.disconnect();
	//     });

	//   });

	//   var numUsers = 0;
	//   client1.on('new user', function(usersName){
	//     numUsers += 1;

	//     if(numUsers === 2){
	//       usersName.should.equal(chatUser2.name + " has joined.");
	//       client1.disconnect();
	//       done();
	//     }
	//   });
		var clients = [], client,i = 0;
		for(var counter = 0 ; counter < 1000 ; counter ++){
			client = io.connect(socketURL,options);
			client.on('connect',function(data){
				var name = "Diwakar"+i;
				i++;
				client.emit('connection name',{name : name});
				client.on('new user',function(userName){
					userName.should.equal(name + " has joined");
					done();
				});
			});
			clients.push();
		}
	});

	
});