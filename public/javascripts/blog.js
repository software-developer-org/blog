import {
  fetchBlogNavbar,
  fetchBlogOverview,
  fetchBlogContent,
} from '../javascripts/contract.js';

// laod the blog titles into navbar element
async function showBlogsInNavbar() {
  // get data from backend
  const blogList = await fetchBlogNavbar();

  // Get the navElement with the ID we created in html file, blog.html
  const navElement = document.getElementById('navBlogTitles');

  blogList.forEach((blogname) => {
    // create a-tag for blog link
    const blogLink = document.createElement('a');
    // fill attributes
    blogLink.setAttribute('id', 'blog');
    // onclick
    blogLink.onclick = () => {
      window.location.href = `/blogs?${blogname}`;
    };

    // create h4 element for title as child of blog link
    const h4Element = document.createElement('h4');
    blogLink.appendChild(h4Element);
    // create text content for title text
    const titleContent = document.createTextNode(blogname);
    h4Element.appendChild(titleContent);

    navElement.appendChild(blogLink);
  });
}

// load the last 3 blogs with description etc in overview element
async function showBlogsINOverview() {
  if (document.getElementById('blogSummary')) {
    // get data from backend
    const blog = await fetchBlogOverview();

    // Get the overviewElement with the ID we created in contract.js
    const overviewElement = document.getElementById('blogSummary');

    blog.forEach((blogpromise) => {
      blogpromise.then((blogdata) => {
        // Create a div for blog overview
        const blogOverview = document.createElement('div');
        blogOverview.setAttribute('id', 'blogOverview');

        // create needed elements and set id
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

        // write the blogdata into created elements
        const blogTitle = document.createTextNode(blogdata.title);
        blogTitleDiv.appendChild(blogTitle);
        const blogAutor = document.createTextNode(blogdata.author);
        blogAuthorDiv.appendChild(blogAutor);
        const blogDate = document.createTextNode(blogdata.date);
        blogDateDiv.appendChild(blogDate);
        const blogContent = document.createTextNode(blogdata.tldr);
        blogContentDiv.appendChild(blogContent);

        overviewElement.appendChild(blogOverview);

        // send information for full article to page
        blogOverview.onclick = () => {
          window.location.href = `/blogs?${blogdata.title}`;
        };
      });
    });
  }
}

// load the full article into overview
async function showFullBlogArticle() {
  if (document.getElementById('blogArticle')) {
    // get data from backend
    const blogArticleJson = await fetchBlogContent();

    // create elements for the data
    const titleElement = document.createElement('h1');
    const authorElement = document.createElement('p');
    const dateElement = document.createElement('p');
    const tldrElement = document.createElement('div');
    const contentElement = document.createElement('div');
    const linkElement = document.createElement('div');

    // write data into elements with paragraph logic
    // ---TODO--- change paragraph logic for prettier display in view

    //---HEADER---
    titleElement.innerHTML = blogArticleJson.title;
    authorElement.innerHTML = blogArticleJson.author;
    dateElement.innerHTML = blogArticleJson.date;

    //---TLDR---
    blogArticleJson.tldr.forEach((textString) => {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = textString;
      tldrElement.appendChild(paragraph);
    });

    //---CONTENT---
    blogArticleJson.content.forEach((textString) => {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = textString;
      contentElement.appendChild(paragraph);
    });
    //---LINKS---
    blogArticleJson.links.forEach((textString) => {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = textString;
      linkElement.appendChild(paragraph);
    });

    // get Element to display blog article and insert the created article elements
    const blogDiv = document.getElementById('blogArticle');
    blogDiv.appendChild(titleElement);
    blogDiv.appendChild(authorElement);
    blogDiv.appendChild(dateElement);
    blogDiv.appendChild(tldrElement);
    blogDiv.appendChild(contentElement);
    blogDiv.appendChild(linkElement);
  }
}

// event listeners for show funktions
window.addEventListener('load', showBlogsInNavbar);
window.addEventListener('load', showBlogsINOverview);
window.addEventListener('load', showFullBlogArticle);

export { showBlogsInNavbar, showBlogsINOverview, showFullBlogArticle };
