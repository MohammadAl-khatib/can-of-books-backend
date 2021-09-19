"use strict";

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  email: String,
});

const bookModel = mongoose.model("book", bookSchema);

let seedBook = () => {
  let newBook = new bookModel({
  });
  newBook.save();
};

module.exports = {seedBook,bookSchema};
