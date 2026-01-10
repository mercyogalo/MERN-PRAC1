const express=require("express");
const mongoose=require("mongoose");

const taskSchema=new mongoose.Schema({
    name:{type:String, default:"Task heading"},
    description:{type:String, default:"Task description"},
    urgency:{type:Boolean, default:false}
}, {timestamps:true});

module.exports=mongoose.model("Task",taskSchema);