const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    img: String,
    idType: {
        type: String,
        enum: ["Drivers License", "International Passport", "National ID Number",]
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    createAt: {
        type: Date,
        default: Date.now
    }

})
const profile = mongoose.model("profile", profileSchema)

module.exports = profile