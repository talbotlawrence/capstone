// "use strict";
// console.log("Hello, is it me you're lookin for?");

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