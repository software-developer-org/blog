import { getBooks, showBook } from '../javascripts/contract.js';

// Adding dummy datas to the Bookmark's navbar
function bookTitles() {
  // Create an ordered list (ol) element
  var ol = document.createElement('ol');

  // Get the navElement with the ID we created in html file, bookmark.html
  const navElement = document.getElementById('navBarBookTitles');

  //Append it to the navbar
  getBooks().then((element) => {
    element.forEach((bookname) => {
      // create a-tag for bookmark link
      const bookLink = document.createElement('a');
      // fill attributes
      bookLink.setAttribute('id', element);
      // onclick
      bookLink.onclick = (event) => {
        showFullBook(bookname);
      };
      // create h4 element for title as child of bookmark link
      const h4Element = document.createElement('h4');
      bookLink.appendChild(h4Element);
      // create text content for title text
      const titleContent = document.createTextNode(bookname);
      h4Element.appendChild(titleContent);

      navElement.appendChild(bookLink);
    });
  });
}

function showBookContent() {
  // Get the bookmarkElement with the ID we created in contract.js
  const bookmarkElement = document.getElementById('bookmarkSummary');
  console.log(bookmarkElement);
  // Append it to the overview block
  showBook().forEach((book) => {
    // Create a divs for blog overview
    const bookOverview = document.createElement('div');
    bookOverview.setAttribute('id', 'bookOverview');

    const bookTitleDiv = document.createElement('div');
    bookTitleDiv.href = 'http://www.w3.org/DOM/';
    bookTitleDiv.setAttribute('id', 'Bookmark');
    const bookContentDiv = document.createElement('div');
    bookContentDiv.setAttribute('id', 'Content');

    // create child divs in overview div
    bookOverview.appendChild(bookTitleDiv);
    bookOverview.appendChild(bookContentDiv);

    const bookTitle = document.createTextNode(book.title);
    bookTitleDiv.appendChild(bookTitle);
    const bookContent = document.createTextNode(book.content);
    bookContentDiv.appendChild(bookContent);

    bookOverview.onclick = (event) => {
      showFullBook(book.url);
    };

    bookmarkElement.appendChild(bookOverview);

    console.log(bookmarkElement);
  });
}

function showFullBook(id) {
  window.open('http://www.w3.org/DOM/');
  console.log('>>>>>TODO showFullBlog ' + id);
}

window.addEventListener('load', bookTitles);
window.addEventListener('load', showBookContent);

export { bookTitles, showBookContent };
