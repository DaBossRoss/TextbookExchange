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
 }
xmlhttp.open("POST","ajax_info.txt",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("username&password");
}


/**
 * This function sends Buy search info to the sever 
 */
function sendBuyInfo() {
var title = document.getElementById("Title");
var author = document.getElementById("Author");
var isbn = document.getElementById("ISBN");
var course = document.getElementById("Course");
	
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
 }
xmlhttp.open("POST","ajax_info.txt",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("title&author&isbn&course");
}


/**
 * This function sends create Post info to the sever 
 */
function sendSellInfo() {
var title = document.getElementById("createPost_Title");
var author = document.getElementById("createPost_Author");
var isbn = document.getElementById("createPost_ISBN");
var Class = document.getElementById("createPost_Class");
var major = document.getElementById("createPost_Major");
var price = document.getElementById("createPost_Price");
	
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
 }
xmlhttp.open("POST","ajax_info.txt",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("title&author&isbn&Class&major&price");
}