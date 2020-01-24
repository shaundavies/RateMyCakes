
const mongoose = require("mongoose")
const CommentSchema = require(__dirname + "/comment");

const CakeSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true
        },
        Img: {
            type: String,
            required: true
        },
        comments: [CommentSchema]
    },
    { timestamps: true }
)
// create an object that contains methods for mongoose to interface with MongoDB

mongoose.model("Cake", CakeSchema)
