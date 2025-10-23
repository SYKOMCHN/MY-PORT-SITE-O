console.log ("project page loaded");

const projectTitle = document.createElement("div");
projectTitle.style.height = (window.innerHeight / 12) + "px";
projectTitle.style.width = (window.innerWidth / 1.115) + "px";
projectTitle.style.borderTopLeftRadius = "10px";
projectTitle.style.borderTopRightRadius = "10px";
projectTitle.textContent = "PROJECTS";
projectTitle.style.fontSize = (window.innerHeight / 14) + "px";
projectTitle.style.textAlign = "center";
projectTitle.style.backgroundColor = "rgb(243, 154, 53)";
pageBlock.appendChild(projectTitle);

const layer1 = document.createElement("div");
layer1.style.backgroundColor = "rgb(243, 240, 238)";
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
layer2.style.backgroundColor = "rgb(234, 229, 219)";
layer2.style.height = (window.innerHeight / 1.45) + "px";
layer2.style.width = (window.innerWidth / 1.45) + "px";
layer2.style.borderRadius = "10px";
layer2.style.margin = "auto";
layer2.style.border = "5px rgb(2, 48, 71) solid";
layer2.style.filter = "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5))";
layer1.appendChild(layer2);

const pj1 = document.createElement("a");
pj1.href = "https://sykomchn.github.io/BATTERGROUND/";
layer2.appendChild(pj1); 

const pj1img = document.createElement("img");
pj1img.src = "../img_files/start_screen.png";
pj1img.style.height = (window.innerHeight / 1.45) + "px";
pj1img.style.width = (window.innerWidth / 1.6) + "px";
pj1img.style.borderRadius = "10px";
pj1img.style.margin = "auto";
pj1img.style.display = "block";
pj1img.style.pointer = "cursor";
pj1.appendChild(pj1img);


function resizeHome(){
    projectTitle.style.height = (window.innerHeight / 12) + "px";
    projectTitle.style.width = (window.innerWidth / 1.115) + "px";
    projectTitle.style.fontSize = (window.innerHeight / 14) + "px";
    layer1.style.height = (window.innerHeight / 1.18) + "px";
    layer1.style.width = (window.innerWidth / 1.13) + "px";
    layer1.style.marginTop = (window.innerHeight / 60) + "px";
    layer2.style.height = (window.innerHeight / 1.45) + "px";
    layer2.style.width = (window.innerWidth / 1.45) + "px";
}

window.addEventListener("resize",resizeHome);