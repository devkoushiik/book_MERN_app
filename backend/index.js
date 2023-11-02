const express = require("express");
const { PORT, MONGO_URI } = require("./config");
const mongoose = require("mongoose");
const router = require("./routes/booksRoute");

const app = express();

// Middleware for parsing body request
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(234).send("MERN STACK");
});

//
app.use("/books", router);

// connection
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port : ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
