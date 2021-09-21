'use srtict';

const express = require ('express');
const cors = require ('cors');
const mongoose = require ('mongoose');
require('dotenv').config();
const app = express();
app.use(cors());
const PORT = process.env.PORT;
const MONGO_PORT=process.env.MONGO_PORT;
app.use(express.json());
// const {seedBook}=require("./models/Book.model"); // used only one time to instantiate a document in the collection.
// const {seedAuthor}=require("./models/Author.model"); // used only one time to instantiate a document in the collection.
const {bookController,createBookController,deleteBookController,updateBookController}=require("./controllers/book.controller");
mongoose.connect(`${MONGO_PORT}/bookStore`,{useNewUrlParser: true, useUnifiedTopology: true});


app.get('/books',bookController);
app.post('/create-book',createBookController);
app.delete('/delete-book/:id',deleteBookController);
app.put('/update-book/:id',updateBookController);

app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`)
});

