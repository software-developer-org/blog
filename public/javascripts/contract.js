// -----BLOGS-----

// get all blog titles
function fetchBlogNavbar() {
  const url =
    'https://api.github.com/repos/software-developer-org/blog/contents/blogs';
  const result = fetch(url)
    .then((response) => {
      const data = response.json();
      return data;
    })
    .then((data) => {
      const result = data.map((element) => element.name);
      return result;
    });
  return result;
}

// get a specific blog with the date, author, title and tdr
function fetchBlogOverview() {
  /*  array[i].download_url = api
      object.title = title
      object.author = ...
      object.date = ...
      object.tldr = ...

      fetch blogs content,
      take first 3 and fetch the objekt,
      return the resulting array 
  */

  //  fetch all blogs
  const url =
    'https://api.github.com/repos/software-developer-org/blog/contents/blogs';
  const blogmetadata = fetch(url).then((response) => {
    const data = response.json();
    return data;
  });

  // fetch the first 3 blogs
  const blogContentArray = blogmetadata.then((data) => {
    const blogdata = data;

    // get content of the blogs
    const blogarray = blogdata.map((metadata) => {
      // fetch blog content
      const blogInfo = fetch(metadata.download_url).then((response) => {
        // get and return json from blog content
        response = response.json();
        return response;
      });
      return blogInfo;
    });
    return blogarray;
  });
  return blogContentArray;
}

// get a specific blog with title and full content
function fetchBlogContent() {
  // get id from search param
  const params = window.location.search;
  const id = params.replace('?', '');
  console.log(id);

  const url = `https://raw.githubusercontent.com/software-developer-org/blog/master/blogs/${id}`;

  //fetch blog and return the content
  const blogArticle = fetch(url).then((response) => response.json());
  return blogArticle;
}

// -----BOOKMARKS------

//get all bookmarks with titles
function getBooks() {
  const url =
    'https://api.github.com/repos/software-developer-org/blog/contents/bookmarks';
  // const fo =  fetch is important because this variable is returned at the end
  const result = fetch(url)
    .then((response) => {
      const data = response.json();
      return data;
    })
    .then((data) => {
      const result = data.map((element) => element.name);
      return result;
    });
  return result;
}

// get a specific bookmark with title and summary
function showBook() {
  const showBookResult = [];

  for (let i = 0; i <= 2; i++) {
    const url =
      'https://api.github.com/repos/software-developer-org/blog/contents/bookmarks';
    const bookdata = fetch(url)
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        let response = fetch(data[i].download_url);
        return response;
      })
      .then((response) => {
        const bookInfo = response.json();
        return bookInfo;
      });
    showBookResult.push(bookdata);
  }
  return showBookResult;
}

// get specific bookmark url
function fullBook(id) {
  return;
}

// -----About------

// get bio of specific member
function fullTeam() {
  const url =
    'https://api.github.com/repos/software-developer-org/blog/contents/about';
  const result = fetch(url)
    .then((response) => {
      const data = response.json();
      return data;
    })
    .then((data) => {
      const result = data.map((element) => element.name);
      return result;
    });
  return result;
}

// ------ADD FUNCTION------

// add a bookmark with title, url and summary
function addBlog(BlogData) {}

// add blog with the date, author, title, tdr and content
function addBook(BookData) {}

export {
  fetchBlogNavbar,
  getBooks,
  fullTeam,
  fetchBlogOverview,
  showBook,
  fetchBlogContent,
};
