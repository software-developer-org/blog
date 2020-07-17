// import the neccessary functions
require('jest-fetch-mock').enableMocks();
import { blogTitles } from '../../public/javascripts/blog';
import { showBlogContent } from '../../public/javascripts/blog';
// create mock for blogTitles()
getBlogs = jest.fn(() => {
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

//create mock for showBlogContent()
showBlog = jest.fn(() => {
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

// test blogTitles()
test('blogTitles() processed array data', () => {
  blogTitles();
  expect(getBlogs).toHaveBeenCalled();
});

// test showBlogContent()
test('showBlogContent() processed array data', () => {
  showBlogContent();
  expect(showBlog).toHaveBeenCalled();
});
