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

const deleteBookController= async (req,res)=>{
    let id=req.params.id;
    bookModel.findByIdAndDelete(id,async (err)=>{
        // if(err){
        //     res.status(500).send("an error occured");
        // }
        let bookList= bookModel.find({});
        res.json(await bookList);
    })
}

const updateBookController = async (req,res)=>{
    let bookid=req.params.id;
    let updatedBook = req.body;
    await bookModel.findOne({_id:bookid}).then(async book=>{
        book.title = updatedBook.title;
        book.description = updatedBook.description;
        book.status = updatedBook.status;
        book.email = updatedBook.email;
        await book.save()
    })
    // .catch(err=>{
    //     res.send('error');
    // });
    res.status(200).send(await bookModel.find({}));
}

module.exports={
    bookController,
    createBookController,
    deleteBookController,
    updateBookController
}
