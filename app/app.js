"use strict";

let angular = require("../lib/node_modules/angular/"),
	app = angular.module("SftpApp", ['ngRoute']);

require("../lib/node_modules/angular-route/angular-route.min.js");

require("./factories/");
require("./controllers/");


// var app = angular.module("SftpApp", ["ngRoute"]);

// let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
// 	AuthFactory.isAuthenticated()
// 	.then ((userExists) => {
// 		if (userExists){
// 			resolve();
// 		}else {
// 			reject();
// 		}
// 	});
// });

app.config(function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: 'partials/connect.html',
		controller:"ConnectingCtrl"
		// resolve: {isAuth}
	});//.
	// when('/login', {
	// 	templateUrl: 'partials/login.html',
	// 	controller:"UserCtrl"
	// 	// resolve: {isAuth}
	// }).
	// otherwise('/items/list');
});

// app.run(($location, FBCreds) => {
// 	let creds = FBCreds;
// 	let authConfig = {
// 		apiKey: creds.apiKey,
// 		authDomain: creds.authDomain,
// 		databseURL: creds.databaseURL
// 	};

// 	firebase.initializeApp(authConfig);
// });