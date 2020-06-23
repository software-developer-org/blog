
//import neccessary functions 
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


// test getBlogs()
test('getBlogs() returns an array of objects', () =>{
    expect(getBlogs()).toBeInstanceOf(Promise);
    expect(getBlogs().length).toBeGreaterThan(0);

});

// test getBooks()
test('get Books() returns an array of objects', () =>{
    expect(getBooks()).toBeInstanceOf(Promise)
});

// test fullTeam()
test('fullTeam() returns an array of objects', () =>{
    expect(fullTeam()).toBeInstanceOf(Promise)
});