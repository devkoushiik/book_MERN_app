const express = require("express");
const { PORT, MONGO_URI } = require("./config");
const mongoose = require("mongoose");
const Book = require("./model/bookModel");

const app = express();

// Middleware for parsing body request
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(234).send("MERN STACK");
});

// Route for save books
app.post("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send All Require Field: Title, Author, PublishYear",
      });
    }

    const newBook = {
      tittle: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
// Getting data
app.get("/books", async (req, res) => {
  try {
    const allBook = await Book.find({});
    res.status(200).json({
      count: allBook.length,
      data: allBook,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
// Getting data by id
app.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleBook = await Book.findById(id);

    res.status(200).json({
      count: singleBook.length,
      data: singleBook,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

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
