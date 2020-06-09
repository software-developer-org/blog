// Adding dummy datas to the Blog's navbar
function blogTitles() {

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
            showBlogContent(blog.id);
        };

        // create h4 element for title as child of blog link
        const h4Element = document.createElement('h4');
        blogLink.appendChild(h4Element);
        // create text content for title text
        const titleContent = document.createTextNode(blog.title);
        h4Element.appendChild(titleContent);

        navElement.appendChild(blogLink);
    });
}

function showBlogContent(id) {
    console.log('>>>>TODO show content', id);
}
