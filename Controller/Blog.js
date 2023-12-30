const blog = require("../Model/Postblog");
// const User = require("../Model/User");
const auth = require("../Verificationtoken");
//import the upload file function here
const upload = require('../middleware/handleFile')

const createBlog = async (req, res) => {
    try {
        // Apply the auth middleware before your createBlog logic
        auth(req, res, async () => {
            const user = req.user;
            console.log("<<<<<<<<<<<<<<<first>>>>>>>>>>>>>>>")
            console.log(user);
            console.log("<<<<<<<<<<<<<two>>>>>>>>>>>>>")
            console.log(user.id);

            if (!user.id) {
                return res.status(401).json({ message: "Unauthorized" });
            }

            const { title, summary, content } = req.body;

            //variable for blog image 
            const blogImage = req.files.blogImage

            if (!title || !summary || !content) {
                throw new Error("Fields omitted are required");
            }
            if (!req.files || Object.keys(req.files).length===0){
                return res.status(400).json({
                    error:'no file uploaded'
                })
            }
            // import the path of the image upload here
            const uploadPath = __dirname + '/uploads/' + blogImage.name;
            //you add image to be uploaded here
            const newBlog = new blog({
                title,
                summary,
                content,
                author: user.id,
                blogImage: uploadPath
            });

            await newBlog.save();

            return res.status(201).json({ message: "Blog uploaded successfully" });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'An error occurred during the process' });
    }
};

module.exports = createBlog
