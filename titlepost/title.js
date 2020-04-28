//handler function 1
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

/*----TO DO----

- insert input in a PUT call to API
- https://api.github.com
*/

};

//handler function 2 
function tokengetter(){
// - fetch code for put call
var mycode = new URLSearchParams(window.location.search);

 let mybody = { client_id: "3cde25dedb0296247158",
            client_secret: "b75d345383bf898a6ddecd5bf108e3e3cdca0151",
            code: mycode };

// - get token for put call
var api = "https://github.com/login/oauth/access_token"
fetch(api,{method:  'Post', headers: 
{'Content-Type': 'application/json',}, body: JSON.stringify(mybody),})
.then((response) => response.json())
.then ((data) => {console.log('Success:',data);})
.catch((error) => {console.log('Error:', error)});

};


//initialize Button-Listener with the handler function
document.getElementById("submit").onclick = submitButton();

//initialize Onload-Listender
document.onload = tokengetter();