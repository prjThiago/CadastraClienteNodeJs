var express = require('express'),
    load = require('express-load'),
    bodyParser = require('body-parser');

module.exports = function() {
    
    var app = express();
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    
    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);
    
    return app;
};