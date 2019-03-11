// CREATE, READ, UPDATE, DELETE API REQUESTS TO THE RACES DB GO HERE

const db = require('../models')

module.exports = function(app) {
  // GET ALL RACES AND RETURN DATA
  app.get('/api/races', function(req, res) {
    db.Race.findAll({})
      .then(function(data) {
        res.json(data)
      })
  })

  // GET RACES THAT MATCH THE URL CATEGORY
  app.get('/api/races/:category', function(req, res) {
    db.Race.findAll( {
      where: {
        category: req.params.category
      }
    }).then(function(data) {
      res.json(data)
    })
  })

  app.get('/api/races/individual/:id', function(req, res) {
    let id = req.params.id
    console.log(id)
    db.Race.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data)
    })
  })

  // CREATE NEW RACE AND INSERT TO DATABASE
  app.post('/api/races/', function(req, res) {
    // console.log(req.body)
    db.Race.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      raceName: req.body.raceName,
      category: req.body.category,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      url: req.body.url,
      raceLength: req.body.raceLength,
      description: req.body.description,
      participantCap: req.body.participantCap,
      date: req.body.date
    }).then(function(data) {
      res.json(data)
    }).catch(function(error) {
      res.json(error)
    })
  })

  app.delete('/api/races/:id', function(req, res) {
    db.Race.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data)
    })
  })

  app.put('/api/races', function(req, res) {
    db.Race.update(req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(data) {
        console.log(`update racesApiRoutes callback`)
        res.json(data)
      })
  })
}