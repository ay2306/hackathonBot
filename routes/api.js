var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var users = require('../models/user').model;
var teams = require('../models/teams').model;
var hackathons = require('../models/hackathons').model;
mongoose.Promise = require('bluebird');
/* GET home page. */
router.get('/', function (req, res, next) {
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
      console.log(objectToSubmit);
      teams.create(objectToSubmit, function (err, data) {
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
        "username": req.body.username
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
        console.log(objectToSubmit);
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
        }, (err, result) => {
          if (err) {
            res.json({
              "success": false
            })
          } else {
            console.log(result);
            console.log(result[0]._id);

            id = result[0]._id;
            updateFunction(id, req.body);
          }
        })
      }
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
        }, (err, result) => {
          if (err) {
            res.json({
              "success": false
            })
          } else {
            id = result[0]._id;
            updateFunction(id, req.body);
          }
        })
      }
    }
    if (req.body.type == 'user') {
      var updateFunction = function (id, data) {
        var objectToSubmit = {};
        if (req.body.name) {
          objectToSubmit['name'] = req.body.name;
        }
        if (req.body.institute) {
          objectToSubmit['institute'] = req.body.institute;
        }
        users.findByIdAndUpdate(id, {
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
        users.find({
          "name": req.body.name
        }, (err, result) => {
          if (err) {
            res.json({
              "success": false
            })
          } else {
            id = result[0]._id;
            updateFunction(id, req.body);
          }
        })
      }
    }
  }
  if (req.body.action == 'add') {
    if (req.body.type == 'hackathonWon') {
      var updateTeam = function (teamId, hackathonId) {
        teams.findById(teamId)
          .then((element) => {
            element.hackathonWon.push(hackathonId);
            teams.findByIdAndUpdate(teamId, {
              $set: {
                hackathonWon: element.hackathonWon
              }
            }, {
              new: true
            }, (err, response) => {
              var participants = response.participants;
              participants.forEach(participant => {
                users.findById(participant, (err, parResponse) => {
                  console.log("USER: " + parResponse);
                  parResponse.hackathonWons.push(hackathonId);
                  users.findByIdAndUpdate(participant, {
                    $set: {
                      hackathonWons: parResponse.hackathonWons
                    }
                  }, {
                    new: true
                  }, (err, variable) => {
                    //do nothing
                  })
                })
              });
              console.log("TEAM UPDATEDs")
              console.log(response);
              updateHackathon(teamId, hackathonId);
            })
          })
          .catch((err) => {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({
              err: err,
              success: false
            })
          });
      }
      var updateHackathon = function (teamId, hackathonId) {
        hackathons.findByIdAndUpdate(hackathonId, {
          $set: {
            winner: teamId
          }
        }, {
          new: true
        }, (err, response) => {
          if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({
              err: err,
              success: false
            })
          } else {
            console.log("Hackathon UPDATEDs")
            console.log(response);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({
              data: response,
              success: true
            })
          }
        })
      }
      var hackathonId;
      var teamId;
      if (!req.body.teamName) {
        teamId = req.body.teamId;
      }
      if (!req.body.hackathonName) {
        userId = req.body.hackathonId;
      } else {
        hackathons.findOne({
          "name": req.body.hackathonName
        }, (err, result) => {
          console.log(result);
          hackathonId = result._id;
          if (req.body.teamName) {
            teams.findOne({
              "name": req.body.teamName
            }, (err, response) => {
              console.log(result);
              teamId = response._id;
              console.log("TEAM ID " + teamId);
              console.log("USER ID " + hackathonId);
              updateTeam(teamId, hackathonId);
            })
          }
        })
      }
    }

    if (req.body.type == 'hackathonParticipant') {
      var updateTeam = function (teamId, hackathonId) {
        teams.findById(teamId)
          .then((element) => {
            element.hackthonParticipated.push(hackathonId);
            teams.findByIdAndUpdate(teamId, {
              $set: {
                hackthonParticipated: element.hackthonParticipated
              }
            }, {
              new: true
            }, (err, response) => {
              var participants = response.participants;
              participants.forEach(participant => {
                users.findById(participant, (err, parResponse) => {
                  // console.log("USER: " + parResponse);
                  parResponse.hackathonParticipated.push(hackathonId);
                  users.findByIdAndUpdate(participant, {
                    $set: {
                      hackathonParticipated: parResponse.hackathonParticipated
                    }
                  }, {
                    new: true
                  }, (err, variable) => {
                    //do nothing
                  })
                })
              });
              console.log("TEAM UPDATEDs")
              console.log(response);
              updateHackathon(teamId, hackathonId);
            })
          })
          .catch((err) => {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({
              err: err,
              success: false
            })
          });
      }
      var updateHackathon = function (teamId, hackathonId) {
        hackathons.findById(hackathonId)
          .then((result) => {
            result.participants.push(teamId);
            hackathons.findByIdAndUpdate(hackathonId, {
              $set: {
                participants: result.participants
              }
            }, {
              new: true
            }, (err, response) => {
              console.log("Hackathon UPDATEDs")
              console.log(response);
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json({
                data: response,
                success: true
              })

            })

          })
          .catch((err) => {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({
              err: err,
              success: false
            })
          });
      }
      var hackathonId;
      var teamId;
      if (!req.body.teamName) {
        teamId = req.body.teamId;
      }
      if (!req.body.hackathonName) {
        userId = req.body.hackathonId;
      } else {
        hackathons.findOne({
          "name": req.body.hackathonName
        }, (err, result) => {
          console.log(result);
          hackathonId = result._id;
          if (req.body.teamName) {
            teams.findOne({
              "name": req.body.teamName
            }, (err, response) => {
              console.log(result);
              teamId = response._id;
              console.log("TEAM ID " + teamId);
              console.log("USER ID " + hackathonId);
              updateTeam(teamId, hackathonId);
            })
          }
        })
      }

    }
    if (req.body.type == 'teamPlayer') {
      var updateTeam = function (teamId, userId) {
        teams.findById(teamId)
          .then((element) => {
            element.participants.push(userId);
            teams.findByIdAndUpdate(teamId, {
              $set: {
                participants: element.participants
              }
            }, {
              new: true
            }, (err, response) => {
              console.log("TEAM UPDATEDs")
              console.log(response);
              updateUser(teamId, userId);
            })
          })
          .catch((err) => {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({
              err: err,
              success: false
            })
          });
      }
      var updateUser = function (teamId, userId) {
        users.findById(userId)
          .then((result) => {
            result.teams.push(teamId);
            users.findByIdAndUpdate(userId, {
              $set: {
                teams: result.teams
              }
            }, {
              new: true
            }, (err, response) => {
              console.log("USER UPDATEDs")
              console.log(response);
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json({
                data: response,
                success: true
              })

            })

          })
          .catch((err) => {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({
              err: err,
              success: false
            })
          });
      }
      var userId;
      var teamId;
      if (!req.body.teamName) {
        teamId = req.body.teamId;
      }
      if (!req.body.username) {
        userId = req.body.userId;
      } else {
        users.findOne({
          "username": req.body.username
        }, (err, result) => {
          console.log(result);
          userId = result._id;
          if (req.body.teamName) {
            teams.findOne({
              "name": req.body.teamName
            }, (err, response) => {
              console.log(result);
              teamId = response._id;
              console.log("TEAM ID " + teamId);
              console.log("USER ID " + userId);
              updateTeam(teamId, userId);
            })
          }
        })
      }
    }
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