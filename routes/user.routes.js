import express from "express";
const router = express.Router();
import User from "../models/user.model.js";

// router.get("/", (req, res) => {
//   console.log("users list");
//   res.send("users list");
// });

//CRUD CREATE, READ, UPDATE, DELETE - post,get,put/patch,delete

// get all user
router.get("/", (req, res) => {
  res.send("Fetch all user");
});
// Create a new user
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
    console.log(`${User.name} user created successfully`);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
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

//Clean code
router
  .route("/:id")
  .get((req, res) => {
    const id = req.params.id;
    res.send(`Fetch user with ID ${id}`);
  })
  .put((req, res) => {
    res.send("Update an existing user");
  })
  .delete((req, res) => {
    res.send("Delete a user");
  });

export default router;
