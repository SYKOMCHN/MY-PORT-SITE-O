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
layer2.style.display = "flex";
layer2.style.border = "5px rgb(2, 48, 71) solid";
layer2.style.filter = "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5))";
layer1.appendChild(layer2);

const layer3 = document.createElement("div");
layer3.style.height = (window.innerHeight / 1.45) + "px";
layer3.style.width = (window.innerWidth / 1.) + "px";
layer3.style.borderRadius = "10px"
layer3.style.justifyContent = "center";
layer2.appendChild(layer3)

const layer3Content = document.createElement("div");
layer3.appendChild(layer3Content);

const textBlock = document.createElement("div");
textBlock.style.borderRadius = "10px";
textBlock.style.textAlign = "center";
textBlock.style.fontSize = (window.innerHeight / 60) + "px";
textBlock.style.margin = (window.innerHeight / 20 ) + "px";
textBlock.innerHTML = "<h1>HELLO VIEWER!" + "<br>" + "Welcome to my Portfolio Website!" + "<br>" + 
"To navigate through this site, please use the buttons on the tab to the left of the screen! I hope you enjoy!" ;
layer3Content.appendChild(textBlock);

const layer4 = document.createElement("div");
layer4.style.borderRadius = "10px";
layer4.style.width = (window.innerWidth / 4.5) + "px";
layer4.style.height = (window.innerHeight / 1.45) + "px";
layer4.style.float = "right";
layer4.style.alignContent = "center";
layer2.appendChild(layer4);

const layer4content = document.createElement("div");
layer4content.style.margin = "auto";
layer4content.style.borderRadius = "10px";
layer4content.style.alignContent = "center";
layer4.appendChild(layer4content);

const homeImg = document.createElement("img");
homeImg.src = "src_files/img_files/yeah.png";
homeImg.style.borderRadius = "10px"
homeImg.style.height = (window.innerHeight / 3) + "px";
homeImg.style.width = (window.innerWidth / 5.6) + "px";
layer4content.appendChild(homeImg);

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