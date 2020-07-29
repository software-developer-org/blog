import {
  getBlogs,
  showBlog,
  fetchBlogContent,
} from '../javascripts/contract.js';

// ---TODO--- rewrite navbar and overview code to get new data from blogs folder

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

  showBlog().then((blog) => {
    blog.forEach((blogpromise) => {
      blogpromise.then((blogdata) => {
        // Create a div for blog overview
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

        const blogTitle = document.createTextNode(blogdata.title);
        blogTitleDiv.appendChild(blogTitle);
        const blogAutor = document.createTextNode(blogdata.author);
        blogAuthorDiv.appendChild(blogAutor);
        const blogDate = document.createTextNode(blogdata.date);
        blogDateDiv.appendChild(blogDate);
        const blogContent = document.createTextNode(blogdata.tldr);
        blogContentDiv.appendChild(blogContent);

        overviewElement.appendChild(blogOverview);

        blogOverview.onclick = () => {
          showFullBlog(blogdata.title);
        };
      });
    });
  });
}
// ---TODO-- id needs to be a parameter in full implementation
async function showFullBlog() {
  // ---TODO--
  // ---- try: sequencialy generate elements for the json data and arrays----
  //redirect to article pag
  // stringify json response
  // create elements for the data
  // write data into elements with paragraph logic
  /*
  --- OLD VERSION FOR REFERENCE---
  // fetch blog content into variable
  const articelHtml = fetchBlogContent().then((article) => {
    const articleContent = document.createTextNode(article);
    console.log(articleContent);
    // create needed div and apply article content
    const articleDiv = document.createElement('div');
    articleDiv.appendChild(articleContent);
    // append result into blog page
    const page = document.getElementById('blogSummary');
    page.appendChild(articleDiv);
    return page;
  });
  await window.sessionStorage.setItem('blog', articelHtml);

  window.location.replace('/blogs');
  */
}

window.addEventListener('load', blogTitles);
window.addEventListener('load', showBlogContent);

export { blogTitles, showBlogContent, showFullBlog };
