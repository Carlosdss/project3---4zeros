var express = require('express');
var router = express.Router();

const Beverage = require('../models/Order');


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

router.post('/order', (req, res, next) => {
  const theOrder = new Order({
    beverages: req.body.order,
    user: req.body.user,
    date: req.body.date,
    club: req.body.club
  });
  console.log(theOrder);

  theOrder.save()
  .then( order => {
      console.log(`Se ha guardado el pedido de ID:${order._id}`);
      res.json({
        message: 'order saved!',
        id: order._id
      });
    })
  .catch( e => res.json(e));
});

module.exports = router;
