// Adding dummy datas to the Bookmark's navbar
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
            showBookContent(bookname);
        };
        // create h4 element for title as child of bookmark link
        const h4Element = document.createElement('h4');
        bookLink.appendChild(h4Element);
        // create text content for title text
        const titleContent = document.createTextNode(bookname);
        h4Element.appendChild(titleContent);

        navElement.appendChild(bookLink);
    })});
}

function showBookContent(id) {
    console.log(">>>>> ToDo", id);
}