var async = require('async');

function print(c) {
  console.log(c);
}

async.map(['red', 'green', 'blue'], print);