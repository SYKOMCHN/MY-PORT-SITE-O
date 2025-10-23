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
layer2.style.border = "5px rgb(2, 48, 71) solid";
layer2.style.filter = "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5))";
layer1.appendChild(layer2);

const layer3 = document.createElement("div");
layer3.style.height = (window.innerHeight / 1.449) + "px";
layer3.style.width = (window.innerWidth / 2.9) + "px";
layer3.style.borderRadius = "10px";
layer3.style.float = "left";
layer3.style.alignContent = 'center';
layer2.appendChild(layer3);

const layer3Content = document.createElement("div");
layer3.appendChild(layer3Content);

const emailTitle = document.createElement("div"); 
emailTitle.style.textAlign = "center";
emailTitle.style.borderRadius = "10px";
emailTitle.style.marginTop = (window.innerHeight / 60) + "px";
emailTitle.style.display = "flex";
emailTitle.style.width = (window.innerWidth / 2.9) + "px";
emailTitle.style.height = (window.innerHeight / 36) + "px";
emailTitle.style.justifyContent = "center";
emailTitle.textContent = "Send Me an Email!";
layer3Content.appendChild(emailTitle);

const InputContainer = document.createElement("div");
InputContainer.style.borderRadius = "10px";
InputContainer.style.backgroundColor = "red";
InputContainer.style.width = (window.innerWidth / 2.9) + "px";
InputContainer.style.height = (window.innerHeight / 1.55) + "px";
layer3Content.appendChild(InputContainer);

const layer4 = document.createElement("div");
layer4.style.height = (window.innerHeight / 1.449) + "px";
layer4.style.width = (window.innerWidth / 2.9) + "px";
layer4.style.borderRadius = "10px";
layer4.float = "right";
layer4.style.alignContent = 'center';
layer2.appendChild(layer4);

const layer4Content = document.createElement("div");
layer4.appendChild(layer4Content);

const socTitle = document.createElement("div"); 
socTitle.style.textAlign = "center";
socTitle.style.borderRadius = "10px";
socTitle.style.marginTop = (window.innerHeight / 60) + "px";
socTitle.style.display = "flex";
socTitle.style.width = (window.innerWidth / 2.9) + "px";
socTitle.style.height = (window.innerHeight / 36) + "px";
socTitle.style.justifyContent = "center";
socTitle.textContent = "Other Social Medias";
layer4Content.appendChild(socTitle);

const selectContainer = document.createElement("div");
selectContainer.style.borderRadius = "10px";
selectContainer.style.backgroundColor = "red";
selectContainer.style.width = (window.innerWidth / 2.9) + "px";
selectContainer.style.height = (window.innerHeight / 1.55) + "px";
layer4Content.appendChild(selectContainer);

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