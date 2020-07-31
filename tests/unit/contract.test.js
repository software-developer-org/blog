/**
 * @jest-environment jsdom
 */

// import neccessary functions

import {
  fetchBlogNavbar,
  getBooks,
  fullTeam,
  fetchBlogOverview,
} from '../../public/javascripts/contract';

describe('check fetch data in contract', () => {
  // test getBlogs()
  test('fetchBlogNavbar() returns an array of objects', () => {
    fetchBlogNavbar().then((result) => expect(result).toBeInstanceOf(Array));
  });

  // test getBooks()
  test('get Books() returns an array of objects', () => {
    getBooks().then((result) => expect(result).toBeInstanceOf(Array));
  });

  // test fullTeam()
  test('fullTeam() returns an array of objects', () => {
    fullTeam().then((result) => expect(result).toBeInstanceOf(Array));
  });

  test.only('fetchBlogOverview() returns ;a promise object', () => {
    fetchBlogOverview().then((result) => expect(result).toBeInstanceOf(Object));
  });
});
