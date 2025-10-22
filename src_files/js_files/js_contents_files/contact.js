const contactTitle = document.createElement("div");
contactTitle.style.height = (window.innerHeight / 12) + "px";
contactTitle.style.width = (window.innerWidth / 1.115) + "px";
contactTitle.style.borderRadius = "10px";
contactTitle.textContent = "CONTACTS";
contactTitle.style.fontSize = (80) + "px";
contactTitle.style.textAlign = "center";
contactTitle.style.backgroundColor = "rgba(148, 179, 230, 1)";
pageBlock.appendChild(contactTitle);

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

function resizeContact(){
    contactTitle.style.height = (window.innerHeight / 12) + "px";
    contactTitle.style.width = (window.innerWidth / 1.115) + "px";
    layer1.style.height = (window.innerHeight / 1.18) + "px";
    layer1.style.width = (window.innerWidth / 1.13) + "px";
    layer1.style.marginTop = (window.innerHeight / 60) + "px";
}