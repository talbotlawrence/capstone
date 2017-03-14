"use strict";
console.log("Hello, is it me you're lookin for?");

module.exports = function($scope) {

// app.controller("ConnectingCtrl",  

//lib/node_modules/ssh2--read directory list//////////////////////////////////////////
// var Client = require('/home/talbot/workspace/capstone/lib/node_modules/ssh2').Client;

// var conn = new Client();
// conn.on('ready', function() {
//   console.log('Client :: ready');
//   conn.sftp(function(err, sftp) {
//     if (err) throw err;
//     sftp.readdir('foo', function(err, list) {
//       if (err) throw err;
//       console.dir(list);
//       conn.end();
//     });
//   });
// }).connect({
//   host: 'test.rebex.net',
//   port: 22,
//   username: 'demo',
//   password: 'password'
// });

///////////////////////////////////////////////////////////////////////////////////////
//lib/node_modules/ssh2-sftp-client--list files--this is working///////////////

	$scope.connect = function(){
		let Client = require('../../lib/node_modules/ssh2-sftp-client');
		let sftp = new Client();
		sftp.connect({
		    host: 'test.rebex.net',
		    port: '22',
		    username: 'demo',
		    password: 'password'
		}).then(() => {
			var remoteServerFolders = sftp.list('/');
		    return remoteServerFolders;
		}).then((data) => {
		    console.log('the data info', data);
		}).catch((err) => {
		    console.log('catch error', err);
		});
	};



};
///////////////////////////////////////////////////////////////////////////////