const express=require("express");
const router=express.Router();
const Task=require("../models/Tasks");



router.post('/createTask' async (req,res)=>{
    const task= {name,description,urgency};
    const Task=
        await Task.save();
})


router.get('/createTask' async (req,res)=>{
    const task= {name,description,urgency};
    const Task=
        await Task.save();
})



router.put('/createTask' async (req,res)=>{
    const task= {name,description,urgency};
    const Task=
        await Task.save();
})

router.delete('/createTask' async (req,res)=>{
    const task= {name,description,urgency};
    const Task=
        await Task.save();
})



module.exports=router;