const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema(
    {
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

mongoose.model("Comment", CommentSchema)