const router = require("express").Router();
const Posts = require("../models/Posts");
//const bcrypt = require("bcrypt");

//Creating posts......
router.post("/", async(req, res) => {
    try {
        const createPosts = await new Posts(req.body);
        const savePosts = await createPosts.save();
        res.status(200).json(savePosts);
    } catch (error) {
        res.status(500).json(error);
    }
});

//Updating posts....
router.put("/:id", async(req, res) => {
    // console.log(req.body.user_id);
    // console.log(req.params.id);
    if (req.body.post_id === req.params.id) {
        try {
            const updatedPosts = await Posts.findByIdAndUpdate(
                req.params.id, {
                    $set: req.body,
                }, { new: true }
            );
            res.status(200).json(updatedPosts);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(401).json("Not Authenticated !.");
    }
});

//Deleting....
router.delete("/:id", async(req, res) => {
    const post = await Posts.findById(req.params.id);

    try {
        const deletePost = await Posts.findByIdAndDelete(req.params.id);
        res.status(200).json(`deleted post ${deletePost.title}`);
    } catch (error) {
        res.status(500).json(error);
    }
});

//Getting single post By Id...

router.get("/:id", async(req, res) => {
    try {
        const user = await Posts.findById(req.params.id);
        // const { password, ...others } = user._doc;
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

//Getting all posts By conditions...

router.get("/", async(req, res) => {
    const username = req.query.user;
    //   console.log(username);
    const catName = req.query.cat;
    //   console.log(catName);
    try {
        let posts;
        if (username) {
            posts = await Posts.find({ username: username });
            res.status(200).json(posts);
        } else if (catName) {
            posts = await Posts.find({
                categories: {
                    $in: [catName],
                },
            });
            res.status(200).json(posts);
        } else {
            posts = await Posts.find();
            // const { password, ...others } = user._doc;
            res.status(200).json(posts);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;