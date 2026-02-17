const express = require("express");
const router = express.Router();

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
router.post("/new", (req, res) => {
  res.send("Creating new user");
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
module.exports = router;
