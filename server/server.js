import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello prashant");
});

app.listen(5002, () => {
  console.log("server running port on 5002");
});
