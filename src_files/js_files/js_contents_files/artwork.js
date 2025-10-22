const artworkTitle = document.createElement("div");
artworkTitle.style.height = (window.innerHeight / 12) + "px";
artworkTitle.style.width = (window.innerWidth / 1.115) + "px";
artworkTitle.style.borderRadius = "10px";
artworkTitle.textContent = "ARTWORKS";
artworkTitle.style.fontSize = (window.innerHeight / 14) + "px";
artworkTitle.style.textAlign = "center";
artworkTitle.style.backgroundColor = "rgb(243, 154, 53)";
pageBlock.appendChild(artworkTitle);

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
/*
const layer3 = document.createElement("div");
layer3.style.backgroundColor = "rgb(234, 229, 219)";
layer3.style.height = (window.innerHeight / 1.45) + "px";
layer3.style.width = (window.innerWidth / 1.45) + "px";
layer3.style.borderRadius = "10px";
layer3.style.margin = "auto";
layer3.style.filter = "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5))";
layer1.appendChild(layer3);

const layer4 = document.createElement("div");
layer4.style.backgroundColor = "rgb(234, 229, 219)";
layer4.style.height = (window.innerHeight / 1.45) + "px";
layer4.style.width = (window.innerWidth / 1.45) + "px";
layer4.style.borderRadius = "10px";
layer4.style.margin = "auto";
layer4.style.filter = "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5))";
layer1.appendChild(layer4);
*/
function resizeArtwork(){
    artworkTitle.style.height = (window.innerHeight / 12) + "px";
    artworkTitle.style.width = (window.innerWidth / 1.115) + "px";
    artworkTitle.style.fontSize = (window.innerHeight / 14) + "px";
    layer1.style.height = (window.innerHeight / 1.18) + "px";
    layer1.style.width = (window.innerWidth / 1.13) + "px";
    layer1.style.marginTop = (window.innerHeight / 60) + "px";
    layer2.style.height = (window.innerHeight / 1.45) + "px";
    layer2.style.width = (window.innerWidth / 1.45) + "px";
}