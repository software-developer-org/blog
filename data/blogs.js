// Adding dummy datas to the Blog's navbar
function blogTitles() {

    // Create an ordered list (ol) element
    var ol = document.createElement('ol');

    // Get the navElement with the ID we created in html file, blog.html
    const navElement = document.getElementById('navBlogTitles');

    //Append it to the navbar
    getBlogs().then((element) => {
        element.forEach((blogname) => {

            // create a-tag for blog link
            const blogLink = document.createElement('a');
            // fill attributes
            blogLink.setAttribute('id', 'blog');
            // onclick
            blogLink.onclick = (event) => {
                showFullBlog(blogname);
            };

            // create h4 element for title as child of blog link
            const h4Element = document.createElement('h4');
            blogLink.appendChild(h4Element);
            // create text content for title text
            const titleContent = document.createTextNode(blogname);
            h4Element.appendChild(titleContent);

            navElement.appendChild(blogLink);
        });
    });
}

function showBlogContent() {

    // Get the overviewElement with the ID we created in contract.js
    const overviewElement = document.getElementById('blogSummary');

    // Append it to the overview block
    showBlog().forEach((blog) => {

            // Create a divs for blog overview
            const blogOverview = document.createElement('div');
            blogOverview.setAttribute('id', 'blogOverview');
            
            const blogTitleDiv = document.createElement('div');
            blogTitleDiv.setAttribute('id', 'Blog');
            const blogAuthorDiv = document.createElement('div');
            blogAuthorDiv.setAttribute('id', 'Author');
            const blogDateDiv = document.createElement('div');
            blogDateDiv.setAttribute('id', 'Date');
            const blogContentDiv = document.createElement('div');
            blogContentDiv.setAttribute('id', 'Content');
            
            // create child divs in overview div
            blogOverview.appendChild(blogTitleDiv);
            blogOverview.appendChild(blogAuthorDiv);
            blogOverview.appendChild(blogDateDiv);
            blogOverview.appendChild(blogContentDiv);
            
            const blogTitle = document.createTextNode(blog.title);
            blogTitleDiv.appendChild(blogTitle);
            const blogAutor = document.createTextNode(blog.author);
            blogAuthorDiv.appendChild(blogAutor);
            const blogDate = document.createTextNode(blog.date);
            blogDateDiv.appendChild(blogDate);
            const blogContent = document.createTextNode(blog.content);
            blogContentDiv.appendChild(blogContent);

            blogOverview.onclick = (event) => {
                showFullBlog(blog.title);
            };


            overviewElement.appendChild(blogOverview);

            console.log(overviewElement);
    });
}

function showFullBlog(id) {
    console.log('>>>>>TODO showFullBlog ' + id);
}



