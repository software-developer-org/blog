// Adding dummy datas to the nav bar
import BlogData from './backend/contract.js' 
const blogData = new BlogData();

 import { getBlogs } from './backend/contract.js';
    
    getBlogs();

    // Create an ordered list (ol) element
    var ol = document.createElement('ol');

    // Get the navElement with the ID we created in html file, blog.html
    const navElement = document.getElementById('navBlogTitles');
    
    //Append it to the navbar
    getBlogs().forEach(blog => {
        // create a-tag for blog link
        const blogLink = document.createElement('a');
        // fill attributes
        blogLink.setAttribute('id', blog.id);
        // onclick
        blogLink.onclick = (event) => {
            showContent(blog.id);
        };

        // create h4 element for title as child of blog link
        const h4Element = document.createElement('h4');
        blogLink.appendChild(h4Element);
        // create text content for title text
        const titleContent = document.createTextNode(blog.title);
        h4Element.appendChild(titleContent);

        navElement.appendChild(blogLink);
    });

function showContent(id) {
    console.log('>>>>TODO show content', id);
}


/*
// Blog button functions on click
function blogFunction() {
    let blog = document.getElementById("summary");
    blog.style.opacity = 0;

    let blog1 = document.getElementById("fullpage");
    blog1.style.opacity = 100;
}


// About button functions on click
function aboutFunction() {
    let about = document.getElementById("about");
    about.style.opacity = 0;

    let teamM = document.getElementById("team");
    teamM.style.opacity = 100;
}
*/