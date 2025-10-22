const contactTitle = document.createElement("div");
contactTitle.style.height = (window.innerHeight / 12) + "px";
contactTitle.style.width = (window.innerWidth / 1.115) + "px";
contactTitle.style.borderTopLeftRadius = "10px";
contactTitle.style.borderTopRightRadius = "10px";
contactTitle.textContent = "CONTACTS";
contactTitle.style.fontSize = (window.innerHeight / 14) + "px";
contactTitle.style.textAlign = "center";
contactTitle.style.backgroundColor = "rgb(243, 154, 53)";
pageBlock.appendChild(contactTitle);

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
layer2.style.filter = "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5))";
layer1.appendChild(layer2);

const layer3 = document.createElement("div");
layer3.style.height = (window.innerHeight / 1.449) + "px";
layer3.style.width = (window.innerWidth / 2.9) + "px";
layer3.style.borderRadius = "10px";
layer3.style.float = "left";
layer3.style.alignContent = 'center';
layer2.appendChild(layer3);

const layer4 = document.createElement("div");
layer4.style.height = (window.innerHeight / 1.449) + "px";
layer4.style.width = (window.innerWidth / 2.9) + "px";
layer4.style.borderRadius = "10px";
layer4.float = "right";
layer4.style.alignContent = 'center';
layer2.appendChild(layer4);

function resizeContact(){
    contactTitle.style.height = (window.innerHeight / 12) + "px";
    contactTitle.style.width = (window.innerWidth / 1.115) + "px";
    contactTitle.style.fontSize = (window.innerHeight / 14) + "px";
    layer1.style.height = (window.innerHeight / 1.18) + "px";
    layer1.style.width = (window.innerWidth / 1.13) + "px";
    layer1.style.marginTop = (window.innerHeight / 60) + "px";
    layer2.style.height = (window.innerHeight / 1.45) + "px";
    layer2.style.width = (window.innerWidth / 1.45) + "px";
    layer3.style.height = (window.innerHeight / 1.449) + "px";
    layer3.style.width = (window.innerWidth / 2.9) + "px";
    layer4.style.height = (window.innerHeight / 1.449) + "px";
    layer4.style.width = (window.innerWidth / 2.9) + "px";
}