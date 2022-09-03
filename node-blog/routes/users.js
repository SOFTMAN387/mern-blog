const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Updating....
router.put("/:id", async(req, res) => {
    // console.log(req.body.user_id);
    // console.log(req.params.id);
    if (req.body.user_id === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id, {
                    $set: req.body,
                }, { new: true }
            );
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(401).json("You can Update only your account!.");
    }
});

//Deleting....
router.delete("/:id", async(req, res) => {
    if (req.body.user_id === req.params.id) {
        try {
            const deleteUser = await User.findByIdAndDelete(req.params.id);
            res.status(200).json(`deleted user ${deleteUser.username}`);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(500).json("Not Authenticated..");
    }
});

//Getting single user By Id...

router.get("/:id", async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;