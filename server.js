import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"
import 'dotenv/config.js'



const app=express()

const PORT=400


app.use(express.json())


app.use(cors())

app.get("/",(req,res)=>{
    res.send("api working")
})

app.listen(PORT,async()=>{
    connectDB()
    console.log(`server is running ${PORT}`)
})