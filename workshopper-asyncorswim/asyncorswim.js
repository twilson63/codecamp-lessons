#!/usr/bin/env node

const Workshopper = require('workshopper')
    , path        = require('path')

Workshopper({
    name     : 'asyncorswim'
  , title    : 'ASYNC or SWIM - Learn async.js'
  , appDir   : __dirname
  , helpFile : path.join(__dirname, 'help.txt')
}).init()