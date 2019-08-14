const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://mongo-server:27017/node-notes-db', {
  useCreateIndex: true,
  useNewUrlParser: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));




//module.exports = {
 // database: 'mongodb://localhost/notes-node',
  //secret: 'secret'
//}