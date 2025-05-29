import express from "express";
// import cors from "cors";
require("dotenv").config();


// import "./models/association";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Expose-Headers", "Content-Disposition");

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Credentials", "true");
    return res.status(200).json({});
  }
  next();
});

app.use(express.json());

app.use("/dev/api", require("./routes/index"));


app.listen(3002, () => console.log("Server is running on port 3002"));

