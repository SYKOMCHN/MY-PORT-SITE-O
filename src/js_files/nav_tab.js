//navigation tab setup ------------------------------------------
const navigationTab = document.createElement("div");
window.navigationTab = navigationTab;
navigationTab.style.paddingTop= "50px";
navigationTab.style.paddingBottom= "50px";
navigationTab.style.backgroundColor = "rgba(195, 206, 219, 1)";
navigationTab.style.borderRadius = "10px";
navigationTab.style.width = ( 120 + "px");
navigationTab.style.height = (window.innerHeight - 118) + "px";
//navigation container setup ---------------------------------------
const naviContainer = document.createElement("div");
window.naviContainer = naviContainer;
naviContainer.style.backgroundColor = "rgb(45, 77, 114)";
naviContainer.style.width = ( 90 + "px");
naviContainer.style.height = (window.innerHeight - 144) + "px";
navigationTab.appendChild(naviContainer);
//home page button setup -------------------------------------------
const homePage = document.createElement("button");
window.homePage = homePage;
homePage.textContent = "Home";
homePage.style.backgroundColor = "rgba(149, 177, 209, 1)";
homePage.style.border = "none";
homePage.style.padding ="20px 10px";
homePage.style.float = "right";

if (window.location.href.indexOf("index.html") > -1) {
    console.log("on home page");
    homePage.style.cursor = "pointer";
    homePage.style.backgroundColor = "rgb(252, 250, 244)";
    homePage.style.border = "none";
    homePage.style.padding ="20px 30px";
    homePage.style.float = "right";
    homePage.style.marginRight = "-40px";
}
else{
    console.log("not on home page");
    homePage.addEventListener('mouseover', function() {
        homePage.textContent = "Home";
        homePage.style.display = "flex";
        homePage.style.backgroundColor = "rgba(163, 177, 82, 1)";
        homePage.style.border = "none";
        homePage.style.padding ="20px 30px";
        homePage.style.float = "right";
        homePage.style.marginRight = "-20px";
    });

    homePage.addEventListener('mouseout', function() {
        homePage.style.cursor = "pointer";
        homePage.textContent = "Home";
        homePage.style.backgroundColor = "rgba(149, 177, 209, 1)";
        homePage.style.border = "none";
        homePage.style.padding ="20px 10px";
        homePage.style.float = "right";
        homePage.style.marginRight = "0px";
    });
}

homePage.addEventListener('click', function() {
    window.location.href = "index.html";
});

window.naviContainer.appendChild(homePage);

//project page button setup ----------------------------------------
const projectPage = document.createElement("button");   
window.projectPage = projectPage;
projectPage.textContent = "Projects";
projectPage.style.backgroundColor = "rgba(149, 177, 209, 1)";
projectPage.style.border = "none";
projectPage.style.padding ="20px 10px";
projectPage.style.float = "right";

if(window.location.href.indexOf("src/pages/authors_projects_page.html") > -1) {
    console.log("on project page");
    projectPage.style.cursor = "pointer";
    projectPage.style.backgroundColor = "rgb(252, 250, 244)";
    projectPage.style.border = "none";
    projectPage.style.padding ="20px 30px";
    projectPage.style.float = "right";
    projectPage.style.marginRight = "-40px";
}
else{
    console.log("not on project page");
    projectPage.addEventListener('mouseover', function() {
        projectPage.textContent = "Projects";
        projectPage.style.display = "flex";
        projectPage.style.backgroundColor = "rgba(241, 76, 34, 1)";
        projectPage.style.border = "none";
        projectPage.style.padding ="20px 30px";
        projectPage.style.float = "right";
        projectPage.style.marginRight = "-20px";
    });

    projectPage.addEventListener('mouseout', function() {
        projectPage.style.cursor = "pointer";
        projectPage.textContent = "Projects";
        projectPage.style.backgroundColor = "rgba(149, 177, 209, 1)";
        projectPage.style.border = "none";
        projectPage.style.padding ="20px 10px";
        projectPage.style.float = "right";
        projectPage.style.marginRight = "0px";
    });
}

projectPage.addEventListener('click', function() {
    window.location.href = "src/pages/authors_projects_page.html";
});

window.naviContainer.appendChild(projectPage);
//artwork page button setup ---------------------------------------
/*
const artworkPage = document.createElement("button");   
artworkPage.textContent = "Artworks";
navigationTab.appendChild(artworkPage);

const aboutPage = document.createElement("button");   
aboutPage.textContent = "About Me";
navigationTab.appendChild(aboutPage);

const contactPage = document.createElement("button");   
contactPage.textContent = "Contact";
navigationTab.appendChild(contactPage);

const shortcutPage = document.createElement("button");   
shortcutPage.textContent = "Shortcuts";
navigationTab.appendChild(shortcutPage);    
*/

window.pageContainer.appendChild(navigationTab);

//probably could have made a class for this :/