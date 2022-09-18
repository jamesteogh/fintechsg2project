function getFromServer () {
            //USING FETCH instead of Jquery
    fetch("http://localhost:3000/expenses/all")
    // when we get a response map the body to json
    .then(response => response.json())
    // and pass the JSON data to mydata for rendering
    .then(data => renderhtml(data));
}

function renderhtml(data){
    //console.log(data);
    var text ="<table width class='table table-striped'><thead><td>Date</td> <td>Item</td> <td>Amount</td><td>Category</td><td>Notes</td></thead><tbody>";
    data.forEach(function(expenses){    
    text = text + `<tr><td> ${expenses.Date} </td> <td> ${expenses.Item} </td> <td> ${expenses.Amount} </td>  
                <td> ${expenses.category} </td><td> ${expenses.notes} </td> </tr>`
    
    });
    text += "</tbody></table>"
    document.getElementById("mypanel").innerHTML = text;   
}