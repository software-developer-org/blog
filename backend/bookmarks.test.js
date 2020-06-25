// import the neccessary functions

function bookTitles() {

    // Create an ordered list (ol) element
    var ol = document.createElement('ol');

    // Get the navElement with the ID we created in html file, bookmark.html
    const navElement = document.getElementById('navBarBookTitles');

    //Append it to the navbar
    getBooks().then(element => {
        element.forEach(bookname => {

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
        })
    });
}

function showBookContent() {

    // Get the bookmarkElement with the ID we created in contract.js
    const bookmarkElement = document.getElementById('bookmarkSummary');

    // Append it to the overview block
    showBook().forEach(book => {

        // Create a divs for blog overview
        const bookOverview = document.createElement('div');
        bookOverview.setAttribute('id', 'bookOverview');

        const bookTitleDiv = document.createElement('div');
        bookTitleDiv.href = "http://www.w3.org/DOM/";
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


    })
};

// create mock function for bookTitles()
getBooks = jest.fn(() => {

    class ResponseData {

        title;
        id;
        date;
        author;
        tldr;
        content;
    }
    
    const showResult = [];
    
    for(var i = 0; i < 3; i++) {
        const responseData = new ResponseData();
        responseData.id = "00 " + i;
        responseData.title = "Title " + i;
        responseData.author = "Author " + i;
        responseData.date = "Date " + i;
        responseData.content = "This is a short content description " + i;
        showResult.push(responseData);
    }
    return Promise.resolve(showResult);

})

// create mock function for showBookContent()
showBook = jest.fn(() => {
    class ResponseData {

        title;
        id;
        date;
        author;
        tldr;
        content;
    }
    
    const showResult = [];
    
    for(var i = 0; i < 3; i++) {
        const responseData = new ResponseData();
        responseData.id = "00 " + i;
        responseData.title = "Title " + i;
        responseData.author = "Author " + i;
        responseData.date = "Date " + i;
        responseData.content = "This is a short content description " + i;
        showResult.push(responseData);
    }
    return showResult;


})

// test bookTitles()
test('bookTitles() processed array data', () => {
    bookTitles();
    expect(getBooks).toHaveBeenCalled();
    })
    
    // test showBookContent()
    test('showBookContent() processed array data', () => {
    showBookContent();
    expect(showBook).toHaveBeenCalled();
    })