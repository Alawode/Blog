var mongoose    = require('mongoose');
var Blog        = require('./models/blog');
var Comment     = require('./models/comment');

var data = [
    {
        name: 'Cora',
        image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af920b383b3a7b889beb1dd53998ecd3&auto=format&fit=crop&w=800&q=60',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. '
    },
    {
        name: 'Mandarin',
        image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=86c8c1fd5e9e5b384696472a095c42ac&auto=format&fit=crop&w=800&q=60',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. '
    },
    {
        name: 'Rubbish Vegan',
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a5e4cac8bcaf69ffaf5d3b1c2b063e4&auto=format&fit=crop&w=800&q=60',
        description: 'Completely crap!'
    }
    
    ];

function seedDb(){
  Blog.remove({}, function(err){
    // if(err){
    //     console.log(err);
    // }
    // console.log('removed blogs');
    
    // data.forEach(function(seed){
    //     Blog.create(seed, function(err, blog){
    //         if (err){
    //             console.log(err);
    //         }else{
    //             console.log('added a blog');
    //             // create a comment
    //             Comment.create({
    //                 text:'This place is amazing',
    //                 author: 'Emmanuel'
    //             }, function(err, comment){
    //                 if(err){
    //                     console.log(err);
    //                 }else{
    //                     blog.comments.push(comment);
    //                     blog.save();
    //                     console.log('created new comment');
                        
    //                 }
                    
    //             });
    //         }
    //     });
    // });
    });  
    
    
    
}

module.exports = seedDb;