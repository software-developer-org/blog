//handler function
function submitButton(){

// - get current date 
var today = new Date;
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = `${yyyy}-${mm}-${dd}-`;

// - access the input 
var input = document.getElementById("title").value;
//format input to the  right filename
var mydata = today + input.toLowerCase().replace(/ /gi,"-").concat(".md");

// - fetch code for put call
var code = new URLSearchParams(window.location.search);



window.alert(code);

/*----TO DO----

- insert input in a PUT call to API
- https://api.github.com
*/
 
}

//initialize listener with the handler function
document.getElementById("submit").onclick = submitButton;
