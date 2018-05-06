var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var users = require('../models/user').model;
var teams = require('../models/teams').model;
var hackathons = require('../models/hackathons').model;
/* GET home page. */
router.get('/', function (req, res, next) {
  //This is the code for URL/api?type='hackathonList'
  //this will return list of all hackathons

  if (req.query.type == 'hackathonList') {
    if (req.query.name) {
      hackathons.find({
        "name": req.query.name
      }, (err, response) => {
        if (err) {
          res.json({
            err: err,
            success: false
          })
        } else {
          res.json({
            data: response,
            success: true
          })
        }
      });
    } else {
      hackathons.find({}, (err, response) => {
        if (err) {
          res.json({
            err: err,
            success: false
          });
        } else {
          res.json({
            data: response,
            success: true
          });
        }
      });
    }
  } 
  //This is the code for URL/api?type='hackathonList'
  //this will return list of all hackathons
  else if (req.query.type == 'teamDetails') {
    if (req.query.name) {
      teams.find({
        "name": req.query.name
      }, (err, response) => {
        if (err) {
          res.json({
            err: err,
            success: false
          })
        } else {
          res.json({
            data: response,
            success: true
          })
        }
      });
    } else {
      teams.find({}, (err, response) => {
        if (err) {
          res.json({
            err: err,
            success: false
          });
        } else {
          res.json({
            data: response,
            success: true
          });
        }
      });
    }
  } else {
    res.end("HELLO");
  }
});

module.exports = router;