// "use strict";

// var Client = require('ssh2').Client;
// var remotePathToList = '/path/.com';

// //Connection settings
// var connectionSettings = {
// 	host: 'server.com',
// 	port: 22,
// 	username: 'username',
// 	password: 'password'
// };

// //Create the connection
// var connection = new Client();

// connection.on('ready', function(){
// 	connection.sftp(function(error, sftp){
// 		if(error) throw error;

// //lists the directories on the remote server and closes connection
// 		sftp.readdir(remotePathToList, function(error, list){
// 			if(error) throw error;
// 			console.dir(list);
// 			connection.end();
// 		});

// //Download a file
// 		var remoteDirectory = "/remote/path/file.txt";
// 		var localDirectory = "/local/path/file.txt";

// 		sftp.fastGet(remoteDirectory, localDirectory, {}, function(downloadError){
// 			if(downloadError) throw downloadError;
// 			console.log("Successfully uploaded");
// 		});

// //Upload a file
// 		var fs = require("fs"); //this line uses the node file system
// 		var readStream = fs.createReadStream("/local/path/file.txt");
// 		var writeStream = sftp.createWriteStream("/remote/path/file.txt");

// 		writeStream.on('close', function(){
// 			console.log("The file transferred successfully");
// 		});

// 		writeStream.on('end', function(){
// 			console.log("The connection closed");
// 			connection.close();
// 		});

// 		readStream.pipe(writeStream);  //initiate the transfer of the file


// 	});
// }).connect(connectionSettings);