const User = require('../models').User;

module.exports = {
  create(req, res, next) {
    return User
      .create({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        pw: req.body.pw,
      })
      .then(function(user) {
        // res.status(201).send(user);
        console.log("trying to save user to session...");
        // req.session.user = "happy";
        req.session.user = user.dataValues;
        console.log(req.session.user);
        console.log("end");
        // res.redirect('/listings');
      })
      .catch(error => res.status(400).send(error));
      },

  list(req, res) {
  return User
    .all()
    .then(users => res.status(200).send(users))
    .catch(error => res.status(400).send(error));

  },
};
