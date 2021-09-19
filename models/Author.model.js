"use strict";
const mongoose=require("mongoose");
const {bookSchema}=require("./Book.model");

const authorSchema=new mongoose.Schema({
    name:String,
    books:[bookSchema]
});

const AuthorModel=mongoose.model('author',authorSchema);

let seedAuthor=()=>{
    let booksList=[
        {
            title:"An Unquiet Mind",
            description:"A doctor describes how she got into madness and how she recovered, starting from the early symptoms during her childhod all the way through her extra energy and being paranormally active, till the worst pains and finally recovering",
            status: 'available',
            email:'alk0489@gmail.com'
        },
        {
            
            title:"Thinking, Fast and Slow",
            description:"The book describes the way in which the brain treats new habits and thoughts, and how they turn from being in slow thinking mode to fast thinking mode",
            status: 'available',
            email:'alk0489@gmail.com'
        },
        {
           
            title:"A life in Management",
            description:"A former Saudi minister describes his life in managing several formal establishments and ministries, he mentions the difficulties and all the ups and downs he went through",
            status: 'available',
            email:'alk0489@gmail.com'
        }
    ]

    let newAuthor=new AuthorModel({
        name:"Robert Greene",
        books:booksList
    })
    newAuthor.save()
}

module.exports={
    seedAuthor,
    AuthorModel
}