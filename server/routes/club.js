var express = require('express');
var router = express.Router();

const Club = require('../models/Club');


/* GET Beverages listing. */

/*
router.get('/beverage', (req, res, next) => {
  Phone.find((err, beveragesList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(beveragesList);
  });
});

*/

/* GET a single Beverage. */

/*
router.get('/beverage/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Phone.findById(req.params.id, (err, theBeverage) => {
      if (err) {
        res.json(err);
        return;
      }

      res.json(theBeverage);
    });
});
*/

router.post('/club', (req, res, next) => {
  const theClub = new Club({
    name: req.body.name,
    location: req.body.location,
    position: req.body.position,
  });
  console.log(theClub);

  theClub.save()
  .then( club => {
      console.log(`Se ha guardado el club de ID:${club._id}`);
      res.json({
        message: 'club saved!',
        id: club._id
      });
    })
  .catch( e => res.json(e));
});

module.exports = router;
