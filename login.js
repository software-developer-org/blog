function validate(){

   //get url for redirekt 
   var rurl = window.location.href;

   // generate state string and concat with http adress


   // send data to git api https://github.com/login/oauth/authorize
   var resturl = "https://github.com/login/oauth/authorize?client_id=3cde25dedb0296247158&redirect_uri=";
   window.location = resturl.concat(rurl); 

    }