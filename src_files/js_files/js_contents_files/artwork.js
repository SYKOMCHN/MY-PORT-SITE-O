const artworkTitle = document.createElement("div");
artworkTitle.style.height = (window.innerHeight / 12) + "px";
artworkTitle.style.width = (window.innerWidth / 1.115) + "px";
artworkTitle.style.borderTopLeftRadius = "10px";
artworkTitle.style.borderTopRightRadius = "10px";
artworkTitle.textContent = "ARTWORKS";
artworkTitle.style.fontSize = (window.innerHeight / 14) + "px";
artworkTitle.style.textAlign = "center";
artworkTitle.style.backgroundColor = "rgb(243, 154, 53)";
pageBlock.appendChild(artworkTitle);

const layer1 = document.createElement("div");
layer1.style.backgroundColor = "rgb(243, 240, 238)";
layer1.style.height = (window.innerHeight / 1.227) + "px";
layer1.style.width = (window.innerWidth / 1.151) + "px";
layer1.style.borderRadius = "10px";
layer1.style.margin = "auto";
layer1.style.marginTop = (window.innerHeight / 60) + "px";
layer1.style.padding = (window.innerHeight / 60) + "px";
layer1.style.justifyContent = "center";
layer1.style.alignItems = "center";
pageBlock.appendChild(layer1);
//top row----------------------------------------------------------------------------------------
const layer2 = document.createElement("div");
layer2.style.height = (window.innerHeight / 2.5) + "px";
layer2.style.width = (window.innerWidth / 1.15) + "px";
layer2.style.borderRadius = "10px";
layer2.style.margin = "auto";
layer2.style.display = "flex";
layer2.style.justifyContent = "space-around";
layer1.appendChild(layer2);

const img1Container = document.createElement("div");
img1Container.style.marginTop = (window.innerHeight / 20) + "px";
layer2.appendChild(img1Container);
const img2Container = document.createElement("div");
img2Container.style.marginTop = (window.innerHeight / 20) + "px";
layer2.appendChild(img2Container);
const img3Container = document.createElement("div");
img3Container.style.marginTop = (window.innerHeight / 20) + "px";
layer2.appendChild(img3Container);

const img1 = document.createElement("img");
img1.src = "../img_files/snap_files/3.jpg";
img1.style.height = (window.innerHeight / 3.5) + "px";
img1.style.width = (window.innerWidth / 4) + "px";
img1.style.borderRadius = "10px";
img1.style.border = "5px rgb(2, 48, 71) solid";
img1.style.filter = "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5))";
img1Container.appendChild(img1);

const img2 = document.createElement("img");
img2.src = "../img_files/snap_files/7.jpg";
img2.style.height = (window.innerHeight / 3.5) + "px";
img2.style.width = (window.innerWidth / 4) + "px";
img2.style.borderRadius = "10px";
img2.style.border = "5px rgb(2, 48, 71) solid";
img2.style.filter = "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5))";
img2Container.appendChild(img2);

const img3 = document.createElement("img");
img3.src = "../img_files/snap_files/fettywap.jpg";
img3.style.height = (window.innerHeight / 3.5) + "px";
img3.style.width = (window.innerWidth / 4.5) + "px";
img3.style.borderRadius = "10px";
img3.style.border = "5px rgb(2, 48, 71) solid";
img3.style.filter = "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5))";
img3Container.appendChild(img3);
//bottom row----------------------------------------------------------------------------------------
const layer3 = document.createElement("div");
layer3.style.height = (window.innerHeight / 2.5) + "px";
layer3.style.width = (window.innerWidth / 1.15) + "px";
layer3.style.borderRadius = "10px";
layer3.style.margin = "auto";
layer3.style.display = "flex";
layer3.style.justifyContent = "center";
layer3.style.gap = (window.innerWidth / 23) + "px";
layer1.appendChild(layer3);

const img4Container = document.createElement("div");
img4Container.style.marginTop = (window.innerHeight / 20) + "px";
layer3.appendChild(img4Container);
const img5Container = document.createElement("div");
img5Container.style.marginTop = (window.innerHeight / 20) + "px";
layer3.appendChild(img5Container);

const img4 = document.createElement("img");
img4.src = "../img_files/snap_files/8.jpg";
img4.style.height = (window.innerHeight / 3.5) + "px";
img4.style.width = (window.innerWidth / 4.3) + "px";
img4.style.borderRadius = "10px";
img4.style.border = "5px rgb(2, 48, 71) solid";
img4.style.filter = "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5))";
img4Container.appendChild(img4);

const img5 = document.createElement("img");
img5.src = "../img_files/snap_files/1.jpg";
img5.style.height = (window.innerHeight / 3.5) + "px";
img5.style.width = (window.innerWidth / 4.33) + "px";
img5.style.borderRadius = "10px";
img5.style.border = "5px rgb(2, 48, 71) solid";
img5.style.filter = "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5))";
img5Container.appendChild(img5);



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