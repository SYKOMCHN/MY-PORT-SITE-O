console.log("nav_tab loaded");
//navigation tab setup ------------------------------------------------
const navigationTab = document.createElement("div");
window.navigationTab = navigationTab;
navigationTab.style.paddingTop = "50px";
navigationTab.style.paddingBottom = "50px";
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
        homePage.style.backgroundColor = "rgba(241, 76, 34, 1)";
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
    window.location.href = "../../index.html";
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

if(window.location.href.indexOf("src/pages/projects_page.html" || "projects_page.html") > -1) {
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
      if (window.location.href.indexOf("src/pages") > -1){
        window.location.href = "projects_page.html";
    }
    else{
        window.location.href = "src/pages/projects_page.html";
    }
});

window.naviContainer.appendChild(projectPage);

//artwork page button setup ---------------------------------------

const artworkPage = document.createElement("button");  
window.artworkPage = artworkPage;
artworkPage.textContent = "Artworks";
artworkPage.style.backgroundColor = "rgba(149, 177, 209, 1)";
artworkPage.style.border = "none";
artworkPage.style.padding ="20px 10px";
artworkPage.style.float = "right";

if(window.location.href.indexOf("src/pages/artworks_page.html" || "artworks_page.html") > -1) {
    console.log("on artwork page");
    artworkPage.style.cursor = "pointer";
    artworkPage.style.backgroundColor = "rgb(252, 250, 244)";
    artworkPage.style.border = "none";
    artworkPage.style.padding ="20px 30px";
    artworkPage.style.float = "right";
    artworkPage.style.marginRight = "-40px";
}
else{
    console.log("not on artwork page");
    artworkPage.addEventListener('mouseover', function() {
        artworkPage.textContent = "Artworks";
        artworkPage.style.display = "flex";
        artworkPage.style.backgroundColor = "rgba(241, 76, 34, 1)";
        artworkPage.style.border = "none";
        artworkPage.style.padding ="20px 30px";
        artworkPage.style.float = "right";
        artworkPage.style.marginRight = "-20px";
    });

    artworkPage.addEventListener('mouseout', function() {
       artworkPage.style.cursor = "pointer";
       artworkPage.textContent = "Artworks";
       artworkPage.style.backgroundColor = "rgba(149, 177, 209, 1)";
       artworkPage.style.border = "none";
       artworkPage.style.padding ="20px 10px";
       artworkPage.style.float = "right";
       artworkPage.style.marginRight = "0px";
    });
}

artworkPage.addEventListener('click', function() {
    if (window.location.href.indexOf("src/pages") > -1){
        window.location.href = "artworks_page.html";
    }
    else{
        window.location.href = "src/pages/artworks_page.html";
    }
});

window.naviContainer.appendChild(artworkPage);

const aboutPage = document.createElement("button");   
window.aboutPage = aboutPage;
aboutPage.textContent = "About";
aboutPage.style.backgroundColor = "rgba(149, 177, 209, 1)";
aboutPage.style.border = "none";
aboutPage.style.padding ="20px 10px";
aboutPage.style.float = "right";

if(window.location.href.indexOf("src/pages/aboutme_page.html" || "aboutme_page.html") > -1) {
    console.log("on about me page");
    aboutPage.style.cursor = "pointer";
    aboutPage.style.backgroundColor = "rgb(252, 250, 244)";
    aboutPage.style.border = "none";
    aboutPage.style.padding ="20px 30px";
    aboutPage.style.float = "right";
    aboutPage.style.marginRight = "-40px";
}
else{
    console.log("not on artwork page");
    aboutPage.addEventListener('mouseover', function() {
        aboutPage.textContent = "About";
        aboutPage.style.display = "flex";
        aboutPage.style.backgroundColor = "rgba(241, 76, 34, 1)";
        aboutPage.style.border = "none";
        aboutPage.style.padding ="20px 30px";
        aboutPage.style.float = "right";
        aboutPage.style.marginRight = "-20px";
    });

    aboutPage.addEventListener('mouseout', function() {
       aboutPage.style.cursor = "pointer";
       aboutPage.textContent = "About";
       aboutPage.style.backgroundColor = "rgba(149, 177, 209, 1)";
       aboutPage.style.border = "none";
       aboutPage.style.padding ="20px 10px";
       aboutPage.style.float = "right";
       aboutPage.style.marginRight = "0px";
    });
}

aboutPage.addEventListener('click', function() {
    if (window.location.href.indexOf("src/pages") > -1){
        window.location.href = "aboutme_page.html";
    }
    else{
        window.location.href = "src/pages/aboutme_page.html";
    }
});

window.naviContainer.appendChild(aboutPage);
/*
const contactPage = document.createElement("button");   
window.contactPage = contactPage;
contactPage.textContent = "Contact";
contactPage.style.backgroundColor = "rgba(149, 177, 209, 1)";
contactPage.style.border = "none";
contactPage.style.padding ="20px 10px";
contactPage.style.float = "right";

if(window.location.href.indexOf("src/pages/contact_page.html" || "contact_page.html") > -1) {
    console.log("on contact page");
    contactPage.style.cursor = "pointer";
    contactPage.style.backgroundColor = "rgb(252, 250, 244)";
    contactPage.style.border = "none";
    contactPage.style.padding ="20px 30px";
    contactPage.style.float = "right";
    aboutPage.style.marginRight = "-40px";
}
else{
    console.log("not on contact page");
    contactPage.addEventListener('mouseover', function() {
        contactPage.textContent = "Contact";
        contactPage.style.display = "flex";
        contactPage.style.backgroundColor = "rgba(241, 76, 34, 1)";
        contactPage.style.border = "none";
        contactPage.style.padding ="20px 30px";
        contactPage.style.float = "right";
        contactPage.style.marginRight = "-20px";
    });

    contactPage.addEventListener('mouseout', function() {
       aboutPage.style.cursor = "pointer";
       aboutPage.textContent = "Contact";
       aboutPage.style.backgroundColor = "rgba(149, 177, 209, 1)";
       aboutPage.style.border = "none";
       aboutPage.style.padding ="20px 10px";
       aboutPage.style.float = "right";
       aboutPage.style.marginRight = "0px";
    });
}

contactPage.addEventListener('click', function() {
    if (window.location.href.indexOf("src/pages") > -1){
        window.location.href = "contact_page.html";
    }
    else{
        window.location.href = "src/pages/contact_page.html";
    }
});

window.naviContainer.appendChild(contactPage);

/*
const shortcutPage = document.createElement("button");   
shortcutPage.textContent = "Shortcuts";
navigationTab.appendChild(shortcutPage);    
*/

//
//let PJICO = document.createElementID("img");
//let AWICO = document.createElementID("img");
//let ABICO = document.createElementID("img");


window.pageContainer.appendChild(navigationTab);

//probably could have made a class for this :/

function resizeNavi() {
    navigationTab.style.height = (pageHeight - 118) + "px";
    navigationTab.style.width = ((pageWidth / pageWidth) * 120 + "px");
    naviContainer.style.height = (pageHeight - 144) + "px";
    naviContainer.style.width = ((pageWidth / pageWidth) * 90 + "px");
}
window.addEventListener('resize', resizeNavi);