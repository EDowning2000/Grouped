const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/eventTracker"
);

const eventSeed = [{

}
]

db.Event
.remove({})
.then(()=> db.Event.collection.insertMany(eventSeed))
.then(data =>{
  console.log(data.results.n + " records inserted!");
  process.exit(0);
})
.catch(err =>{
  console.error(err);
  process.exit(1)
});