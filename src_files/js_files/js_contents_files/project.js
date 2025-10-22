console.log ("project page loaded");

const projectTitle = document.createElement("div");
projectTitle.style.height = (window.innerHeight / 12) + "px";
projectTitle.style.width = (window.innerWidth / 1.115) + "px";
projectTitle.style.borderRadius = "10px";
projectTitle.textContent = "PROJECTS";
projectTitle.style.fontSize = (80) + "px";
projectTitle.style.textAlign = "center";
projectTitle.style.backgroundColor = "rgba(148, 179, 230, 1)";
pageBlock.appendChild(projectTitle);

const layer1 = document.createElement("div");
layer1.style.backgroundColor = "rgba(200, 200, 200, 0.5)";
layer1.style.height = (window.innerHeight / 1.18) + "px";
layer1.style.width = (window.innerWidth / 1.13) + "px";
layer1.style.borderRadius = "10px";
layer1.style.margin = "auto";
layer1.style.marginTop = (window.innerHeight / 60) + "px";
layer1.style.display = "flex";
layer1.style.justifyContent = "center";
layer1.style.alignItems = "center";
pageBlock.appendChild(layer1);

const layer2 = document.createElement("div");
layer2.style.backgroundColor = "rgba(192, 165, 165, 0.5)";
layer2.style.height = (window.innerHeight / 1.45) + "px";
layer2.style.width = (window.innerWidth / 1.45) + "px";
layer2.style.borderRadius = "10px";
layer2.style.margin = "auto";
layer1.appendChild(layer2);

function resizeHome(){
    projectTitle.style.height = (window.innerHeight / 12) + "px";
    projectTitle.style.width = (window.innerWidth / 1.115) + "px";
    layer1.style.height = (window.innerHeight / 1.18) + "px";
    layer1.style.width = (window.innerWidth / 1.13) + "px";
    layer1.style.marginTop = (window.innerHeight / 60) + "px";
    layer2.style.height = (window.innerHeight / 1.45) + "px";
    layer2.style.width = (window.innerWidth / 1.45) + "px";
}

window.addEventListener("resize",resizeHome);