const blog = require("../Model/Postblog");

const allblog = async (req, res)=>{
    try {
        const Allblog = await blog.find({})
        
        if(!Allblog || Allblog.length===0){
            return res.status(401).json({message:"No blog available"})
        }
        return res.status(201).json({Allblog})
    } catch (error) {
        console.log(error)   
        return res.status(500).json({message:"an error occured"})
    }
}
module.exports = allblog

const updateblog = async (req, res)=>{
    const {id, title, summary, content}= req.body
    try {
        const update = await blog.findByIdAndUpdate(id, {
            title,
            summary,
            content
        }, { new:true })
        
        if(!update){
            return res.status(401).json({message:"No blog available"})
        }
        return res.status(201).json({message:"blog updated successfully"})
    } catch (error) {
        console.log(error)   
        return res.status(500).json({message:"an error occured"})
    }
}
module.exports = updateblog;
