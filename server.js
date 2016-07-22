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
  res.send(data.pokemonList);
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

app.listen(8080);
