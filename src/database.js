const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
// mongoose.connect('mongodb://mongo-server:27017/node-notes-db', {
mongoose.connect('mongodb+srv://proyecto1tel:1115559994@cluster0.fabtq.mongodb.net/dbdefault?retryWrites=true&w=majority', {
  useCreateIndex: true,
  useNewUrlParser: true,
})
  .then((db) => console.log('DB is connected'))
  .catch((err) => console.error(err));

// module.exports = {
// database: 'mongodb://localhost/notes-node',
// secret: 'secret'
// }
