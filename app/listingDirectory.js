"use strict";

var Client = require('../lib/node_modules/ssh2').Client;

var connectionSettings = {
     host: 'test.rebex.net',
     port: 22, 
     username: 'demo',
     password: 'password'
};

// var connectionSettings = {
//      host: 'demo.wftpserver.com',
//      port: 2222, 
//      username: 'demo-user',
//      password: 'demo-user'
// };

// var remotePathToList = '/var/www/ourcodeworld';
var remotePathToTestUpload = '/upload';
var remotePathToDemo = '/pub';


var connection = new Client();
connection.on('ready', function(){
    connection.sftp(function(error, sftp){
         if (error) throw error;
         
         sftp.readdir(remotePathToTestUpload, function(error, list) {
                if (error) throw error;
                console.dir(list);
                connection.end();
         });
    });
}).connect(connectionSettings);