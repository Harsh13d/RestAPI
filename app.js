const express = require("express");
const app = express();

const PORT = process.env.port || 5000;

app.get("/" , (req,res)=>{
res.send();
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

