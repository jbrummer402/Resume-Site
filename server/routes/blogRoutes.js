const express = require("express");

const router = express.Router();
const data = require("../data");
const blogData = data.blog;
const userData = data.users;
const xss = require("xss");

function checkInputs(data) {
  return false;
}

// Get every blog post
router.get("/", async (req, res) => {
  let blogList;
  try {
    blogList = await blogData.getAllPosts();
    console.log(blogList);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }

  res.json(blogList);
});

// Post a single blog post
router.post("/", async (req, res) => {
  let { id, title, content } = req.body;
  let blogPost;
  console.log("Posting blog post...");

  try {
    blogPost = await blogData.uploadBlogPost(
      new Date().toISOString(),
      id,
      title,
      content
    );
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
  return blogPost;
});

// Get a single blog post
router.get("/:blogTitle", async (req, res) => {
  let blogPostById;

  let { id, date, title } = req.body;

  try {
    blogPostById = await blogData.readByBlogId(id);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
  res.json(blogPostById);
});

// Delete a single blog post
router.delete("/:blogId", async (req, res) => {
  let blogId = xss(req.params.id);
  const userId = xss(req.session.AuthCookie.id);

  let user, blog;
  try {
    user = await userData.readByUserId(userId);
    blog = await blogData.readByBlogId(blogId);
  } catch (e) {
    console.error(e);
    res.status(500);
  }

  res.json({ result: "success" });
});

module.exports = router;
