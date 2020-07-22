/**
 * @jest-environment jsdom
 */

// import neccessary functions

import { getBlogs } from '../../public/javascripts/contract';
import { getBooks } from '../../public/javascripts/contract';
import { fullTeam } from '../../public/javascripts/contract';

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
