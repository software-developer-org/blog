/**
 * @jest-environment jsdom
 */

// import the neccessary functions
import * as Contract from '../../public/javascripts/contract';
import {
  blogTitles,
  showBlogContent,
  showFullBlog,
} from '../../public/javascripts/blog';

describe('unit test bookmark', () => {
  // test blogTitles()
  test('blogTitles() processed array data', () => {
    const spy = jest.spyOn(Contract, 'getBlogs');
    blogTitles();
    expect(spy).toHaveBeenCalled();
  });

  // test showBlogContent()
  test('showBlogContent() processed array data', () => {
    const spy = jest.spyOn(Contract, 'showBlog');
    spy.mockImplementation(() => []);
    showBlogContent();
    expect(spy).toHaveBeenCalled();
  });

  test.only('showFullBlog() to process fetch data', () => {
    const spy = jest.spyOn(Contract, 'fetchBlogContent');
    showFullBlog();
    expect(spy).toHaveBeenCalled();
  });
});
