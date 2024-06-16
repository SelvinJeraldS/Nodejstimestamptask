import express from "express";
import fs from 'fs';
import {format} from 'date-fns';


const app =express();
const PORT =4000 ;

app.use(express.json())

app.get('/',(req,res)=>{
res.status(200).send(`<div className="container">TimeStamp Task</div>`)
})

app.get('/create',(req,res)=>{

    //? using Date-fns module
    // let timestamp=format(new Date(),'dd-mm-yyyy-HH-mm-ss')
   let currentDate=new Date();
    let timestamp = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}-${currentDate.getHours()}-${currentDate.getMinutes()}-${currentDate.getSeconds()}`;
  

    const filepath=`TimeStamp/${timestamp}.txt`
    fs.writeFileSync(filepath,`${timestamp}`,'utf8')
    let data=fs.readFileSync(filepath,'utf8')
    res.status(200).send(data)
})

app.listen(PORT,()=>{
    console.log(`App is listening on the port ${PORT}`);
})