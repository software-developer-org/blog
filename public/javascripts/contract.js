// bookmark dummy
class BookData {
  title;
  id;
  tldr;
  url;
}

// -----BLOGS-----

// get all blogs with titles
function getBlogs() {
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
function showBlog() {
  /*  array[i].download_url = api
      object.title = title
      object.author = ...
      object.date = ...
      object.tldr = ...

      fetch blogs content,
      take first 3 and fetch the objekt,
      return the resulting array 
  */
  const blogdata = [];

  for (let i = 0; i <= 2; i++) {
    const url =
      'https://api.github.com/repos/software-developer-org/blog/contents/blogs';
    fetch(url)
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        fetch(data[i].download_url)
          .then((response) => {
            const blogInfo = response.json();
            return blogInfo;
          })
          .then((blogarray) => {
            blogdata.push(blogarray);
            return blogdata;
          });
      });
  }
  return blogdata;
}

// get a specific blog with title and full content
function fullBlog(id) {
  return;
}

// -----BOOKMARKS------

//get all bookmarks with titles
function getBooks() {
  const url =
    'https://api.github.com/repos/software-developer-org/blog/contents/bookmarks';
  const result = fetch(url)
    .then((response) => {
      const data = response.json();
      return data;
    })
    .then((data) => {
      //console.log(data);
      const result = data.map((element) => element.name);
      //console.log(result);
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
    fetch(url)
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        fetch(data[i].download_url)
          .then((response) => {
            const bookInfo = response.json();
            return bookInfo;
          })
          .then((bookarray) => {
            showBookResult.push(bookarray);
            return showBookResult;
          });
      });
  }
  console.log(showBookResult);
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
      console.log(data);
      const result = data.map((element) => element.name);
      console.log(result);
      return result;
    });
  return result;
}

// ------ADD FUNCTION------

// add a bookmark with title, url and summary
function addBlog(BlogData) {}

// add blog with the date, author, title, tdr and content
function addBook(BookData) {}

export { getBlogs, getBooks, fullTeam, showBlog, showBook };
