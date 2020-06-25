const { TestScheduler } = require("jest");

// import the neccessary functions
function blogTitles() {

    // Create an ordered list (ol) element
    var ol = document.createElement('ol');

    // Get the navElement with the ID we created in html file, blog.html
    const navElement = document.getElementById('navBlogTitles');

    //Append it to the navbar
    getBlogs().then(element => {
        element.forEach(blogname => {

            // create a-tag for blog link
            const blogLink = document.createElement('a');
            // fill attributes
            blogLink.setAttribute('id', blogname);
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
        })
    });
}

function showBlogContent() {

    // Get the overviewElement with the ID we created in contract.js
    const overviewElement = document.getElementById('blogSummary');

    // Append it to the overview block
    showBlog().forEach(blog => {

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

    });
}

// create mock for blogTitles()
getBlogs = jest.fn(() => {

    class ResponseData {

        title;
        id;
        date;
        author;
        tldr;
        content;
    }
    
    const showResult = [];
    
    for(var i = 0; i < 3; i++) {
        const responseData = new ResponseData();
        responseData.id = "00 " + i;
        responseData.title = "Title " + i;
        responseData.author = "Author " + i;
        responseData.date = "Date " + i;
        responseData.content = "This is a short content description " + i;
        showResult.push(responseData);
    }
    return Promise.resolve(showResult);

})

//create mock for showBlogContent()
showBlog = jest.fn(() => {
    class ResponseData {

        title;
        id;
        date;
        author;
        tldr;
        content;
    }
    
    const showResult = [];
    
    for(var i = 0; i < 3; i++) {
        const responseData = new ResponseData();
        responseData.id = "00 " + i;
        responseData.title = "Title " + i;
        responseData.author = "Author " + i;
        responseData.date = "Date " + i;
        responseData.content = "This is a short content description " + i;
        showResult.push(responseData);
    }
    return showResult;


})

// test blogTitles()
test('blogTitles() processed array data', () => {
blogTitles();
expect(getBlogs).toHaveBeenCalled();
})

// test showBlogContent()
test('showBlogContent() processed array data', () => {
showBlogContent();
expect(showBlog).toHaveBeenCalled();
})