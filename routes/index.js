var express = require('express');
var router = express.Router();
var mongo = require('mongodb');  
var MongoClient = require('mongodb').MongoClient;

var url ='mongodb://localhost:27017/prueba';



/* GET home page. */
router.get('/', function(req, res, next) {
	MongoClient.connect(url, function( err, db) {
		if (err) throw err;
		db.collection('productos').find().toArray( function(err,docs) {
			if (err) throw err;
			res.render('index',{ productos: docs });
			db.close();
		});
	});
});

router.post('/', function(req, res, next) {
	MongoClient.connect(url, function( err, db) {
		if (err) throw err;
		db.collection('productos').insert({ producto: req.body.producto, descripcion: req.body.descripcion, precio: req.body.precio}, function(err,docs) {
			if (err) throw err;
			res.redirect('/');
			db.close();
		});
	});
});

router.get('/update/:id', function(req, res, next) {
	MongoClient.connect(url, function( err, db) {
		if (err) throw err;
		db.collection('productos').findOne({ _id: new mongo.ObjectID(req.params.id)}, function(err,doc) {
			if (err) throw err;
			res.render('update', { producto : doc });
			db.close();
		});
	});
});

router.post('/update/:id', function(req, res, next) {
	MongoClient.connect(url, function( err, db) {
		if (err) throw err;
		db.collection('productos').update({ _id: new mongo.ObjectID(req.params.id)},
		{ producto:req.body.producto, descripcion: req.body.descripcion, precio: req.body.precio  }, function(err,doc) {
			if (err) throw err;
			res.redirect('/');
			db.close();
		});
	});
});

router.get('/delete/:id', function(req, res, next) {
	MongoClient.connect(url, function( err, db) {
		if (err) throw err;
		db.collection('productos').remove({ _id: new mongo.ObjectID(req.params.id)}, function(err) {
			if (err) throw err;
			res.redirect('/');
			db.close();
		});
	});
});


module.exports = router;
