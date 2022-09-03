const router = require("express").Router();
const Category = require("../models/Category");


//creating categories.....
router.post("/", async(req, res) => {

    try {
        const newCat = await new Category(req.body);
        const saveCat = await newCat.save();
        res.status(200).json(saveCat);

    } catch (error) {
        res.status(500).json(error);
    }
});


//getting categories.....
router.get("/", async(req, res) => {

    try {
        const getCat = await Category.find();

        res.status(200).json(getCat);

    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;