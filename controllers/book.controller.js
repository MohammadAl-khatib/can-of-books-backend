"use strict";
const {bookModel} = require('../models/Book.model')

let bookController= (req,res)=>{
    bookModel.find().then(data=>{
         res.json(data);
     })  
}


const createBookController=async (req,res)=>{
    let {title,description,status,email}=req.body;
    let newBook=new bookModel({title:title,description:description,status:status,email:email})
    newBook.save()
    let bookList=await bookModel.find({});
    res.status(201).json(bookList);
}

const deleteBookController=  (req,res)=>{
    let id=req.params.id;
    bookModel.findByIdAndDelete(id,async (err,data)=>{
        if(err){
            res.status(500).send("an error occured");
        }
        let bookList= await bookModel.find({});
        res.json(bookList);
    })
}

const updateBookController = async (req,res)=>{
    let bookid=req.params.id;
    let updatedBook = req.body;
    bookModel.findOne({_id:bookid}).then(book=>{
        book.title = updatedBook.title;
        book.description = updatedBook.description;
        book.status = updatedBook.status;
        book.email = updatedBook.email;
        book.save()
    }).catch(err=>{
        res.send('error');
    });
    let bookList = await bookModel.find({});
    await console.log(bookList);
    res.status(200).send(bookList);
}

module.exports={
    bookController,
    createBookController,
    deleteBookController,
    updateBookController
}
