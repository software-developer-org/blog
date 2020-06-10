
//import neccessary functions 
const getBlogs = require('./contract');
const getBooks = require('./contract');
const fullTeam = require('./contract');


// test getBlogs()
test('returns an array of objects', () =>{
    expect(getBlogs()).toBeInstanceOf(Array)
});

// test getBooks()
test('returns an array of objects', () =>{
    expect(getBooks()).toBeInstanceOf(Array)
});

// test fullTeam()
test('returns an array of objects', () =>{
    expect(fullTeam()).toBeInstanceOf(Array)
});