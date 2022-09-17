const express=require("express");

const {mysqlConnection} = require("./database");

let router=express.Router();
router.get("/user/all", (request, response) => {
    mysqlConnection.query("SELECT * from users", (errors, results) => {
        if (errors) {
            console.log(errors);
            response.status(500).send("Some error occurred at the backend.");
        }
        else {
            response.status(200).send(results);
        }
    });
});

router.delete("/user/by-id", (request,response) => {
    

    mysqlConnection.query(
        `DELETE from users where user_id = ${request.query.user_id}`,
        (errors, results) => {
            if (errors) {
                console.log(errors);
                response.status(500).send("Some error occurred at the backend.");
            }
            else {
                response.status(200).send("User deleted successfully!");
            }
        });

})

//router.get("/", (request, response)=> {                 //GET API
//  console.log("Hello! Request received!"); 
//  response.send("Hello! Thanks for connecting to this server!");
//   response.send({first_name: "Christian", last_name: "Chan"});

//}); 
// router.post("/"); // POST
// router.put(); //PUT
// router.delete(); // DELETE

//router.get("/sum", (request, response)=> {
//    let n1=parseFloat(request.query.number1); //Data from Postman server is treated as a string. Need to use parseFloat to change it to Number format
//    let n2=parseFloat(request.query.number2);
//    let sum=n1+n2;
//    response.send(`Sum: ${sum}`);
// OR    response.send("Sum: " + sum);
//});

// router.post("/multiply",(request, response)=> {
//    let n1=(request.body.number1); //Do not need to use parseFloat because JSON data in body is already formatted as a number, without " "
//    let n2=(request.body.number2);
//    let product = n1*n2;
//    response.send(`Product: ${product}`);
//});

module.exports ={router}; //Export ROUTER to main.js