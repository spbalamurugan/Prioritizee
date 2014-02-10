'use strict';


var IndexModel = require('../models/index');


module.exports = function (app) {

    var model = new IndexModel();


    app.get('/', function (req, res) {
        res.render('index', model);
    });

    app.get('/testing', function (req, res) {
        res.render('index', model);
    });

    app.post('/evaluated', function (req, res) {
        res.render('index', model);
    });
};
