"use strict";
console.log("Hello, is it me you're lookin for?");

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
//lib/node_modules/ssh2--download--this is working/////////////////////////////////////

// var Client = require('../lib/node_modules/ssh2').Client;

// var connSettings = {
//      host: 'test.rebex.net',
//      port: 22, 
//      username: 'demo',
//      password: 'password'
// };

// var conn = new Client();
// conn.on('ready', function() {
//     conn.sftp(function(err, sftp) {
//         if (err) throw err;
        
//         var moveFrom = "/readme.txt";
//         var moveTo = "/home/talbot/workspace/capstone/sftp/readme.txt";

//         sftp.fastGet(moveFrom, moveTo , {}, function(downloadError){
//             if(downloadError) throw downloadError;

//             console.log("Succesfully uploaded");
//         });
//     });
// }).connect(connSettings);

///////////////////////////////////////////////////////////////////////////////
//lib/node_modules/ssh2-sftp-client--list files--this is working///////////////

// let Client = require('../lib/node_modules/ssh2-sftp-client');
// let sftp = new Client();
// sftp.connect({
//     host: 'test.rebex.net',
//     port: '22',
//     username: 'demo',
//     password: 'password'
// }).then(() => {
//     return sftp.list('/');
// }).then((data) => {
//     console.log(data, 'the data info');
// }).catch((err) => {
//     console.log(err, 'catch error');
// });

///////////////////////////////////////////////////////////////////////////////
//lib/node_modules/ssh2-sftp-client--upload--not working///////////////////////

let Client = require('../lib/node_modules/ssh2-sftp-client');
let sftp = new Client();
sftp.connect({
    host: 'demo.wftpserver.com',
    port: '2222',
    username: 'demo-user',
    password: 'demo-user'
}).then(() => {
    sftp.put("/home/talbot/workspace/capstone/sftp/001talbot.txt", "/upload/001talbot.txt", "zlib");
    return sftp.list('/upload');
}).then((data) => {
    console.log(data, 'the data info');
}).catch((err) => {
    console.log(err, 'catch error');
});
/////////////////////////////////////////////////////////////////////////////////