const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride= require ('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const procces = require ('process');
//const mongoose = require('mongoose');
//const config = require('./config/config');

//inicializacion

//mongoose.connect(config.db);
//var db = mongoose.connection;
//db.on('error', function () {
  //  throw new Error('unable to connect to database at ' + config.db);
  //});

//Check conn
//db.once('open', function(){
  //  console.log('Connected to MongoDB');
//});

//Check for DB errors
//db.on('error', function(err){
  //  console.log(err);
//});


const app = express();
require('./database');
require('./config/passport');



app.set('port', procces.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');



//funciones 

app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//variables glo

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});
  

//rutas

app.use(require('./routes'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

//arc estat
app.use(express.static(path.join(__dirname, 'public')));

//servidor
//app.listen(3000);
app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
});


//app.listen(config.port, function () {
  //  console.log('Express server listening on port ' + config.port);
  //});
  



