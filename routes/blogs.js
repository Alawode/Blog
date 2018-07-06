var express = require("express");
var router = express.Router();
var Blog = require('../models/blog');
var middleware = require('../middleware');

//====================
// Index route
router.get("/", function(req, res){
    // Get all blogs from DB
    Blog.find({}, function(err, allblogs){
       if(err){
           console.log(err);
       } else {
          res.render("blogs/index",{blogs: allblogs, page: 'blogs'});
       }
    });
});
//=============================
// New Blogs
router.post('/',middleware.isLoggedIn, function(req, res){
    var name= req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author ={
        id: req.user._id,
        username: req.user.username
    };
    var newBlog = {name:name, image:image, description:desc, author:author};

    Blog.create(newBlog, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else{
            console.log (newlyCreated);
            res.redirect('/blogs');
        }
    });

});
//================================
// New blog form page
router.get('/new', middleware.isLoggedIn, function(req, res) {
    res.render('blogs/new');
});
//================================
// Show a specific blog post
router.get('/:id', function(req, res){
    Blog.findById(req.params.id).populate('comments').exec(function(err, foundBlog){
        if(err){
            console.log(err);
        }else{
            console.log(foundBlog);
            res.render('blogs/show', {blog:foundBlog});
        }
    });
});

//=============================
//Edit blog
router.get('/:id/edit',middleware.checkBlogOwnership, function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog ){
        res.render('blogs/edit', {blog: foundBlog});

    });
});

//=============================
//update

router.put('/:id', middleware.checkBlogOwnership,function(req, res){
    //find and update the blog
    Blog.findByIdAndUpdate(req.params.id,req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect('/blogs');
        }else{
            res.redirect("/blogs/" + req.params.id);
        }
    });
});
//=============================
// destroy blog route
router.delete('/:id', middleware.checkBlogOwnership, function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err){
       if (err){
           res.redirect('/blogs');
       } else{
          res.redirect('/blogs');
       }
    });
});


module.exports = router;
