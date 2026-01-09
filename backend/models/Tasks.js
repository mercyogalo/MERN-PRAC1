const express=require("express");
const mongoose=require("mongoose");

const taskSchema=new mongoose.Schema({
    name:{type:string, default:"Mercy"},
    description:{type:string, default:"Work tasks"},
    urgency:{type:Boolean, default:true}
}, {timestamps});

module.exports=mongoose("Task",taskSchema);