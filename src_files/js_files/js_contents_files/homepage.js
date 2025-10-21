console.log ("homepage loaded");

const homeTitle = document.createElement("div");
homeTitle.style.height = (window.innerHeight / 12) + "px";
homeTitle.style.width = (window.innerWidth / 1.115) + "px";
homeTitle.style.borderRadius = "10px";
homeTitle.textContent = "HOME";
homeTitle.style.fontSize = (80) + "px";
homeTitle.style.textAlign = "center";
homeTitle.style.backgroundColor = "rgba(148, 179, 230, 1)";
pageBlock.appendChild(homeTitle);

const hp_content = document.createElement("div");
hp_content.style.margin = "10px";
hp_content.innerHTML = 
    "<h1> test </h1>";
pageBlock.appendChild(hp_content);

function resizeHome(){
    homeTitle.style.height = (window.innerHeight / 12) + "px";
    homeTitle.style.width = (window.innerWidth / 1.115) + "px";
}

window.addEventListener("resize",resizeHome);