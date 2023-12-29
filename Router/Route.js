const express = require("express");
const {signup, login} = require("../Controller/Auth");
const auth = require("../Verificationtoken");
const createBlog = require("../Controller/Blog");
// const Allblog = require("../Controller/Allblog")
const allblog = require("../Controller/Allblog");
const singleBlog = require("../Controller/Singleblog");
const deleteBlog = require("../Controller/Delblog");
const updateblog = require("../Controller/Allblog");

const router = express.Router();

router.route("/signup").post(signup)
router.route("/login").post(login)
router.route("/createblog").post(auth, createBlog)
router.route("/allblog").get(allblog)
router.route("/blog/:id").get(singleBlog)
router.route("/blog/update/:id").put(updateblog)
router.route("/delblog/:id").delete(deleteBlog)



module.exports = router