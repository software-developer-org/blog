
// import neccessary functions 
function getBlogs() {
    const url = 'https://api.github.com/repos/software-developer-org/blog/contents/blogs'
    const result = fetch(url)
        .then((response) => {
            const data = response.json()
            return data;
        })
        .then((data) => {
            //console.log(data);
            const result = data.map(element => element.name);
            //console.log(result);
            return result;

        });
    return result;

}

function getBooks() {

    const url = 'https://api.github.com/repos/software-developer-org/blog/contents/bookmarks'
    const result = fetch(url)
        .then((response) => {
            const data = response.json()
            return data;
        })
        .then((data) => {
            //console.log(data);
            const result = data.map(element => element.name);
            //console.log(result);
            return result;
        });
    return result;
}

function fullTeam() {

    const url = 'https://api.github.com/repos/software-developer-org/blog/contents/about'
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
}

// create mock for fetch()
 fetch = jest.fn(() =>{

    class ResponseData {

        title;
        id;
        date;
        author;
        tldr;
        content;
    }
    
    const showResult = [];
    
    for(var i = 0; i < 3; i++) {
        const responseData = new ResponseData();
        responseData.id = "00 " + i;
        responseData.title = "Title " + i;
        responseData.author = "Author " + i;
        responseData.date = "Date " + i;
        responseData.content = "This is a short content description " + i;
        showResult.push(responseData);
    }
    return Promise.resolve(showResult);

})
// test getBlogs()
test('getBlogs() returns an array of objects', () =>{
    getBlogs().then(result => expect(result).toBeInstanceOf(Array))
   
});

// test getBooks()
test('get Books() returns an array of objects', () =>{
    getBooks().then(result => expect(result).toBeInstanceOf(Array))
    
});

// test fullTeam()
test('fullTeam() returns an array of objects', () =>{
    fullTeam().then(result => expect(result).toBeInstanceOf(Array))
   
});