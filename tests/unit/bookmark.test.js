/**
 * @jest-environment jsdom
 */

// import the neccessary functions
import * as Contract from '../../public/javascripts/contract';
import { bookTitles } from '../../public/javascripts/bookmark';
import { showBookContent } from '../../public/javascripts/bookmark';

describe('unit test bookmark', () => {
  // test bookTitles()
  test('bookTitles() processed array data', () => {
    const spy = jest.spyOn(Contract, 'getBooks');
    bookTitles();
    expect(spy).toBeCalledTimes(1);
  });

  // test showBookContent()
  test('showBookContent() processed array data', () => {
    const spy = jest.spyOn(Contract, 'showBook');
    showBookContent();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
