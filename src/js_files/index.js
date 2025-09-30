

//let pageWidth = window.innerWidth;
//let pageHeight = window.innerWidth;

const container = document.getElementById("container");
window.container = container;

const pageContainer = document.createElement("div");
window.pageContainer = pageContainer; 
pageContainer.style.backgroundColor = "rgb(37, 53, 73)";
pageContainer.style.borderRadius = "10px";
pageContainer.style.height = (window.innerHeight - 18) + "px";
//pageContainer.style.display = "flex";
window.container.appendChild(pageContainer);


const page = document.createElement("div"); 
window.page = page;
page.style.backgroundColor = "rgb(252, 250, 244)";
page.style.borderRadius = "10px";
page.style.align = "right";
page.style.width = (window.innerWidth - 145) + "px ";
page.style.height = (window.innerHeight - 47) + "px";
page.style.marginTop = "14px";
page.style.overflow = "hidden";
page.style.float = "right";
window.pageContainer.appendChild(page);

/* mess around a bit
function resizePage() {
    pageWidth = window.innerWidth;
    pageHeight = window.innerHeight;
    pageContainer.style.height = (pageHeight - 18) + "px";
    page.style.width = (pageWidth - 145) + "px ";
    page.style.height = (pageHeight - 47) + "px";
    navigationTab.style.width = ((pageWidth / pageWidth) * 120 + "px");
    navigationTab.style.height = (pageHeight - 118) + "px";
    naviContainer.style.width = ((pageWidth / pageWidth) * 90 + "px");
    naviContainer.style.height = (pageHeight - 144) + "px";
}

window.addEventListener('resize', resizePage);
*/


