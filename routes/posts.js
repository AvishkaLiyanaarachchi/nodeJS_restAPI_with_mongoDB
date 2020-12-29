const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();
const Post = require('../models/Post');

//Fetch all the posts
router.get('/',async (req,res) => {
    try{
       const posts = await Post.find();
       res.json(posts);
        
    }catch(err){
        
        res.json({ message: err.message});
    }
    
});

router.get('/specific',(req,res)=>{
    res.send('specific');
});

//save the post
router.post('/' ,async (req,res) =>{
    
    const post = new Post({
       emailAddress: req.body.emailAddress,
       password: req.body.password
    });
    try{
        const savePost = await post.save();
        res.json(savePost);
    }catch(err){
       res.json({message: err.message});
    }
});

//Fetch specific post
router.get('/:postId',async (req,res) => {
    
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({ message: err.message });
    }
});

//Delete post
router.delete('/:postId', async (req,res) => {
    try{
        const removePost = await Post.remove({_id: req.params.postId});
        res.json(removePost);
    }catch(err){
        res.json({ message:err.message});
    }
});

//update a post
router.patch('/:postId', async (req,res) => {
    try{
        const updatePost = await Post.updateOne(
            {_id: req.params.postId},
            { $set: { emailAddress: req.body.emailAddress}}
        );
        res.json(updatePost);
    }catch(err){
        res.json({ message:err.message });
    }
})


module.exports = router;