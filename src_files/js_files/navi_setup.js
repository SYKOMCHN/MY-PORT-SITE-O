console.log("navigations");

//containers and holders ------------------------------------------
const naviContainer = document.createElement("div");
naviContainer.style.backgroundColor = "rgb(243, 154, 53)";
naviContainer.style.height = (window.innerHeight / 1.019) + "px";
naviContainer.style.width = (window.innerWidth / 14) + "px";
naviContainer.style.margin = "10px"
naviContainer.style.display = "flex";
naviContainer.style.justifyContent = "center"; 
naviContainer.style.alignItems = "center";
pageContainer.appendChild(naviContainer);

const naviContent = document.createElement("div");
naviContent.style.backgroundColor = "rgb(255, 183, 3)";
naviContent.style.borderRadius = "10px";
naviContainer.style.margin = "10px"
naviContent.style.height = (window.innerHeight / 1.2) + "px";
naviContent.style.width = (window.innerWidth / 20) + "px";
naviContainer.appendChild(naviContent);

//buttons ----------------------------------------------------------
const homeButton = document.createElement("button");
        homeButton.innerText = "Home";
        homeButton.style.fontFamily = "'Courier New', 'Courier','monospace'";
        homeButton.style.fontWeight = "bold";
        homeButton.style.color = "rgb(2, 48, 71)";
        homeButton.style.marginTop = "20px";
        homeButton.style.border = "none";
        homeButton.style.height = (window.innerHeight / 20) + "px";
        homeButton.style.width = (window.innerWidth / 20) + "px";
        homeButton.style.cursor = "pointer";

    if(window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '/MY-PORT-SITE-O/' ) {
        homeButton.innerText = "Home";
        homeButton.style.fontFamily = "'Courier New', 'Courier','monospace'";
        homeButton.style.fontWeight = "bold";
         homeButton.style.color = "rgb(2, 48, 71)";
        homeButton.style.marginTop = "20px";
        homeButton.style.border = "none";
        homeButton.style.backgroundColor = "rgb(243, 154, 53)";
        homeButton.style.height = (window.innerHeight / 20) + "px";
        homeButton.style.width = (window.innerWidth / 20) + "px";
        homeButton.style.cursor = "pointer";
    }
    else {
        homeButton.addEventListener("mouseover", function() {
        homeButton.innerText = "Home";
        homeButton.style.marginTop = "20px";
        homeButton.style.fontFamily = "'Courier New', 'Courier','monospace'";
        homeButton.style.fontWeight = "bold";
        homeButton.style.color = "rgb(2, 48, 71)";
        homeButton.style.border = "none";
        homeButton.style.backgroundColor = "rgb(234, 229, 219)";
        homeButton.style.height = (window.innerHeight / 20) + "px";
        homeButton.style.width = (window.innerWidth / 20) + "px";
        homeButton.style.cursor = "pointer"});

        homeButton.addEventListener("mouseout", function() {
        homeButton.innerText = "Home";
        homeButton.style.fontFamily = "'Courier New', 'Courier','monospace'";
        homeButton.style.fontWeight = "bold";
        homeButton.style.color = "rgb(2, 48, 71)";
        homeButton.style.marginTop = "20px";
        homeButton.style.border = "none";
        homeButton.style.backgroundColor = "rgb(243, 240, 238";
        homeButton.style.height = (window.innerHeight / 20) + "px";
        homeButton.style.width = (window.innerWidth / 20) + "px";
        homeButton.style.cursor = "default"});

    }
    
    homeButton.addEventListener("click", function() {
        console.log("home clicked");
        window.location.href = "../../index.html";
    });
naviContent.appendChild(homeButton);

const projectButton = document.createElement("button");
projectButton.innerText = "Projects";
projectButton.style.fontFamily = "'Courier New', 'Courier','monospace'";
projectButton.style.fontWeight = "bold";
projectButton.style.color = "rgb(2, 48, 71)";
projectButton.style.border = "none";
projectButton.style.marginTop = "20px";
projectButton.style.height = (window.innerHeight / 20) + "px";
projectButton.style.width = (window.innerWidth / 20) + "px";

    if(window.location.href.indexOf("project.html" || "src_files/html_files/project.html") >-1){
        projectButton.innerText = "Projects";
        projectButton.style.marginTop = "20px";
        projectButton.style.fontFamily = "'Courier New', 'Courier','monospace'";
        projectButton.style.fontWeight = "bold";
        projectButton.style.color = "rgb(2, 48, 71)";
        projectButton.style.border = "none";
        projectButton.style.backgroundColor = "rgb(243, 154, 53)";
        projectButton.style.height = (window.innerHeight / 20) + "px";
        projectButton.style.width = (window.innerWidth / 20) + "px";
        projectButton.style.cursor = "pointer";
    }
    else {
        projectButton.addEventListener("mouseover", function() {
        projectButton.innerText = "Projects";
        projectButton.style.marginTop = "20px";
        projectButton.style.fontFamily = "'Courier New', 'Courier','monospace'";
        projectButton.style.fontWeight = "bold";
        projectButton.style.color = "rgb(2, 48, 71)";
        projectButton.style.border = "none";
        projectButton.style.backgroundColor = "rgb(234, 229, 219)";
        projectButton.style.height = (window.innerHeight / 20) + "px";
        projectButton.style.width = (window.innerWidth / 20) + "px";
        projectButton.style.cursor = "pointer"});

        projectButton.addEventListener("mouseout", function() {
        projectButton.innerText = "Projects";
        projectButton.style.marginTop = "20px";
        projectButton.style.fontFamily = "'Courier New', 'Courier','monospace'";
        projectButton.style.fontWeight = "bold";
        projectButton.style.color = "rgb(2, 48, 71)";
        projectButton.style.border = "none";
        projectButton.style.backgroundColor = "rgb(243, 240, 238)";
        projectButton.style.height = (window.innerHeight / 20) + "px";
        projectButton.style.width = (window.innerWidth / 20) + "px";
        projectButton.style.cursor = "default"});

    }
    
    projectButton.addEventListener("click", function() {
        console.log("project clicked");
       if(window.location.href.indexOf("src_files/html_files") > -1){
            window.location.href = "project.html";
       }
       else {
            window.location.href = "src_files/html_files/project.html";
       }
    });
naviContent.appendChild(projectButton);

const artworkButton = document.createElement("button");
artworkButton.innerText = "Artworks";
artworkButton.style.fontFamily = "'Courier New', 'Courier','monospace'";
artworkButton.style.fontWeight = "bold";
artworkButton.style.color = "rgb(2, 48, 71)";
artworkButton.style.border = "none";
artworkButton.style.marginTop = "20px";
artworkButton.style.height = (window.innerHeight / 20) + "px";
artworkButton.style.width = (window.innerWidth / 20) + "px";

    if(window.location.href.indexOf("artwork.html" || "src_files/html_files/artwork.html") > -1){
        artworkButton.innerText = "Artworks";
        artworkButton.style.fontFamily = "'Courier New', 'Courier','monospace'";
        artworkButton.style.fontWeight = "bold";
        artworkButton.style.color = "rgb(2, 48, 71)";
        artworkButton.style.marginTop = "20px";
        artworkButton.style.border = "none";
        artworkButton.style.backgroundColor = "rgb(243, 154, 53)";
        artworkButton.style.height = (window.innerHeight / 20) + "px";
        artworkButton.style.width = (window.innerWidth / 20) + "px";
        artworkButton.style.cursor = "pointer";
    }
    else {
        artworkButton.addEventListener("mouseover", function() {
        artworkButton.innerText = "Artworks";
        artworkButton.style.fontFamily = "'Courier New', 'Courier','monospace'";
        artworkButton.style.fontWeight = "bold";
        artworkButton.style.color = "rgb(2, 48, 71)";
        artworkButton.style.marginTop = "20px";
        artworkButton.style.border = "none";
        artworkButton.style.backgroundColor = "rgb(234, 229, 219)";
        artworkButton.style.height = (window.innerHeight / 20) + "px";
        artworkButton.style.width = (window.innerWidth / 20) + "px";
        artworkButton.style.cursor = "pointer"});

        artworkButton.addEventListener("mouseout", function() {
        artworkButton.innerText = "Artworks";
        artworkButton.style.fontFamily = "'Courier New', 'Courier','monospace'";
        artworkButton.style.fontWeight = "bold";
        artworkButton.style.color = "rgb(2, 48, 71)";
        artworkButton.style.marginTop = "20px";
        artworkButton.style.border = "none";
        artworkButton.style.backgroundColor = "rgb(243, 240, 238)";
        artworkButton.style.height = (window.innerHeight / 20) + "px";
        artworkButton.style.width = (window.innerWidth / 20) + "px";
        artworkButton.style.cursor = "default"});

    }
    
    artworkButton.addEventListener("click", function() {
        console.log("artwork clicked");
       if(window.location.href.indexOf("src_files/html_files") > -1){
            window.location.href = "artwork.html";
       }
       else {
            window.location.href = "src_files/html_files/artwork.html";
       }
    });
naviContent.appendChild(artworkButton);

const aboutButton = document.createElement("button");
aboutButton.innerText = "About Me";
aboutButton.style.fontFamily = "'Courier New', 'Courier','monospace'";
aboutButton.style.fontWeight = "bold";
aboutButton.style.color = "rgb(2, 48, 71)";
aboutButton.style.border = "none";
aboutButton.style.marginTop = "20px";
aboutButton.style.height = (window.innerHeight / 20) + "px";
aboutButton.style.width = (window.innerWidth / 20) + "px";

    if(window.location.href.indexOf("about.html" || "src_files/html_files/about.html") >-1){
        aboutButton.innerText = "About Me";
        aboutButton.style.fontFamily = "'Courier New', 'Courier','monospace'";
        aboutButton.style.fontWeight = "bold";
        aboutButton.style.color = "rgb(2, 48, 71)";
        aboutButton.style.marginTop = "20px";
        aboutButton.style.border = "none";
        aboutButton.style.backgroundColor = "rgb(243, 154, 53)";
        aboutButton.style.height = (window.innerHeight / 20) + "px";
        aboutButton.style.width = (window.innerWidth / 20) + "px";
        aboutButton.style.cursor = "pointer";
    }
    else {
        aboutButton.addEventListener("mouseover", function() {
        aboutButton.innerText = "About Me";
        aboutButton.style.fontFamily = "'Courier New', 'Courier','monospace'";
        aboutButton.style.fontWeight = "bold";
        aboutButton.style.color = "rgb(2, 48, 71)";
        aboutButton.style.marginTop = "20px";
        aboutButton.style.border = "none";
        aboutButton.style.backgroundColor = "rgb(234, 229, 219)";
        aboutButton.style.height = (window.innerHeight / 20) + "px";
        aboutButton.style.width = (window.innerWidth / 20) + "px";
        aboutButton.style.cursor = "pointer"});

        aboutButton.addEventListener("mouseout", function() {
        aboutButton.innerText = "About Me";
        aboutButton.style.fontFamily = "'Courier New', 'Courier','monospace'";
        aboutButton.style.fontWeight = "bold";
        aboutButton.style.color = "rgb(2, 48, 71)";
        aboutButton.style.marginTop = "20px";
        aboutButton.style.border = "none";
        aboutButton.style.backgroundColor = "rgb(243, 240, 238)";
        aboutButton.style.height = (window.innerHeight / 20) + "px";
        aboutButton.style.width = (window.innerWidth / 20) + "px";
        aboutButton.style.cursor = "default"});

    }
    
    aboutButton.addEventListener("click", function() {
       if(window.location.href.indexOf("src_files/html_files") > -1){
            window.location.href = "about.html";
       }
       else {
            window.location.href = "src_files/html_files/about.html";
       }
    });

naviContent.appendChild(aboutButton);

const contactButton = document.createElement("button");
contactButton.innerText = "Contact";
contactButton.style.fontFamily = "'Courier New', 'Courier','monospace'";
contactButton.style.fontWeight = "bold";
contactButton.style.color = "rgb(2, 48, 71)";
contactButton.style.border = "none";
contactButton.style.marginTop = "20px";
contactButton.style.height = (window.innerHeight / 20) + "px";
contactButton.style.width = (window.innerWidth / 20) + "px";

   if(window.location.href.indexOf("contact.html" || "src_files/html_files/contact.html") >-1){
        contactButton.innerText = "Contact";
        contactButton.style.fontFamily = "'Courier New', 'Courier','monospace'";
        contactButton.style.fontWeight = "bold";
        contactButton.style.color = "rgb(2, 48, 71)";
        contactButton.style.marginTop = "20px";
        contactButton.style.border = "none";
        contactButton.style.backgroundColor = "rgb(243, 154, 53)";
        contactButton.style.height = (window.innerHeight / 20) + "px";
        contactButton.style.width = (window.innerWidth / 20) + "px";
        contactButton.style.cursor = "pointer";
    }
    else {
        contactButton.addEventListener("mouseover", function() {
        contactButton.innerText = "Contact";
        contactButton.style.fontFamily = "'Courier New', 'Courier','monospace'";
        contactButton.style.fontWeight = "bold";
        contactButton.style.marginTop = "20px";
        contactButton.style.color = "rgb(2, 48, 71)";
        contactButton.style.border = "none";
        contactButton.style.backgroundColor = "rgb(234, 229, 219)";
        contactButton.style.height = (window.innerHeight / 20) + "px";
        contactButton.style.width = (window.innerWidth / 20) + "px";
        contactButton.style.cursor = "pointer"});

        contactButton.addEventListener("mouseout", function() {
        contactButton.innerText = "Contact";
        contactButton.style.fontFamily = "'Courier New', 'Courier','monospace'";
        contactButton.style.fontWeight = "bold";
        contactButton.style.marginTop = "20px";
        contactButton.style.color = "rgb(2, 48, 71)";
        contactButton.style.border = "none";
        contactButton.style.backgroundColor = "rgba(226, 231, 241, 1)";
        contactButton.style.height = (window.innerHeight / 20) + "px";
        contactButton.style.width = (window.innerWidth / 20) + "px";
        contactButton.style.cursor = "default"});

    }
    
    contactButton.addEventListener("click", function() {
       if(window.location.href.indexOf("src_files/html_files") > -1){
            window.location.href = "contact.html";
       }
       else {
            window.location.href = "src_files/html_files/contact.html";
       }
    });
naviContent.appendChild(contactButton);

function resizeNavi() {
    naviContainer.style.height =  (window.innerHeight / 1.019) + "px";
    naviContainer.style.width = (window.innerWidth / 14) + "px";
    naviContent.style.height = (window.innerHeight / 1.2) + "px";
    naviContent.style.width = (window.innerWidth / 20) + "px";
    homeButton.style.height = (window.innerHeight / 20) + "px";
    homeButton.style.width = (window.innerWidth / 20) + "px";
    projectButton.style.height = (window.innerHeight / 20) + "px";
    projectButton.style.width = (window.innerWidth / 20) + "px";
    artworkButton.style.height = (window.innerHeight / 20) + "px";
    artworkButton.style.width = (window.innerWidth / 20) + "px";
    aboutButton.style.height = (window.innerHeight / 20) + "px";
    aboutButton.style.width = (window.innerWidth / 20) + "px";
    contactButton.style.height = (window.innerHeight / 20) + "px";
    contactButton.style.width = (window.innerWidth / 20) + "px";
}

window.addEventListener("resize", resizeNavi);