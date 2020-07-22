// blog dummy
class BlogData {
  title;
  id;
  date;
  author;
  tldr;
  content;
}

// bookmark dummy
class BookData {
  title;
  id;
  tldr;
  url;
}

// about dummy
class TeamData {
  name;
  bio;
  // more??
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
      //console.log(data);
      const result = data.map((element) => element.name);
      console.log(result);
      return result;
    });
  return result;
}

// get a specific blog with the date, author, title and tdr
function showBlog() {
  const showBlogResult = [];

  for (var i = 0; i < 3; i++) {
    const blogData = new BlogData();
    blogData.id = '00 ' + i;
    blogData.title = 'Blog ' + i;
    blogData.author = 'Author ' + i;
    blogData.date = 'Date ' + i;
    blogData.content = 'This is a short content of Blog ' + i;
    showBlogResult.push(blogData);
  }
  return showBlogResult;
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

  for (var i = 0; i < 3; i++) {
    const bookData = new BookData();
    bookData.id = '00 ' + i;
    bookData.title = 'Bookmark ' + i;
    bookData.url = ' ' + i;
    bookData.content = 'Hier is some brief content to read...' + i;
    showBookResult.push(bookData);
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
