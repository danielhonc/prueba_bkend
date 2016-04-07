var express = require('express');
var router = express.Router();
var mongo = require('mongodb');  
var MongoClient = require('mongodb').MongoClient;



/* GET home page. */
router.get('/', function(req, res, next) {
	MongoClient.connect('mongodb://localhost:27017/people', function( err, db) {
		if (err) throw err;
		db.collection('people').find().toArray( function(err,docs) {
			if (err) throw err;
			res.render('index',{ people: docs });
			db.close();
		});
	});
});

router.post('/', function(req, res, next) {
	MongoClient.connect('mongodb://localhost:27017/people', function( err, db) {
		if (err) throw err;
		db.collection('people').insert({ name: req.body.name, job: req.body.job}, function(err,docs) {
			if (err) throw err;
			res.redirect('/');
			db.close();
		});
	});
});

router.get('/update/:id', function(req, res, next) {
	MongoClient.connect('mongodb://localhost:27017/people', function( err, db) {
		if (err) throw err;
		db.collection('people').findOne({ _id: new mongo.ObjectID(req.params.id)}, function(err,doc) {
			if (err) throw err;
			res.render('update', { person : doc });
			db.close();
		});
	});
});

router.post('/update/:id', function(req, res, next) {
	MongoClient.connect('mongodb://localhost:27017/people', function( err, db) {
		if (err) throw err;
		db.collection('people').update({ _id: new mongo.ObjectID(req.params.id)},
		{ name:req.body.name, job: req.body.job  }, function(err,doc) {
			if (err) throw err;
			res.redirect('/');
			db.close();
		});
	});
});

router.get('/delete/:id', function(req, res, next) {
	MongoClient.connect('mongodb://localhost:27017/people', function( err, db) {
		if (err) throw err;
		db.collection('people').remove({ _id: new mongo.ObjectID(req.params.id)}, function(err) {
			if (err) throw err;
			res.redirect('/');
			db.close();
		});
	});
});


module.exports = router;
