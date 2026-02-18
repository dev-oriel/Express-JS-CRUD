import express from "express";
import Post from "../models/posts.model.js";
const router = express.Router();

// CRUD

// create a post
router.post("/", async (req, res) => {
  try {
    const post = req.body;
    const newPost = await Post.create(post);
    if (!newPost) {
      res.status(404).json({ message: "No post found" });
    }
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// fetch all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    if (!posts) {
      res.status(404).json({ message: "no post found" });
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

// fetch one post
// router.get("/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const post = await Post.findById(id);
//     if (!post) {
//       res.status(404).json(`No post with ID ${id} found`);
//     }
//     res.status(200).json(post);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// Update a posts
// router.put("/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const updatedPost = req.body;
//     const newPost = await Post.findByIdAndUpdate(id, updatedPost);
//     if (!newPost) {
//       res.status(404).json({ message: `No post with ID ${id} found` });
//     }
//     res.status(200).json(newPost);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// delete a post
// router.delete("/:id", async (req, res) => {
//   try {
//     const deletePost = await Post.findByIdAndDelete(req.params.id);
//     if (!deletePost) {
//       res.status(400).json(`Failed to delete post with ID ${req.params.id}`);
//     }
//     res.status(200).json(`post with ID ${req.params.id} deleted successfully!`);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const id = req.params.id;
      const post = await Post.findById(id);
      if (!post) {
        res.status(404).json(`No post with ID ${id} found`);
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  })
  .put(async (req, res) => {
    try {
      const id = req.params.id;
      const updatedPost = req.body;
      const newPost = await Post.findByIdAndUpdate(id, updatedPost);
      if (!newPost) {
        res.status(404).json({ message: `No post with ID ${id} found` });
      }
      res.status(200).json(newPost);
    } catch (error) {
      res.status(500).json(error);
    }
  })
  .delete(async (req, res) => {
    try {
      const deletePost = await Post.findByIdAndDelete(req.params.id);
      if (!deletePost) {
        res.status(400).json(`Failed to delete post with ID ${req.params.id}`);
      }
      res
        .status(200)
        .json(`post with ID ${req.params.id} deleted successfully!`);
    } catch (error) {
      res.status(500).json(error);
    }
  });

export default router;
