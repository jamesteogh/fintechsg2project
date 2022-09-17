const { request, response } = require("express");
const api=require("./G10_api"); //import the ROUTER object from the G10_api.js file
//api={router}
const express=require("express"); //import EXPRESS package

let app=express();
app.use(express.json()); //Use JSON parser to extract data in JSON format

app.use(api.router);
//app.use(router1);  for e.g. trigger Auth0 
//app.use(router2);

app.listen(3000,(error)=> {
    if(error){
        console.log(error);
        process.exit(0);
    } else{
        console.log("Server started on port: 3000");
    }
});