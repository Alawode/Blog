var express = require("express");
var router = express.Router();
var passport    = require("passport");
var User        = require("../models/user");
//================
// Landing page
router.get('/', function(req, res){
  res.render('landing');
});


//Register
router.get("/register", function(req, res){
   res.render("register", {page: 'register'});
});

router.post('/register', function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash('error', err.message);
            res.redirect('back');
        }
        passport.authenticate('local')(req, res, function(){
            req.flash('success', "Welcome to Sophie's blog " + user.username );
            res.redirect('/blogs');
        });
    });
});

//======================
//Login

router.get("/login", function(req, res){
   res.render("login", {page: 'login'});
});

router.post('/login',passport.authenticate('local', {
    successRedirect: '/blogs',
    failureRedirect: '/login'

}), function(req, res){

});
//==================
//logout
router.get('/logout', function(req, res){
    req.logout();
    req.flash('success', 'Logged you out');
    res.redirect('/blogs');
});


module.exports = router;
