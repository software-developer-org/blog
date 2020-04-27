function validate(){

   //get url for redirekt 
   var rurl = window.location.href;

   // send data to git api https://github.com/login/oauth/authorize
   var resturl = "https://github.com/login/oauth/authorize?client_id=3cde25dedb0296247158&redirect_uri=https://software-developer-org.github.io/blog/titlepost/titlepost.html";
   window.location = resturl; 

    }

document.onload = validate();