const Club = require('../models/Club');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fourzeros')
  .then(() => {
    let clubs = [
      {
        name: 'Pachá',
        location: 'Madrid',
        position: { type: "Point", coordinates: [40.427027, -3.699436]}
      },
      {
        name: 'Kapital',
        location: 'Madrid',
        position: { type: "Point", coordinates: [40.409972, -3.693196]}
      },
      {
        name: 'Comodoro',
        location: 'Madrid',
        position: { type: "Point", coordinates: [40.445888, -3.685121]}
      },
      {
        name: 'Graf',
        location: 'Madrid',
        position: { type: "Point", coordinates: [40.437345, -3.682680]}
      },
      {
        name: 'Razzmatazz',
        location: 'Barcelona',
        position: { type: "Point", coordinates: [41.397792, 2.191599]}
      },
      {
        name: 'Opium',
        location: 'Barcelona',
        position: { type: "Point", coordinates: [41.385329, 2.197249]}
      },
      {
        name: 'Soho',
        location: 'Barcelona',
        position: { type: "Point", coordinates: [41.378423, 2.180044]}
      },
      {
        name: 'Hyde',
        location: 'Barcelona',
        position: { type: "Point", coordinates: [41.392722, 2.163009]}
      },
      {
        name: 'Pachá Ibiza',
        location: 'Ibiza',
        position: { type: "Point", coordinates: [38.918459, 1.443550]}
      },
      {
        name: 'Ushuaia',
        location: 'Ibiza',
        position: { type: "Point", coordinates: [38.885452, 1.405381]}
      },
      {
        name: 'Amnesia',
        location: 'Ibiza',
        position: { type: "Point", coordinates: [38.947718, 1.407489]}
      },
      {
        name: 'Space Beach Club',
        location: 'Ibiza',
        position: { type: "Point", coordinates: [38.944419, 1.411529]}
      },
    ];

    let clubObj = clubs.map( p => new Club(p));

    clubObj.forEach( p => p.save( (err, obj) =>{
      if(err){
        console.log(err);
      }else{
        console.log(`New club created [${obj.name}] with ID:${obj._id}`);
      }
    }));

    //mongoose.connection.close();
  });
