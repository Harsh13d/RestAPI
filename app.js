const express = require("express");
const app = express();

const PORT = process.env.port || 3000;

app.get("/" , (req,res)=>{
res.send("hi am live");
});

const start = async () =>{
    try{
     app.listen(PORT, ()=>{
        console.log(`${PORT} yes i am connected`);
     });
    } catch(error){
       console.log(error);
    }
}

start();
