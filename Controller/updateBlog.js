const blog = require("../Model/Postblog")

const updateblog = async (req, res)=>{
    const {id, title, summary, content}= req.body
    try {
        const update = await blog.findByIdAndUpdate({
            title,
            summary,
            content
        }, { new:true })
        
        if(!update || update.length===0){
            return res.status(401).json({message:"No blog available"})
        }
        return res.status(201).json({update}, {message:"blog updated successfully"})
    } catch (error) {
        console.log(error)   
        return res.status(500).json({message:"an error occured"})
    }
}
module.exports = updateblog;
