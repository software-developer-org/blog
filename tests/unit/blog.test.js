/**
 * @jest-environment jsdom
 */

// import the neccessary functions

import * as Contract from '../../public/javascripts/contract';
import regeneratorRuntime from 'regenerator-runtime';
import {
  showBlogsInNavbar,
  showBlogsINOverview,
  showFullBlogArticle,
} from '../../public/javascripts/blog';

beforeEach(() => {
  global.document = {
    getElementById: jest.fn(),
  };
});

describe('unit test blog', () => {
  // test blogTitles()
  test('showBlogsInNavbar() processed array data', () => {
    const spy = jest.spyOn(Contract, 'fetchBlogNavbar');
    showBlogsInNavbar();
    expect(spy).toHaveBeenCalled();
  });

  // test showBlogContent()
  test('showBlogsINOverview() processed array data', () => {
    const spy = jest.spyOn(Contract, 'fetchBlogOverview');
    document.getElementById.mockReturnValue({ blogSummary: true });
    spy.mockImplementation(() => []);
    showBlogsINOverview();
    expect(spy).toHaveBeenCalled();
  });

  test('showFullBlogArticle() to process fetch data', () => {
    const spy = jest.spyOn(Contract, 'fetchBlogContent');
    document.getElementById.mockReturnValue({ blogArticle: true });
    spy.mockImplementation(() => []);
    showFullBlogArticle();
    expect(spy).toHaveBeenCalled();
  });

  afterEach(() => {
    delete global.document;
  });
});
