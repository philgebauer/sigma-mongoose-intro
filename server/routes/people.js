var express = require('express');
var router = express.Router();
var Person = require('../models/person');

router.post('/', function(req, res) {
    console.log('post: ', req.body);
    var addedPerson = new Person(req.body);

    addedPerson.save(function(err, data) {
        console.log('save data:', data);
        if(err) {
            console.log('ERR: ', err);
            res.sendStatus(500);
        } else {
            res.send(data);
            res.sendStatus(201);
        }
    });
});

router.get('/', function(req, res) {

    Person.find({}, function(err, people) {
        if(err) {
            console.log('Get ERR: ', err);
            res.sendStatus(500);
        } else {
            res.send(people);
        }
    });
});

router.put('/:id', function(req, res) {
    console.log('new location: ', req.body);
    Person.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { location: req.body.location } },
        function(err, data) {
            if(err) {
                console.log('Put ERR: ', err);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }

    )
});

router.delete('/:id', function(req, res) {
    console.log('new location: ', req.body);
    Person.findByIdAndRemove(
        { _id: req.params.id },
        function(err, data) {
            if(err) {
                console.log('Delete ERR: ', err);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }

    )
});



module.exports = router;
