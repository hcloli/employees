// Restful API routes

var Datastore = require('nedb');
var db = new Datastore({filename: __dirname + '/database/employees.json', autoload: true});

module.exports = function (app) {

    // get all employees
    app.get('/api/all', function (req, res) {
        db.find({}, {_id: 1, first_name: 1, last_name: 1, position: 1, img_id: 1}, function (err, docs) {
            res.json(docs);
        });
    });

    // get details of required employee
    app.get('/api/employee/:employee_id', function (req, res) {
        db.find({
            _id: req.params.employee_id
        }, function (err, docs) {
            res.json(docs);
        });
    });

    // load front-end application
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/www/index.html');
    });

};