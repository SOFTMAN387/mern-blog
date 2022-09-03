const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const catRoute = require("./routes/categories");
const multer = require("multer");


dotenv.config();
app.use(express.json());
console.log();

app.use(bodyParser.urlencoded({ extended: false }));
const db = process.env.MONGODB_URL;
mongoose.connect(db, {

    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection sucessful!!..");
}).catch(error => {
    console.log("Not connected");
    console.log(error);
});

app.use(express.json());



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../react-blog/public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post("/node-blog/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});

// app.use("/",(req,res)=>{
//     console.log("It's main url..");

// })

app.use("/node-blog/auth", authRoute);
app.use("/node-blog/users", userRoute);
app.use("/node-blog/posts", postRoute);
app.use("/node-blog/categories", catRoute);










app.listen(port, () => {
    console.log(`Backend is running at port ${port}`);
});
