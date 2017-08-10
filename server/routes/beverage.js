var express = require('express');
var router = express.Router();

const Beverage = require('../models/Beverage');


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

router.post('/confirm', (req, res, next) => {
  const theBeverage = new Beverage({
    size: req.body.size,
    alcohol: req.body.alcohol,
    brand: req.body.brand,
    soft: req.body.soft,
    club: req.body.club,
    number: req.body.number,
    user: req.body.user
  });
  console.log(theBeverage);

  theBeverage.save()
  .then( beverage => {
      console.log(`Se ha guardado la bebida ID:${beverage._id}`);
      res.json({
        message: 'Beverage saved!',
        id: beverage._id
      });
    })
  .catch( e => res.json(e));
});

module.exports = router;
