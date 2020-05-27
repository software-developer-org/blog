// Adding dummy datas to the nav bar
function createData() {
    const blogs = [
        {
            id: "1",
            title: "First title"
        },
        {
            id: "2",
            title: "Second title"
        },
        {
            id: "3",
            title: "third title"
        },
    ];

    // Create a ol element
    var ol = document.createElement('ol');

    //Append it to the navbar
    // document.getElementsByClassName('navbar');
    const navElement = document.getElementById('navBlogTitles');

    blogs.forEach(blog => {
        // create a-tag for blog link
        const blogLink = document.createElement('a');
        // create h4 element for title as child of blog link
        const h4Element = document.createElement('h4');
        blogLink.appendChild(h4Element);
        // create text content for title text
        const titleContent = document.createTextNode(blog.title);
        h4Element.appendChild(titleContent);

        navElement.appendChild(blogLink);
    })

    // document.body.appendChild(ol);

    // for (var i = 0; i < blogs.length; i++) {
    //     var li = document.createElement('li');
    //     li.innerHTML = blogs[i];
    //     ol.appendChild(li);
    // }
};

createData();

// Blog button functions on click
function blogFunction() {
    let blog = document.getElementById("summary");
    blog.style.opacity = 0;

    let blog1 = document.getElementById("fullpage");
    blog1.style.opacity = 100;
}


// About button functions on click
function aboutFunction() {
    let about = document.getElementById("about");
    about.style.opacity = 0;

    let teamM = document.getElementById("team");
    teamM.style.opacity = 100;
}