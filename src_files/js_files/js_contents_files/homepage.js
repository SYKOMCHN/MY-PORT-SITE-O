console.log ("home page loaded");

const homeTitle = document.createElement("div");
homeTitle.style.height = (window.innerHeight / 12) + "px";
homeTitle.style.width = (window.innerWidth / 1.115) + "px";
homeTitle.style.borderTopLeftRadius = "10px";
homeTitle.style.borderTopRightRadius = "10px";
homeTitle.textContent = "HOME";
homeTitle.style.fontSize = (window.innerHeight / 14) + "px";
homeTitle.style.textAlign = "center";
homeTitle.style.backgroundColor = "rgb(243, 154, 53)";
pageBlock.appendChild(homeTitle);

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
layer1.appendChild(layer2);

function resizeHome(){
    homeTitle.style.height = (window.innerHeight / 12) + "px";
    homeTitle.style.width = (window.innerWidth / 1.115) + "px";
    homeTitle.style.fontSize = (window.innerHeight / 14) + "px";
    layer1.style.height = (window.innerHeight / 1.18) + "px";
    layer1.style.width = (window.innerWidth / 1.13) + "px";
    layer1.style.marginTop = (window.innerHeight / 60) + "px";
    layer2.style.height = (window.innerHeight / 1.45) + "px";
    layer2.style.width = (window.innerWidth / 1.45) + "px";
}

window.addEventListener("resize",resizeHome);