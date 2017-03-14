"use strict";

//lib/node_modules/ssh2--upload////////////////////////////////////////////////////////

// var Client = require('../lib/node_modules/ssh2').Client;

// var connectionSettings = {
//      host: 'test.rebex.net',
//      port: 22, 
//      username: 'demo',
//      password: 'password'
// };

// // var connectionSettings = {
// //      host: 'demo.wftpserver.com',
// //      port: 2222, 
// //      username: 'demo-user',
// //      password: 'demo-user'
// // };

// var Client = require('../lib/node_modules/ssh2').Client;
// var connSettings = {
//      host: 'demo.wftpserver.com',
//      port: 2222, 
//      username: 'demo-user',
//      password: 'demo-user'
// };
// var remotePathToList = '/var/www/ourcodeworld';

// var conn = new Client();
// conn.on('ready', function() {
//     conn.sftp(function(err, sftp) {
//          if (err) throw err;
         
//         var fs = require("../lib/node_modules/filesystem"); 
//         var readStream = fs.createReadStream( "/home/talbot/workspace/capstone/sftp/001talbot.txt" );
//         var writeStream = sftp.createWriteStream( "/upload/" );

//         writeStream.on('close',function () {
//             console.log( "- file transferred succesfully" );
//         });

//         writeStream.on('end', function () {
//             console.log( "sftp connection closed" );
//             conn.close();
//         });

//         // initiate transfer of file
//         readStream.pipe( writeStream );
//     });
// }).connect(connSettings);

///////////////////////////////////////////////////////////////////////////////////////
//lib/node_modules/ssh2-sftp-client--upload--working///////////////////////////

// app.controller("UploadingCtrl", function($scope){

// 	$scope.uploading = function(){
// 		let Client = require('../../lib/node_modules/ssh2-sftp-client');
// 		let sftp = new Client();
// 		sftp.connect({
// 		    host: 'demo.wftpserver.com',
// 		    port: '2222',
// 		    username: 'demo-user',
// 		    password: 'demo-user'
// 		}).then(() => {
// 		    sftp.put("/home/talbot/workspace/capstone/sftp/001talbot.txt", "/upload/001talbot.txt", "zlib");
// 		    return sftp.list('/upload');
// 		}).then((data) => {
// 		    console.log(data, 'the data info');
// 		}).catch((err) => {
// 		    console.log(err, 'catch error');
// 		});
// 	};


// });
/////////////////////////////////////////////////////////////////////////////////