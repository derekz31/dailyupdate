const express = require('express');
const router = express.Router();
const Health = require('../models/health.model');


// APIs
// Get all
router.get('/health', function(req, res) {
  Health.find({}, function(err, docs) {
    if(err) return console.error(err);
    res.json(docs);
  });
});

// Count all
router.get('/health/count', function(req, res) {
  Health.count(function(err, count) {
    if(err) return console.error(err);
    res.json(count);
  });
});

// Insert
router.post('/health', function(req, res) {
  var obj = new Health(req.body);
  obj.save(function(err, obj) {
    if(err) return console.error(err);
    res.status(200).json(obj);
  });
});

// Get by id
router.get('/health/:id', function(req, res) {
  Health.findOne({_id: req.params.id}, function(err, obj) {
    if(err) return console.error(err);
    res.json(obj);
  })
});

// Update by id
router.put('/health/:id', function(req, res) {
  Health.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
    if(err) return console.error(err);
    res.sendStatus(200);
  })
});

// Delete by id
router.delete('/health/:id', function(req, res) {
  Health.findOneAndRemove({_id: req.params.id}, function(err) {
    if(err) return console.error(err);
    res.sendStatus(200);
  });
});

module.exports = router;
