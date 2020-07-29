/**
 * @jest-environment jsdom
 */

// import neccessary functions

import {
  getBlogs,
  getBooks,
  fullTeam,
  fullBlog,
} from '../../public/javascripts/contract';

describe('check fetch data in contract', () => {
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

  test.only('fullBlog() returns ;a promise object', () => {
    fullBlog().then((result) => expect(result).toBeInstanceOf(Object));
  });
});
