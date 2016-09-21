'use strict';

// node modules
// const fs = require('fs');
const http = require('http');
const url = require('url');
const queryString = require('querystring');

// npm modules
const cowsay = require('cowsay');

// app modules
const parseBody = require('./lib/parse-body');

// module constants
const PORT = process.env.PORT || 3000;

// module logic
const server = http.createServer(function(req, res){
  req.url = url.parse(req.url);
  req.url.query = queryString.parse(req.url.query);

  if(req.url.pathname === '/'){
    if(req.url.query.text){
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(req.url.query.text);
    } else {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('hello world');
    }
    res.end();
    return;
  }

  if(req.method === 'GET' && req.url.pathname === '/cowsay'){
    if(req.url.query.text){
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(cowsay.say({
        text: req.url.query.text,
        f: req.url.query.f,
        e: req.url.query.e,
        T: req.url.query.t,
      }));
    } else {
      res.writeHead(400, {'Content-Type': 'text/plain'});
      res.write(cowsay.say({
        text: 'bad request\ntry: http GET :3000/cowsay text=="howdy"',
        f: 'vader',
      }));
    }
    res.end();
    return;
  }

  if(req.method === 'POST' && req.url.pathname === '/cowsay'){
    parseBody(req, function(err, body){
      if(err) return console.error(err);
      if(req.url.query.text){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(cowsay.say({text: body}));
      } else {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.write(cowsay.say({
          text: 'bad request\ntry: http POST :3000/cowsay text=="howdy"',
          f: 'vader',
        }));
      }
      res.end();
      return;
    });
  }

  res.writeHead(400, {'Content-Type': 'text/plain'});
  res.write(cowsay.say({
    text: 'bad request\nplease try again.',
    f: 'vader-koala',
  }));
  res.end();
});

server.listen(PORT, function(){
  console.log('server up! <(0-0)> ', PORT);
});
