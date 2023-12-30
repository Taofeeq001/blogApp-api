const blog = require("../Model/Postblog");

const updateblog = async (req, res) => {
    try {
       const {id} = req.params 
       const updateBlog = req.body;
       const updatedBlog = await blog.findByIdAndUpdate(id,req.body,
        {new:true, runValidators:true})  //this is a key word that must be added to anything you wanted to update
        if(!updatedBlog){
            return res.json({error:'no blog with Id found'})
        }
        return res.json({msg:"blog updated successfully", updatedBlog})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"server error"})
    }
}

module.exports = updateblog;