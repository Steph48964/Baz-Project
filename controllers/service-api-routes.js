
var db = require("../models");

module.exports = function(app) {

  app.get("/api/services/", function(req, res) {
    db.Service.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.post("/api/services", function(req, res) {
    db.Service.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

};
