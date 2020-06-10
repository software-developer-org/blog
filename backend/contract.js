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
    const url = 'https://api.github.com/repos/software-developer-org/blog/contents/blogs'
    const result = fetch(url)
        .then((response) => {
            const data = response.json()
            return data;
        })
        .then((data) => {
            console.log(data);
            const result = data.map(element => element.name);
            console.log(result);
            return result;

        });
        return result;

};

// get a specific blog with the date, author, title and tdr
function showBlog(id) {

    return
}

// get a specific blog with title and full content
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
    return bookResult;
}
module.exports =  getBooks;

// get a specific bookmark with title and summary
function showBook(id) {

    return
}

// get specific bookmark url
function fullBook(id) {

    return
}


// -----About------

// get bio of specific member
function fullTeam() {

    const teamResult = [];

    for(var i = 0; i < 3; i++) {
        const teamData = new TeamData();
        teamData.name = "Name" + i;
        teamData.bio = "TM Bio" + i;
        teamResult.push(teamData);         
    }
    return teamResult;
}
module.exports = fullTeam;


// ------ADD FUNCTION------

// add a bookmark with title, url and summary
function addBlog(BlogData) {

}

// add blog with the date, author, title, tdr and content
function addBook(BookData) {

}