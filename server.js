require('marko/node-require').install();
require('marko/express'); //enable res.marko

var express = require('express');

const lassoConfig = require('./lasso-config.js');

var indexTemplate = require('./src/pages/index.marko');
var app = express();
var port = 8080;

// Configure lasso to control how JS/CSS/etc. is delivered to the browser
require('lasso').configure(lassoConfig);


app.use(require('lasso/middleware').serveStatic());

app.get('/', function(req, res) {
    res.marko(indexTemplate, {
            name: 'Frank',
            count: 30,
            colors: ['red', 'green', 'blue']
        });
});

app.listen(port, function() {
    console.log('Server started! Try it out:\nhttp://localhost:' + port + '/');

    if (process.send) {
        process.send('online');
    }
});
