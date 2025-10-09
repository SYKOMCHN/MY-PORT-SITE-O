console.log("home page contents creating...");
//homepage------------------------------------------------------- 
const homePageCont = document.createElement("div");
//window.homePageCont = homePageCont;
homePageCont.style.backgroundColor = 'black'; //remove later
homePageCont.style.margin = "10px";
homePageCont.style.borderRadius = "10px";
homePageCont.style.width = (innerWidth / 1.096) + "px";
homePageCont.style.height = (innerHeight / 1.08) + "px";
homePageCont.style.border = "none";
page.appendChild(homePageCont);
//homepage-contents-----------------------------------------------

function resizeHomePage() {
    homePageCont.style.height = (innerHeight / 1.08) + "px";
    homePageCont.style.width =  (innerWidth / 1.096) + "px";
}
window.addEventListener('resize', resizeHomePage);