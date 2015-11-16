var pg = require('pg');
var path = require('path');

//var connectionString = process.env.DATABASE_URL || 'postgres://mc:19850808Ln!.@localhost:5432/todo';

var connectionString = require(path.join('../', 'config'));

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE items(id SeRIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });
