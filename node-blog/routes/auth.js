const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


//Register
router.post("/register", async(req, res) => {
    try {
        //  const salt = await bcrypt.genSalt(10);
        //  const hashedPass = await bcrypt.hash(req.body.password, salt);
        //  const { username, email, password } = req.body;
        //console.log(req.body);
        const salt = await bcrypt.genSalt(10);
        const haspass = await bcrypt.hash(req.body.password, salt);
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: haspass,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Login...

router.post("/login", async(req, res) => {
    try {
        const { email, password } = req.body;
        const login_pass = password;
        const reg_email = await User.findOne({ email: email });
        if (reg_email) {
            //  console.log(reg_email.password);
            const reg_pass = await bcrypt.compare(login_pass, reg_email.password);
            if (reg_pass) {
                console.log("Login Sucessful !.");
                res.status(200).json(reg_email);
            } else {
                console.log("Wrong Credential..");
                res.status(500).json("Failed credentail..");
            }
        } else {
            console.log("Wrong Credentials....");
            res.status(500).json("Failed credentails..");
        }



    } catch (error) {
        res.status(500).json(error);
    }

})



module.exports = router;