/**
 * @jest-environment jsdom
 */

// import the neccessary functions
import * as Contract from '../../public/javascripts/contract';
import {
  showBlogsInNavbar,
  showBlogsINOverview,
  showFullBlogArticle,
} from '../../public/javascripts/blog';

describe('unit test bookmark', () => {
  // test blogTitles()
  test('showBlogsInNavbar() processed array data', () => {
    const spy = jest.spyOn(Contract, 'getBlogs');
    showBlogsInNavbar();
    expect(spy).toHaveBeenCalled();
  });

  // test showBlogContent()
  test('showBlogsINOverview() processed array data', () => {
    const spy = jest.spyOn(Contract, 'showBlog');
    spy.mockImplementation(() => []);
    showBlogsINOverview();
    expect(spy).toHaveBeenCalled();
  });

  test.only('showFullBlogArticle() to process fetch data', () => {
    const spy = jest.spyOn(Contract, 'fetchBlogContent');
    showFullBlogArticle();
    expect(spy).toHaveBeenCalled();
  });
});
