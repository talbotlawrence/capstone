"use strict";

let angular = require("../../lib/node_modules/angular/"),
	app = angular.module("SftpApp");

app.controller("ConnectingCtrl", require("./ConnectingCtrl.js"));
app.controller("DownloadingCtrl", require("./DownloadingCtrl.js"));
app.controller("UploadingCtrl", require("./UploadingCtrl.js"));