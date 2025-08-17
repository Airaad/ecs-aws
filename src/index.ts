import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) => res.send("Hello World"));

app.get("/cpu", (req, res) => {
  for (let i = 0; i < 100000000; i++) {
    Math.random();
  }
  res.send("Running CPU intensive task");
});

app.listen(3000, () => {
  console.log("Server started");
});
