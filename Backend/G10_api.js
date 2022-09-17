const express=require("express");

const {mysqlConnection} = require("./G10_database");

let router=express.Router();

router.post("/new_expense", (request, response) => {

    let d1 = (request.body.d_userid); 
    let d2 = (request.body.d_date); 
    let d3 = (request.body.d_item); 
    let d4 = (request.body.d_amount);
    let d5 = (request.body.d_category);  
    let d6 = (request.body.d_notes); 

    mysqlConnection.query (
        `INSERT into expenses (user_id, Date, Item, Amount, Category, Notes) values (${d1}, '${d2}', '${d3}', ${d4}, '${d5}', '${d6}')`,  // CREATE
        (errors, results) => {  
        if (errors) {
            console.log(errors);
            response.status(500).send("Could not add new entries in database.");
        }
        else {
            response.status(200).send("New entries posted successfully!");
        }
    });
});

router.get("/expenses/all", (request, response) => {
    mysqlConnection.query("SELECT * from expenses", (errors, results) => {  // READ
        if (errors) {
            console.log(errors);
            response.status(500).send("Some error occurred at the backend.");
        }
        else {
            response.status(200).send(results);
        }
    });
});

router.put("/expenses/by-transaction_id", (request,response) => { 
    mysqlConnection.query(
        `EDIT from expenses where transaction_id = ${request.query.transaction_id}`,  // UPDATE (*** Code needs to be amended *****)
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

router.delete("/expenses/by-transaction_id", (request,response) => {
    mysqlConnection.query(
        `DELETE from expenses where transaction_id = ${request.query.transaction_id}`,  // DELETE
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