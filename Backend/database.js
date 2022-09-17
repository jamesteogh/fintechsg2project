const mysql = require("mysql");

parameters = {
  host: "34.87.190.25",
  port: 3306,
  user: "root",
  password: "fintechsg",
  database: "b18_christian",
};

mysqlConnection = mysql.createConnection(parameters);
mysqlConnection.connect((errors) => {
  if (errors) console.log("Error occurred while connecting to MySQL server");
  else console.log("Connected to MySQL successfully!");
});

mysqlConnection.query ("SELECT * from users", (errors, results) => {
    if (errors) console.log(errors);
    else console.log(results);
});

module.exports ={ mysqlConnection};  //all files can access, for e.g. api.js