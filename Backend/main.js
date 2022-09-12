const { request, response } = require("express");
const api=require("./api"); //import the ROUTER object from the api.js file
//api={router}
const express=require("express"); //import EXPRESS package

let app=express();
app.use(express.json()); //Use JSON parser to extract data in JSON format

app.use(api.router);

app.listen(3000,(error)=> {
    if(error){
        console.log(error);
        process.exit(0);
    } else{
        console.log("Server started on port: 3000");
    }
});
