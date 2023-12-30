const blog = require("../Model/Postblog");

const allblog = async (req, res) => {
    try {
        const Allblog = await blog.find({})

        if (!Allblog || Allblog.length === 0) {
            return res.status(401).json({ message: "No blog available" })
        }
        return res.status(201).json({ Allblog })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "an error occured" })
    }
}
module.exports = allblog
