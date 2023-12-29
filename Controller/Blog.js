const blog = require("../Model/Postblog");
// const User = require("../Model/User");
const auth = require("../Verificationtoken");

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

            if (!title || !summary || !content) {
                throw new Error("Fields omitted are required");
            }

            const newBlog = new blog({
                title,
                summary,
                content,
                author: user._id
            });

            await newBlog.save();

            return res.status(201).json({ message: "Blog uploaded successfully" });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'An error occurred during the process' });
    }
};

// const createBlog = async (req, res) => {
//     const user = req.User
//     console.log(user)
//     const { title, summary, content } = req.body
//     const authorId = req.user._id

//     console.log(authorId)

//     if (!authorId) {
//         return res.status(401).json({ message: "Unauthorized" })
//     }

//     try {

//         const user = req.User
//         console.log(user)
//         const { title, summary, content } = req.body
//         const authorId = req.user._id

//         console.log(authorId)

//         if (!authorId) {
//             return res.status(401).json({ message: "Unauthorized" })
//         }



//         if (!title || !summary || !content) {
//             throw new Error("The field(s) ommitted are required")
//         }

//         const newBlog = new blog({
//             title,
//             summary,
//             content,
//             author: authorId
//         })
//         newBlog.save()
//         return res.status(201).json({ message: "blog uploaded successfully" })
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({ message: 'an Error occured during the process' })
//     }

// }

module.exports = createBlog
