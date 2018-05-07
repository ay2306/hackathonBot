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
  /*
  Different parameters allowed
  1 type(mandatory)
    i. hackathons (details for hackathon(s))
      Further options available are:
      a. name : String (Returns details with certain name)
      b. id: ObjectID (Return details of hackathon with specific id)
      c. active: true or false (Return list of all hackathons that are currently active)
      d. activeIn: integer (for time in minutes) (Return list of hackathons those will be active in value hours)
      e. organiser: List of all organisers
        - name or id is required for this one
    ii. teams (details for hackathon(s))
      Further options available are:
      a. name :String (Returns details with certain name)
      b. id: ObjectID (Return details of hackathon with specific id)
      c. activeEvents: integer (returns list of currently active or to be active in time(minutes) for given team){a or b are required for this one}
    iii. users
      Further options available are:
      a. name :String (Returns details with certain name)
      b. id: ObjectID (Return details of hackathon with specific id)
      c. activeEvents: integer (returns list of currently active or to be active in time(minutes) for given user){a or b are required for this one}
  
  */
  // var searchQuery = {};
  // if(req.query.name){
  //   searchQuery["name"] = req.query.name;
  // }
  // if(req.query.id){
  //   searchQuery = {};
  //   searchQuery["_id"] = req.query.id;
  // }

  var callback = function (err, data) {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({
        err: err,
        success: false
      })
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({
        data: data,
        success: true
      })
    }
  }
  if (req.query.type == 'hackathons') {
    //when name query parameter is added as well in request
    if (req.query.name) {
      hackathons.find({
        "name": req.query.name
      }, function (err, data) {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            err: err,
            success: false
          })
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            data: data,
            success: true
          })
        }
      });
    } else if (req.query.id) {
      hackathons.find({
        "_id": req.query.id
      }, function (err, data) {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            err: err,
            success: false
          })
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            data: data,
            success: true
          })
        }
      });
    } else {
      hackathons.find({}, function (err, data) {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            err: err,
            success: false
          })
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            data: data,
            success: true
          })
        }
      });
    }
  }
  //This is the code for URL/api?type='hackathonList'
  //this will return list of all hackathons
  else if (req.query.type == 'teams') {
    //for query name='anything'
    if (req.query.name) {
      teams.find({
        "name": req.query.name
      }, function (err, data) {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            err: err,
            success: false
          })
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            data: data,
            success: true
          })
        }
      });
    } else if (req.query.id) {
      teams.find({
        "_id": req.query.id
      }, function (err, data) {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            err: err,
            success: false
          })
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            data: data,
            success: true
          })
        }
      });
    } else {
      teams.find({}, function (err, data) {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            err: err,
            success: false
          })
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            data: data,
            success: true
          })
        }
      });
    }
  } else if (req.query.type == 'users') {
    //for query name='anything'
    if (req.query.name) {
      users.find({
        "name": req.query.name
      }, function (err, data) {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            err: err,
            success: false
          })
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            data: data,
            success: true
          })
        }
      });
    } else if (req.query.id) {
      users.find({
        "_id": req.query.id
      }, function (err, data) {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            err: err,
            success: false
          })
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            data: data,
            success: true
          })
        }
      });
    } else {
      users.find({}, function (err, data) {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            err: err,
            success: false
          })
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            data: data,
            success: true
          })
        }
      });
    }
  } else {
    res.end("HELLO");
  }
});

router.post('/', function (req, res, next) {
  if (req.body.action == 'create') {
    if (req.body.type == 'hackathon') {
      var objectToSubmit = {
        "name": req.body.name,
        "startDate": req.body.date,
        "endDate": req.body.endDate,
        "venue": req.body.venue,
      }
      if (req.body.organisers) {
        objectToSubmit['organisers'] = req.body.organisersl
      }
      if (req.body.prize) {
        objectToSubmit['prize'] = req.body.prize;
      }
      hackathons.create(objectToSubmit, function (err, data) {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            err: err,
            success: false
          })
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            data: data,
            success: true
          })
        }
      });
    }
    if (req.body.type == 'team') {
      var objectToSubmit = {
        "name": req.body.name,
      }
      hackathons.create(objectToSubmit, function (err, data) {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            err: err,
            success: false
          })
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            data: data,
            success: true
          })
        }
      });
    }
    if (req.body.type == 'user') {
      var objectToSubmit = {
        "name": req.body.name,
      }
      if (req.body.institute) {
        objectToSubmit['institute'] = req.body.institute;
      }
      users.create(objectToSubmit, function (err, data) {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            err: err,
            success: false
          })
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            data: data,
            success: true
          })
        }
      });
    }
  }
  if (req.body.action == 'update') {
    if (req.body.type == 'hackathon') {
      var updateFunction = function (id, data) {
        var objectToSubmit = {};
        if (req.body.name) {
          objectToSubmit['name'] = req.body.name
        }
        if (req.body.startDate) {
          objectToSubmit['startDate'] = req.body.startDate
        }
        if (req.body.endDate) {
          objectToSubmit['endDate'] = req.body.endDate
        }
        if (req.body.venue) {
          objectToSubmit['venue'] = req.body.venue
        }
        if (req.body.organisers) {
          objectToSubmit['organisers'] = req.body.organisers
        }
        if (req.body.prize) {
          objectToSubmit['prize'] = req.body.prize;
        }
        hackathons.findByIdAndUpdate(id, {
          $set: objectToSubmit
        }, {
          new: true
        }, function (err, data) {
          if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({
              err: err,
              success: false
            })
          } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({
              data: data,
              success: true
            })
          }
        });
      }
      var id;
      if (req.body.id) {
        id = req.body.id;
      } else if (req.body.name) {
        hackathons.find({
          "name": req.body.name
        }, (err, res) => {
          if (err) {
            res.json({
              "success": false
            })
          } else {
            id = result[0]._id;
          }
        })
      }
      updateFunction(id, req.body);
    }
    if (req.body.type == 'team') {
      var updateFunction = function (id, data) {
        var objectToSubmit = {};
        if (req.body.name) {
          objectToSubmit['name'] = req.body.name
        }
        teams.findByIdAndUpdate(id, {
          $set: objectToSubmit
        }, {
          new: true
        }, function (err, data) {
          if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({
              err: err,
              success: false
            })
          } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({
              data: data,
              success: true
            })
          }
        });
      }
      var id;
      if (req.body.id) {
        id = req.body.id;
      } else if (req.body.name) {
        teams.find({
          "name": req.body.name
        }, (err, res) => {
          if (err) {
            res.json({
              "success": false
            })
          } else {
            id = result[0]._id;
          }
        })
      }
      updateFunction(id, req.body);
    }
    if (req.body.type == 'user') {
      var objectToSubmit = {
        "name": req.body.name,
      }
      if (req.body.institute) {
        objectToSubmit['institute'] = req.body.institute;
      }
      users.create(objectToSubmit, function (err, data) {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            err: err,
            success: false
          })
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            data: data,
            success: true
          })
        }
      });
    }
  }
  if (req.body.action == 'add') {
    if (req.body.type == 'hackathonWon') {
      var hackathonId;
      var teamId;
      if (req.body.hackathonName) {
        hackathons.findOne({
          "hackathonName": req.body.hackathonName
        }, (err, result) => {
          hackathonId = result._id;
        })
      } else {
        hackathonId = req.body.hackathonId;
      }
      if (req.body.teamName) {
        teams.findOne({
          "teamName": req.body.teamName
        }, (err, result) => {
          teamId = result._id;
        })
      } else {
        teamId = req.body.teamId;
      }
      hackathons.findByIdAndUpdate(hackathonId, {
        $set: {
          winner: teamId
        }
      }, function (err, data) {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            err: err,
            success: false
          })
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            data: data,
            success: true
          })
        }
      });
      teams.findById(teamId, (err, result) => {
        result.hackathonWon.push(hackathonId);
        result.save();
        (result.participants).forEach(element => {
          findById(element, (err, user) => {
            user.hackathonWons.push(hackathonId);
            user.save();
          })
        });
      });
    }
  }
  if (req.body.type == 'hackathonParticipant') {
    var hackathonId;
    var teamId;
    if (req.body.hackathonName) {
      hackathons.findOne({
        "hackathonName": req.body.hackathonName
      }, (err, result) => {
        hackathonId = result._id;
      })
    } else {
      hackathonId = req.body.hackathonId;
    }
    if (req.body.teamName) {
      teams.findOne({
        "teamName": req.body.teamName
      }, (err, result) => {
        teamId = result._id;
      })
    } else {
      teamId = req.body.teamId;
    }
    hackathons.findById(hackathonId, (err, element) => {
      element.participants.push(teamId);
      element.save();
    })
    teams.findById(teamId, (err, result) => {
      result.hackthonParticipated.push(hackathonId);
      result.save();
      (result.participants).forEach(element => {
        findById(element, (err, user) => {
          user.hackathonParticipated.push(hackathonId);
          user.save();
        })
      });
    });
  }
  if (req.body.type == 'teamPlayer') {
    var userId;
    var teamId;
    if (req.body.username) {
      users.findOne({
        "username": req.body.username
      }, (err, result) => {
        userId = result._id;
      })
    } else {
      userId = req.body.userId;
    }
    if (req.body.teamName) {
      teams.findOne({
        "teamName": req.body.teamName
      }, (err, result) => {
        teamId = result._id;
      })
    } else {
      teamId = req.body.teamId;
    }
    team.findById(teamId, (err, element) => {
      element.participants.push(userId);
      element.save();
    })
    users.findById(userId, (err, result) => {
      result.teams.push(teamId);
      result.save();
    });

  }
});


router.get('/getUsers', (req, res, next) => {
  users.find({}, function (err, data) {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({
        err: err,
        success: false
      })
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({
        data: data,
        success: true
      })
    }
  });
})
router.get('/getTeams', (req, res, next) => {
  teams.find({}, function (err, data) {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({
        err: err,
        success: false
      })
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({
        data: data,
        success: true
      })
    }
  });
})
router.get('/getHackathons', (req, res, next) => {
  hackathons.find({}, function (err, data) {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({
        err: err,
        success: false
      })
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({
        data: data,
        success: true
      })
    }
  });
})
module.exports = router;