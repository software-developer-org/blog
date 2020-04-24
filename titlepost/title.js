//handler function
function submitButton(){

//access the input 
var input = document.getElementById("title").value;
//format input to the  right filename
var mydata = input.toLowerCase().replace(/ /gi,"-").concat(".md");

window.alert(mydata);

// get current date and add it to input




/*----TO DO----
- insert input in a PUT call to API
- https://api.github.com
- access-token: bfb44bbaa1a9247cb5bdc3e66cd2a4c5af8695a6 
- token vielleicht nicht genug berechtigung muss getestet werden
*/
 
}

//initialize listener with the handler function
document.getElementById("submit").onclick = submitButton;
