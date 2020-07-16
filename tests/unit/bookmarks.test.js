// import the neccessary functions

import bookTitles from '../../public/javascripts/bookmark';
import showBookContent from '../../public/javascripts/bookmark';

// create mock function for bookTitles()
getBooks = jest.fn(() => {
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

// create mock function for showBookContent()
showBook = jest.fn(() => {
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
  return showResult;
});

// test bookTitles()
test('bookTitles() processed array data', () => {
  bookTitles();
  expect(getBooks).toHaveBeenCalled();
});

// test showBookContent()
test('showBookContent() processed array data', () => {
  showBookContent();
  expect(showBook).toHaveBeenCalled();
});
