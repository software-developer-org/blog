// import the neccessary functions
function aboutTeamMemberName() {

    // Create an ordered list (ol) element
    var ol = document.createElement('ol');

    // Get the navElement with the ID we created in html file, about.html
    const navElement = document.getElementById('navbarTeamMemberName');

    //Append it to the navbar
    fullTeam().then(element => {
        element.forEach(teamName => {
            
        // create a-tag for team member link
        const teamLink = document.createElement('a');
        // fill attributes
        teamLink.setAttribute('id', element);
        // onclick
        teamLink.onclick = (event) => {
            showAboutTMContent(teamName);
        };

        // create h4 element for title as child of team member link
        const h4Element = document.createElement('h4');
        teamLink.appendChild(h4Element);
        // create text content for title text
        const titleContent = document.createTextNode(teamName);
        h4Element.appendChild(titleContent);

        navElement.appendChild(teamLink);
    })});
}

// create mock for blogTitles()
fullTeam = jest.fn(() => {

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

// test blogTitles()
test('aboutTeamMemberName() processed array data', () => {
    aboutTeamMemberName();
    expect(fullTeam).toHaveBeenCalled();
    })