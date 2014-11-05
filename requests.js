/**
 *@author Colin Sheehan
 * 
 * This class sends POST requests from the forms 
 */

/**
 * This function sends loginPost info to the sever 
 */
function sendLoginPost() {
var username = document.getElementById("username");
var password = document.getElementById("password");

var parameter = "username= "+username+" & password= "+password;
	
var xmlhttp;
if (window.XMLHttpRequest) {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else{
  // code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200){
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
   }
};
xmlhttp.open("POST","ajax_info.txt",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send(parameters);
}


/**
 * This function sends Buy search info to the sever 
 */
function sendBuyInfo() {
var title = document.getElementById("Title");
var author = document.getElementById("Author");
var isbn = document.getElementById("ISBN");
var course = document.getElementById("Course");

var parameters = "title= "+title+" & author= "+author+" & isbn= " +isbn+" & course= "+course;
	
var xmlhttp;
if (window.XMLHttpRequest) {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else{
  // code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200){
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
   }
};
xmlhttp.open("POST","ajax_info.txt",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send(parameters);
}

/**
 * This function sends create Post info to the sever 
 */
function sendSellInfo() {
var title = document.getElementById("createPost_Title").value;
var author = document.getElementById("createPost_Author").value;
var isbn = document.getElementById("createPost_ISBN").value;
var Class = document.getElementById("createPost_Class").value;
var major = document.getElementById("createPost_Major").value;
var price = document.getElementById("createPost_Price").value;

var parameter = "title= "+title+" & author= "+author+" & isbn= " +isbn+" & class= "+Class+" & major= "+major+" & price= "+price; 
	
var xmlhttp;
if (window.XMLHttpRequest) {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else{
  // code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200){
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
   }
};
xmlhttp.open("POST","ajax_info.txt",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send(parameters);
}