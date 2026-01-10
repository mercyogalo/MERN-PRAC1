const express=require("express");
const router=express.Router();
const Task=require("../models/Tasks");



router.post('/', async (req,res)=>{
    try {
        const {title, description,urgency}=req.body;

        const task=new Task({
            title,
            description,
            urgency
        });

        await task.save();

        res.status(201).json({message:"Task created successfully"});
    } catch (error) {
        res.status(500).json("Server error");
        console.log("The error is:",error);
    }
})


router.get('/getTask', async (req,res)=>{
    try{
        
    }
    catch(error){
        res.status(500).json({message:"Server error"});
    }
})







module.exports=router;