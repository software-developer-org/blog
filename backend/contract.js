// ------Dummy Data------

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
    date;
    author;
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
    const result = [];

    for (var i = 0; i < 5; i++) {
        const blogData = new BlogData();
        blogData.title = "Blog" + i;
        blogData.id = "ID" + i;
        blogData.author = "Author" + i;
        blogData.date = "Date" + i;
        result.push(blogData);
    }
    console.log(result);
    return result;
}
getBlogs();

// get a speciffic blog with the date, author, title and tdr
function showBlog(id) {

    return
}

// get a speciffic blog with title and full content
function fullBlog(id) {

    return
}

// -----BOOKMARKS------

//get all bookmarks with titles
function getBooks() {

    return
}

// get a speciffic bookmark with title and summary
function showBook(id) {

    return
}

// get speciffic bookmark url
function fullBook(id) {

    return
}


// -----About------

// get bio of speciffic member
function fullTeam(iname) {

    return
}


// ------ADD FUNCTION------

// add a bookmark with title, url and summary
function addBlog(BlogData) {

}

// add blog with the date, author, title, tdr and content
function addBook(BookData) {

}