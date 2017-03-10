// "use strict";

// var Client = require('ssh2').Client;
// var connectionSettings = {
//      host: 'server.com',
//      port: 22, 
//      username: 'myUsername',
//      password: 'myPassword'
// };

// var remotePathToList = '/var/www/ourcodeworld';

// var connection = new Client();
// connection.on('ready', function() {
//     connection.sftp(function(error, sftp) {
//          if (error) throw error;
         
//         var fs = require("fs"); // Use node filesystem
//         var readStream = fs.createReadStream("path-to-local-file.txt");
//         var writeStream = sftp.createWriteStream("path-to-remote-file.txt");

//         writeStream.on('close',function () {
//             console.log("The file transferred succesfully");
//         });

//         writeStream.on('end', function () {
//             console.log( "The sftp connection closed");
//             connection.close();
//         });

//         readStream.pipe( writeStream );  // initiate transfer of file
//     });
// }).connect(connectionSettings);