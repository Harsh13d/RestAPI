const express = require("express");
const app = express();

const PORT = process.env.port || 3000;

const product_routes = require("./routes/products");

app.get("/" , (req,res)=>{
res.send("hi am live");
});

app.use("/api/products" , product_routes);

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
