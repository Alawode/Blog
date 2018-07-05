require('./config/config');

const express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    Blog        = require('./models/blog'),
    seedDb      = require('./seeds.js'),
    Comment     = require('./models/comment'),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    FacebookStrategy = require("passport-facebook").Strategy,
    methodOverride = require("method-override"),
    flash       = require('connect-flash'),
    User        = require("./models/user");


var commentRoutes = require("./routes/comments"),
    blogRoutes    = require('./routes/blogs'),
    indexRoutes    = require('./routes/index');

mongoose.connect('mongodb://localhost/sophie_blog');

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.use(flash());
//seedDb();

//PASSPORT CONFUGURATION
app.use(require("express-session")({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false

}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash('error');
   res.locals.success = req.flash('success');
   next();
});

app.use(indexRoutes);
app.use('/blogs/:id/comments',commentRoutes);
app.use('/blogs',blogRoutes);




app.listen(process.env.PORT, process.env.IP, function(req,res){
    console.log("Blog server is running...");
});
