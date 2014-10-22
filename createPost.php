<?php
//Verfied this works
databaseConnection();


//Creates the database connection and gets the post variables. Then executes some sql statements.
function databaseConnection () {
	
$mysqli = new mysqli("localhost", "root", "", "TextbookExchangeDB");

/* check connection */
if ($mysqli->connect_errno) {
    
    die("Connect failed: %s\n". $mysqli->connect_error);
}

$title = $_GET['title'];
$author = $_GET['author'];
$isbn = $_GET['isbn'];
$class = $_GET['class'];
$major = $_GET['major'];
$price = $_GET['price'];

//Query1
$queryTB = "

INSERT INTO textbooks (Title,Author,ISBN10,Price)
VALUES ('$title','$author','$isbn','$price');

";
//Query2
$queryC = "

INSERT INTO courses (FullName,Department)
VALUES ('$class','$major');

";
//Executes the query.
$result1 = $mysqli->query($queryTB);
$result2 = $mysqli->query($queryC);

echo "Data added";
}

?>