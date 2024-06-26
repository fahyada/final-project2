import express from "express";
import cors from "cors";

import "dotenv/config";
import "./src/config/db.js";


import UserRoute from "./src/routes/userRoute.js";

const app = express();

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// allow request from other origin (Frontend which is at different port)
app.use(cors());

//use routes
app.use("/users", UserRoute);

// This is for maintaining the server.
process.on("uncaughtException", (err) => {
    console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
    console.log(err.name, err.message);
    console.log(err.stack);
    process.exit(1);
  });
  
  process.on("unhandledRejection", (err) => {
    console.log("UNHANDLED REJECTION! 💥 Shutting down...");
    console.log(`${err}`);
    server.close(() => {
      process.exit(1);
    });
  });

const PORT = 3222;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});