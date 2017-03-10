// "use strict";

// var Client = require('ssh2').Client;
// var connectionSettings = {
//      host: 'server.com',
//      port: 22, 
//      username: 'myUsername',
//      password: 'myPassword'
// };

// var connection = new Client();
// connection.on('ready', function() {
//     connection.sftp(function(error, sftp) {
//         if (error) throw error;
        
//         var remoteDirectory = "/remote/file/path/file.txt";
//         var localDirectory = "/local/file/path/file.txt";

//         sftp.fastGet(remoteDirectory, localDirectory , {}, function(downloadError){
//             if(downloadError) throw downloadError;

//             console.log("Succesfully uploaded");
//         });
//     });
// }).connect(connectionSettings);