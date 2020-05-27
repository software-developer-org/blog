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
    ];

    // Create a ol element
    var ol = document.createElement('ol');

    //Append it to the navbar
    document.getElementsByClassName('navbar');
    document.body.appendChild(ol);

    for (var i = 0; i < blogs.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = blogs[i];
        ol.appendChild(li);
    }
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