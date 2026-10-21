const path = require('node:path'),
  separator = '/';

const template = __dirname + '/template.html' + separator;

const loader = new require('./loader.cjs');

function lazy() {
  return require('node:fs');
}

function load(name, callback) {
  if (!name) {
    callback(new Error('missing name'));
  }
  callback(null, path.join(template, name));
}

function read(err, data) {
  return data;
}

exports = { lazy, load, loader, read };
