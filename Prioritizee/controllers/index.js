'use strict';


var IndexModel = require('../models/index');


module.exports = function (app) {

    var model = new IndexModel();


    app.get('/', function (req, res) {
        res.render('index', model);
    });

    app.get('/testing', function (req, res) {
        res.render('evaluated', model);
    });

    app.get('/evaluated', function (req, res) {
        console.log("reached evaluated");
        res.render('index', model);
    });
};
