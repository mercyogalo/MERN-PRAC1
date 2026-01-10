const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const dotenv=require("dotenv");
dotenv.config();
const taskRoutes=require("./routes/task.js")



const app=express();
app.use(cors());
app.use(express.json());
app.use('/api/task',taskRoutes);


const PORT=process.env.PORT || 5000;

mongoose
.connect(process.env.MONGO_URI,{})
.then(()=>console.log("Mongodb running"))
.catch((err)=>console.log("Mongodb error is:",err))


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})



