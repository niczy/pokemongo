'use strict';

var express = require('express');
var app = express();


app.get('/_/api', function(req, res){
    res.send('api');
});

app.use('/bower_components', express.static(__dirname + '/build/bundled/bower_components'));
app.use('/images', express.static(__dirname + '/build/bundled/images'));
app.use('/src', express.static(__dirname + '/build/bundled/src'));
app.use('/service-worker.js', express.static(__dirname + '/build/bundled/service-worker.js'));
app.use('/manifest.json', express.static(__dirname + '/build/bundled/manifest.js'));
app.use('/*', express.static(__dirname + '/build/bundled/index.html'));
app.use('/', express.static(__dirname + '/build/bundled/index.html'));

app.listen(8080);
