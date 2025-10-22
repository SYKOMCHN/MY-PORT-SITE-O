const artworkTitle = document.createElement("div");
artworkTitle.style.height = (window.innerHeight / 12) + "px";
artworkTitle.style.width = (window.innerWidth / 1.115) + "px";
artworkTitle.style.borderRadius = "10px";
artworkTitle.textContent = "ARTWORKS";
artworkTitle.style.fontSize = (80) + "px";
artworkTitle.style.textAlign = "center";
artworkTitle.style.backgroundColor = "rgba(148, 179, 230, 1)";
pageBlock.appendChild(artworkTitle);

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

function resizeArtwork(){
    artworkTitle.style.height = (window.innerHeight / 12) + "px";
    artworkTitle.style.width = (window.innerWidth / 1.115) + "px";
    layer1.style.height = (window.innerHeight / 1.18) + "px";
    layer1.style.width = (window.innerWidth / 1.13) + "px";
    layer1.style.marginTop = (window.innerHeight / 60) + "px";
}