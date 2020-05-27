/*
function blogTitles() {
    const url ='https://api.github.com/repos/software-developer-org/blog/contents/blogs'
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const html = data.map(user => {
          return `<p>${user.name}</p>`;
        }).join('');
        console.log(html);
        document.querySelector("#blog01").insertAdjacentHTML("afterbegin", html);
      })    
  };
  
   blogTitles();
   */
/*
import github from '/octonode';

var client = github.client({
    username: 'RagipGashi',
    password: 'password'
});

client.get('/user', {}, function(err, status, body, headers) {
    console.log(body); // json object
});*/