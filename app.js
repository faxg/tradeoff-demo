var connect = require("connect");

// IBM Bluemix Cloud Mobile Services
var ibmbluemix = require('ibmbluemix');
var ibmsecurity= = require('ibmsecurity');
var ibmcloudcode= = require('ibmcloudcode');
var ibmdata= = require('ibmdata');
var ibmpush= = require('ibmpush');
var config = {
	applicationId:"<ApplicationID>",
	applicationRoute:"<ApplicationRoute>"
};
ibmbluemix.initialize(config);





var port = (process.env.VCAP_APP_PORT || 3000);
var host = (process.env.VCAP_APP_HOST || 'localhost');
var http = require('http');


var app = connect().use(connect.static(__dirname + '/public'))


http.createServer(app).listen(port,host);
