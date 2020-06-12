// Adding dummy datas to the Bookmark's navbar
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

function showAboutTMContent(id) {
    console.log(">>>>> ToDo", id);
}