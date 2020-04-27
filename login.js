function validate(){

   //TO DOO:
   //random generate state string and concat with http adress

   //get url for redirekt 
   rurl = window.location.href;


   // send data to git api https://github.com/login/oauth/authorize
   window.location = resturl; 
   resturl = "https://github.com/login/oauth/authorize?client_id=3cde25dedb0296247158&redirect_uri=${rurl}"

    }