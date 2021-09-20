"use strict";
const {bookModel} = require('../models/Book.model')

let bookController= (req,res)=>{
    bookModel.find().then(data=>{
         res.json(data);
     })  
}


const createBookController=async (req,res)=>{
    console.log(req.body);
    let {title,description,status,email}=req.body;
    let newBook=new bookModel({title:title,description:description,staus:status,email:email})
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

module.exports={
    bookController,
    createBookController,
    deleteBookController
}