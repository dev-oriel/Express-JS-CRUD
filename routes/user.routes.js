import express from "express";
const router = express.Router();
import User from "../models/user.model.js";

// router.get("/", (req, res) => {
//   console.log("users list");
//   res.send("users list");
// });

//CRUD CREATE, READ, UPDATE, DELETE - post,get,put/patch,delete

// get all user
router.get("/", async (req, res) => {
  const users = await User.find();
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(500).json({ message: "an error occured" });
  }
});

// Create a new user
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
    console.log(`${req.body.name} user created successfully`);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
});

//Clean code
router
  .route("/:id")
  .get(async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: `User with ID ${id} not found` });
    }
  })
  .put(async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, updatedData);
    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(updatedUser);
    }
  })
  .delete(async (req, res) => {
    const id = req.params.id;
    const deleteUser = await User.findByIdAndDelete(id);
    if (!deleteUser) {
      res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(`user with ID ${id} Deleted successfully`);
  });

// // get one user
// router.get(`/:id`, (req, res) => {
//   const id = req.params.id;
//   res.send(`Fetch user with ID ${id}`);
// });

// // Update an existing user
// router.put("/:id",(req, res) => {
//   res.send("Update an existing user");
// } );

// // Delete a user
// router.delete("/:id", (req, res) => {
//   res.send("Delete a user");
// });

export default router;
