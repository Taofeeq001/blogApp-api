const express = require("express");
const {signup, login} = require("../Controller/Auth");
const auth = require("../Verificationtoken");
const createBlog = require("../Controller/Blog");
const allblog = require("../Controller/Allblog");
const singleBlog = require("../Controller/Singleblog");
const deleteBlog = require("../Controller/Delblog");
const updateblog = require("../Controller/updateBlog");
const createProfile = require("../Controller/Profile");
const contactForm = require("../Controller/contact");
const BlockedUser = require('../middleware/authenticate')

const router = express.Router();

router.route("/signup").post(signup)
router.route("/login").post(BlockedUser, login)
router.route("/createblog").post(auth, BlockedUser, createBlog)
router.route("/allblog").get(allblog)
router.route("/blog/:id").get(singleBlog)
router.route("/blog/update/:id").patch(updateblog)
router.route("/delblog/:id").delete(deleteBlog)
router.route("/profile").post(createProfile)
router.route("/contact-form").post(contactForm)

module.exports = router