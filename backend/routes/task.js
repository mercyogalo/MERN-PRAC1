const express=require("express");
const router=express.Router();
const Task=require("../models/Tasks");


//create post
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

//get post
router.get('/getTask', async (req,res)=>{
    try{
        const tasks=await Task.find();
        res.status(200).json(tasks);
    }
    catch(error){
        res.status(500).json({message:"Server error"});
    }
})


//update post
router.put('/updateTask/:id',async(req,res)=>{
    try {
        const todo=await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        //options to show the updated data not the od data
        {new:true,runValidators:true}
    )
    } catch (error) {
        res.status(500).json({message:"Server error"});
        console.log("The error is:",error);
    }
    
})


//delete post
router.delete('/deleteTask/:id',async(req,res)=>{
    try {
        const todo=await Task.findByIdAndDelete(req.params.id);
        if(!todo)return res.status(404).json({error:"Task not found"})
            res.status(200).json({message:"Task deleted successfully"});
    } catch (error) {
        res.status(500).json({message:"Server error"});
    }
    
})


//sort by urgency
router.get('/taskUrgency',async(req,res)=>{
    try {
        //-1 means from true to false same as descending to ascending
        const tasks=await Task.find().sort({urgency:-1,createdAt:-1});
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({message:"Server error"});
    }
    
})










module.exports=router;