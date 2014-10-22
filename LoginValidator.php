<?php
/*Planned execution flow... 
 * Get params that were passed, then use databaseConnection, 
 * then take returned array and plug it into the compareLoginInfo
 * 
 * links used so far: 	http://codewithchris.com/iphone-app-connect-to-mysql-database/
 * 						http://php.net/manual/en/mysqli-stmt.fetch.php
 * 						http://php.net/manual/en/mysqli-stmt.bind-result.php
 * 						http://www.coderslexicon.com/the-basics-of-passing-values-from-javascript-to-php-and-back/
 * 						http://www.sourcecodetuts.com/php/21/how-create-secure-login-page-phpmysql-part-i <-check that for specifics on login pages*/


//Runs the functions

compareLoginInfo();

/* Gets the variables passed into the url by the web app and rips them out.
*/
function getPassedUserPwd () {
//initialize

//Pull the username and password out
$UserPWD[0] = $_GET["U"];
$UserPWD[1] = $_GET["P"];

return $UserPWD;

}

/* Opens a database connection to the textbook exchange DB then gets results 
 * based on what the user submitted for their username and password */
function databaseConnection ($username, $password) {
	
$mysqli = new mysqli("localhost", "root", "", "TextbookExchangeDB");

/* check connection */
if ($mysqli->connect_errno) {
    die("Connect failed: %s\n". $mysqli->connect_error);
}
$query = "

SELECT Username, Password 
FROM Users 
WHERE Username = '$username' AND Password = '$password';

";

$result = $mysqli->query($query);

$rows = array();

/* numeric array */
while ($row = $result->fetch_array()){
$rows = $row;
}


/* free result set */
$result->free();

/* close connection */
$mysqli->close();



return $rows;

} 
/*This is a function that runs the validation for the database. It will print out a json if it passes*/

function compareLoginInfo () {

//Gets params then gets db stuff
	$passedVars = getPassedUserPwd();
	$dbOutput = databaseConnection($passedVars[0], $passedVars[1]);
	
	if ($dbOutput == NULL) {
	
	$error = "Incorrect login information was provided";
	
	echo json_encode($error);
	
	}
	
	else {
	
	header('Location: loginSuccess.html');
	
	$output = "Login Success! User=".$dbOutput[0];
	
	echo $output;

	}
	
	
}
?>