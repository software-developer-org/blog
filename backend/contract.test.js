
//import neccessary functions 
const getBlogs = require('./contract');
const getBooks = require('./contract');
const fullTeam = require('./contract');


// test getBlogs()
test('getBlogs() returns an array of objects', () =>{
    expect(getBlogs()).toBeInstanceOf(Array);
    expect(getBlogs().length).toBeGreaterThan(0);

});

// test getBooks()
test('get Books() returns an array of objects', () =>{
    expect(getBooks()).toBeInstanceOf(Array)
});

// test fullTeam()
test('fullTeam() returns an array of objects', () =>{
    expect(fullTeam()).toBeInstanceOf(Array)
});