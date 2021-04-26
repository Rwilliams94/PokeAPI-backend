var express = require('express');
var router = express.Router();
const User = require("../models/User.model")


/* GET main functions. */

router.get('/', (req, res, next) => {
  User.find()
    .then(user => res.status(200).json(user[0]))
    .catch((err) => res.status(500).json(err));
});

// Update main functiopn

router.patch('/update/:id', (req, res, next) => {
  const userId = req.params.id;
  console.log(req.body);

  User.findByIdAndUpdate(userId, req.body, {new: true})
    .then((updatedUser) => {
      res.status(200).json(updatedUser);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
})

// add pokemon favourite 


router.patch("/add/:id", (req, res, next) => {
  const userId = req.params.id;
  const pokemonName = req.body.name;
  

  User.findByIdAndUpdate(userId, { $addToSet: { favourites: pokemonName } }, { new: true })
    .then((userDocument) => {
      res.status(200).json(userDocument);
    })
    .catch(next);
});


// remove pokemon favourite

router.patch("/remove/:id", (req, res, next) => {
  const userId = req.params.id;
  const pokemonName = req.body.name;

  User.findByIdAndUpdate(userId, { $pull: { favourites: pokemonName }  }, { new: true })
    .then((userDocument) => {
      res.status(200).json(userDocument);
    })
    .catch(next);
});




module.exports = router;
