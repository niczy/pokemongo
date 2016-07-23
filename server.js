'use strict';

var express = require('express');
var app = express();
var program = require('commander');
var data = require('./server/data/pokemon')

program
  .version('0.0.1')
  .option('--dev', "Dev mode")
  .parse(process.argv)

console.log(program.dev)
var staticPathPrefix = ''
if (!program.dev) {
  staticPathPrefix = '/build/bundled';
}
console.log('static file prefix: ' + staticPathPrefix);

app.get('/_/api', function(req, res){
    res.send('api');
});

app.get('/_/pokemon/list', function(req, res) {
  console.log('got list' + data.pokemonlist);
  res.send(data.pokemonList);
});

app.get('/_/pokemon/list/:id', function(req, res) {
  console.log(req.params.id);
  res.send(data.pokemonList[Number(req.params.id)]);
});

var staticDir = function(path) {
  app.use(path, express.static(__dirname + staticPathPrefix + path));
}

staticDir('/bower_components');
staticDir('/images');
staticDir('/src');
staticDir('/service-worker.js');
staticDir('/manifest.json');
staticDir('/index.html');
staticDir('/')
app.use('/collect-data', express.static(__dirname + staticPathPrefix + '/index.html'));
app.use('/result', express.static(__dirname + staticPathPrefix + '/index.html'));
app.use('/collect-data/*', express.static(__dirname + staticPathPrefix + '/index.html'));
app.use('/app', express.static(__dirname + staticPathPrefix + '/index.html'));

app.listen(8080);
