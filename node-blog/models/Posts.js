const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    desc: {
        type: String,
        required: true,


    },
    photo: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        required: false,

    },
}, { timestamps: true });

const Posts = new mongoose.model("Post", postSchema);
module.exports = Posts;