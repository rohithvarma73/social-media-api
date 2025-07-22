// src/routes/postRoutes.js

const express = require("express");
const router = express.Router();

const {
  createPost,
  likePost,
  getLikesCount,
  unlikePost,
  getTopPosts,
  getUserLikedPosts,
} = require("../controllers/postController");

// Create a new post
router.post("/", createPost);

// Like a post
router.post("/:post_str_id/like", likePost);

// Get the total number of likes on a post
router.get("/:post_str_id/likes", getLikesCount);

// Unlike a post
router.delete("/:post_str_id/like", unlikePost);

// Get top posts sorted by likes
router.get("/top", getTopPosts);

// Get all posts liked by a user
router.get("/users/:user_id_str/liked-posts", getUserLikedPosts);

module.exports = router;
