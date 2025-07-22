const pool = require("../config/db");

const createPost = async (req, res) => {
  const { content, user_id } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO posts (content, user_id) VALUES ($1, $2) RETURNING *",
      [content, user_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("❌ Database Error:", err.message);
    res.status(500).json({ error: "Database error", details: err.message });
  }
};

const likePost = async (req, res) => {
  const { user_id } = req.body;
  const { post_str_id } = req.params;
  try {
    await pool.query("INSERT INTO likes (post_id, user_id) VALUES ($1, $2)", [
      post_str_id,
      user_id,
    ]);
    res.status(200).json({ message: "Post liked" });
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
};

// Dummy implementations (you can replace with real ones)
const getLikesCount = async (req, res) => res.send("Likes count");
const unlikePost = async (req, res) => res.send("Unlike post");
const getTopPosts = async (req, res) => res.send("Top posts");
const getUserLikedPosts = async (req, res) => res.send("Liked posts by user");

module.exports = {
  createPost,
  likePost,
  getLikesCount,
  unlikePost,
  getTopPosts,
  getUserLikedPosts,
};
