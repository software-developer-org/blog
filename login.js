function validate(){

   //get url for redirekt 
  const rurl= window.location.href;

   // generate state string and concat with http adress


   // send data to git api https://github.com/login/oauth/authorize
   
   const resturl = "https://github.com/login/oauth/authorize?client_id=3cde25dedb0296247158&redirect_uri=${rurl}";
   window.location = resturl; 

    }