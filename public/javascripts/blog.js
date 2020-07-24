import { getBlogs, showBlog } from '../javascripts/contract.js';

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
    console.log(blog);
    blog.then((blogdata) => {
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
}

function showFullBlog(id) {
  console.log('>>>>>TODO showFullBlog ' + id);
  const url = `https://raw.githubusercontent.com/software-developer-org/blog/master/blogs/${id}`;

  //get article of the blog
  const blogArticle = fetch(url)
    .then((response) => {
      const article = response.json();
      return article;
    })
    .then((response) => {
      const text = response.content;
      console.log(text);

      //create div and write blog article
      const page = document.getElementById('blogFullpage');
      const overview = document.getElementById('blogSummary');

      overview.style.display = 'none';

      //--TODO: titel musst be h1 and some changes to the content for better readability--
      const blogPage = document.createElement('div');
      blogPage.setAttribute('id', 'blogPage');
      const blogText = document.createTextNode(text);
      const blogTitle = document.createTextNode(id);
      blogPage.appendChild(blogTitle);
      blogPage.appendChild(blogText);
      page.appendChild(blogPage);
    });
}

window.addEventListener('load', blogTitles);
window.addEventListener('load', showBlogContent);

export { blogTitles, showBlogContent };
