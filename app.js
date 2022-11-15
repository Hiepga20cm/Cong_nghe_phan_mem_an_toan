require("dotenv").config();
const { application } = require("express");
const express = require("express");
const app = express();
const { PORT } = process.env;

app.get("/status", (req, res) => {
  res.status(200).json({
    status: "success",
    massage: "ok",
  });
});

app.post("/login", (req, res) => {
  try {
    res.send("login success");
  } catch (error) {
    res.json({
      error: error.stack,
    });
  }
});
app.listen(PORT, () => {
  console.log(`is Okey at ${PORT}`);
});
