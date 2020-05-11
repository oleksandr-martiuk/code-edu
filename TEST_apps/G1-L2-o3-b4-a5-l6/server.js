const http = require('http');
const routing = require ('./routing');
const EventEmitter = require('events');

const APP_PORT = 3000;

let server = new http.Server(function(req, res) {
    let jsonStr = '';

    console.log('type of req: ', req instanceof EventEmitter);
    console.log('EventEmitter (keys): ', Object.getOwnPropertyNames(EventEmitter));

    res.setHeader('Content-Type', 'application/json');

    req.on('data', data => {
        jsonStr += data;
    });
    req.on('end', () => {
        routing.define(req, res, jsonStr);
    });
});

server.listen(APP_PORT, 'localhost');
