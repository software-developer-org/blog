// ------Dummy Data------

// blog dummy
class BlogData { title: "Test Blog title"
                id: "087869fekf"
                date: "05-19-2020"
                author: "Ragip"
                tdr: "her is a summary why you should read this blog" 
                content: "rest of the blog article let's see if we can display this on the site." 
            }

// bookmark dummy
class BookData { title: "Test Bookmark title"
                id: "04358466ugfsdnf"
                date: "05-19-2020"
                author: "Ragip"
                tdr: "her is a summary why you should klick this bookmark" 
                url: "https:www.wikipedia.com" 
            }

// about dummy
class TeamData { name: "Rouven Gonzalez"
                bio: "some stuff about me and why I'm here " 
                // more??
            }

// -----BLOGS-----

// get all blogs with titles 
function getBlogs (): BlogData[]{

    return 
}

// get a speciffic blog with the date, author, title and tdr
function showBlog (id: string): BlogData{

    return
}

// get a speciffic blog with title and full content
function fullBlog (id: string): BlogData{

    return
}

// -----BOOKMARKS------

//get all bookmarks with titles
function getBooks (): BookData[]{

    return
}

// get a speciffic bookmark with title and summary
function showBook (id: string): BookData{

    return
}

// get speciffic bookmark url
function fullBook (id: string): BookData{

    return
}


// -----About------

// get bio of speciffic member
function fullTeam (iname: string): TeamData{

    return
}


// ------ADD FUNCTION------

// add a bookmark with title, url and summary
function addBlog(BlogData){

}

// add blog with the date, author, title, tdr and content
function addBook(BookData){
    
}