const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: String,
    summary: String,
    content: String,
    author: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    created_at: {
        type:Date,
        default: Date.now
    }
})
const blog = mongoose.model("Blog", blogSchema)
module.exports = blog