var express = require('express');
var app = express();

function siteRoutes() {
	var router = express.Router();
	var request = require('request');

	router.get('/', function(req,res){
		res.render("pages/index");
	});

	router.get('/nightmare', function(req,res){
		res.render("pages/expressHelp");
	});

	router.get('/semantic', function(req,res){
		res.redirect("/nightmare");
	});

	return router; 

}


module.exports = siteRoutes;