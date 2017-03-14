"use strict";

//lib/node_modules/ssh2--download--this is working/////////////////////////////////////

var Client = require('../lib/node_modules/ssh2').Client;

var connSettings = {
     host: 'test.rebex.net',
     port: 22, 
     username: 'demo',
     password: 'password'
};

var conn = new Client();
conn.on('ready', function() {
    conn.sftp(function(err, sftp) {
        if (err) throw err;
        
        var moveFrom = "/readme.txt";
        var moveTo = "/home/talbot/workspace/capstone/sftp/readme.txt";

        sftp.fastGet(moveFrom, moveTo , {}, function(downloadError){
            if(downloadError) throw downloadError;

            console.log("Succesfully uploaded");
        });
    });
}).connect(connSettings);

///////////////////////////////////////////////////////////////////////////////