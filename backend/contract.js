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
    const blogResult = [];

    for (var i = 0; i < 5; i++) {
        const blogData = new BlogData();
        blogData.title = "Blog" + i;
        blogData.id = "ID" + i;
        blogData.author = "Author" + i;
        blogData.date = "Date" + i;
        blogResult.push(blogData);
    }
    //console.log(blogResult);
    return blogResult;
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

    const bookResult = [];

    for (var i = 0; i < 5; i++) {
        const bookData = new BookData();
        bookData.title = "Bookmark" + i;
        bookData.id = "ID" + i;
        bookData.author = "Author" + i;
        bookData.date = "Date" + i;
        bookData.url = "url" + i;
        bookResult.push(bookData);
    }
    //console.log(bookResult);
    return bookResult;
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

    const teamResult = ["Tai Truong", "Ragip Gashi", "Rouven Gonzalez"];

    for(var i = 0; i < 3; i++) {
        const teamData = new TeamData();
        teamData.name = "Name" + i;
        teamData.bio = "TM Bio" + i;
        teamResult.push(teamData);         
    }
    //console.log(teamResult);
    return teamResult;
}


// ------ADD FUNCTION------

// add a bookmark with title, url and summary
function addBlog(BlogData) {

}

// add blog with the date, author, title, tdr and content
function addBook(BookData) {

}