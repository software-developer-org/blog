// import neccessary functions
const getBlogs = require('./contract');
const getBooks = require('./contract');
const fullTeam = require('./contract');

// create mock for fetch()
fetch = jest.fn(() => {
  class ResponseData {
    title;
    id;
    date;
    author;
    tldr;
    content;
  }

  const showResult = [];

  for (var i = 0; i < 3; i++) {
    const responseData = new ResponseData();
    responseData.id = '00 ' + i;
    responseData.title = 'Title ' + i;
    responseData.author = 'Author ' + i;
    responseData.date = 'Date ' + i;
    responseData.content = 'This is a short content description ' + i;
    showResult.push(responseData);
  }
  return Promise.resolve(showResult);
});
// test getBlogs()
test('getBlogs() returns an array of objects', () => {
  getBlogs().then((result) => expect(result).toBeInstanceOf(Array));
});

// test getBooks()
test('get Books() returns an array of objects', () => {
  getBooks().then((result) => expect(result).toBeInstanceOf(Array));
});

// test fullTeam()
test('fullTeam() returns an array of objects', () => {
  fullTeam().then((result) => expect(result).toBeInstanceOf(Array));
});
