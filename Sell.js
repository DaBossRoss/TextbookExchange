/**
 * @author Colin Sheehan
 *
 * This is a class that reads the buy
 * search values
 */

/**
 *The initial function that loads on startup
 *  
 */
function init(){
	registerEventHandlers();	
}

/**
 *The event handlers for the web app 
 */
function registerEventHandlers(){
	var searchButtton;	
	
	searchButton = document.getElementById("createPost_Button");
    login_button.addEventListener("click", function() { 
    validateBuyInfo();}, true);	
}

/**
 *When passed a name of the DOM Element it returns its value
 *  
 * @param {Object} name - the name of the dom element
 */
function getInput(name){
	var output ="";
	output = document.getElementById(name).value;
	
	if (output == null){
		output ="";
	}
	return output;
}

/**
 *This is a function that adds to the global array when a new password and username is created
 */
function validateSellInfo(){
	var title = getInput("createPost_Title");
	var author = getInput("createPost_Author");
	var isbn = getInput("createPost_ISBN");
	var Class = getInput("createPost_Class");
	var major = getInput("createPost_Major");
	var price = getInput("createPost_Price");
	
	if (isbn != "" && price != ""){
		sendSellInfo();		
	}
	
	else {
		window.alert("Please make sure ISBN and Price are provided");
	}
}