//handler function
function submitButton(){

//access the input 
var input = document.getElementById("title").value;
//format input to the  right filename
var mydata = input.toLowerCase().replace(/ /gi,"-").concat(".md");

window.alert(mydata);

/*----TO DO----

- fetch code and state for put call
- get current date and add it to input
- insert input in a PUT call to API
- https://api.github.com
*/
 
}

//initialize listener with the handler function
document.getElementById("submit").onclick = submitButton;
