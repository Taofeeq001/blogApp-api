const blog = require("../Model/Postblog")

const deleteBlog = async (req, res)=>{
    const id = req.params.id
    try {
        const single = await blog.findByIdAndDelete(id)
        if(!single){
            return res.status(401).json({message:'blog not found'})
        }
        return res.status(201).json({message:"blog deleted successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Server error"})
    }
}
module.exports = deleteBlog;