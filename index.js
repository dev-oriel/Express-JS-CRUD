import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// import userRoutes from "./routes/user.routes";
// import postRoutes from "./routes/post.routes.js";
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Database connected Successfully");
    app.listen(PORT, () => {
      console.log(`server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  console.log("server running");
  res.status(200).json({ message: "Success" });
});
// app.use("/users", userRoutes);
// app.use("/posts", postRoutes);

// app.listen(5000);
