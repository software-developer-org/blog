/**
 * @jest-environment jsdom
 */

// import the neccessary functions
import * as Contract from '../../public/javascripts/contract';
import { blogTitles } from '../../public/javascripts/blog';
import { showBlogContent } from '../../public/javascripts/blog';

describe('unit test bookmark', () => {
  // test blogTitles()
  test('blogTitles() processed array data', () => {
    const spy = jest.spyOn(Contract, 'getBlogs');
    blogTitles();
    expect(spy).toHaveBeenCalled();
  });

  // test showBlogContent()
  test('showBlogContent() processed array data', () => {
    const spy = jest.spyOn(Contract, 'getBlog');
    showBlogContent();
    expect(spy).toHaveBeenCalled();
  });
});
