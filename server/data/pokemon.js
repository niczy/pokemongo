'use strict';

var fs = require('fs');
var util = require('util');

var pokemonListRaw = fs.readFileSync(__dirname + '/pokemonlist.csv', 'utf8');
var lines = pokemonListRaw.split('\n')

console.log('Total file is ' + lines.length)

let properties = lines[0].split(',');
var pokemonList = [];
lines.slice(1).forEach(function(line) {
  let values = line.split(',');
  var obj = {};
  values.forEach(function(value, idx) {
    obj[properties[idx]] = value;
  });
  obj.Number = Number(obj.Number.substr(1));
  pokemonList.push(obj);
});

exports.pokemonList = pokemonList;
