const aboutTitle = document.createElement("div");
aboutTitle.style.height = (window.innerHeight / 12) + "px";
aboutTitle.style.width = (window.innerWidth / 1.115) + "px";
aboutTitle.style.borderTopLeftRadius = "10px";
aboutTitle.style.borderTopRightRadius = "10px";
aboutTitle.textContent = "ABOUT ME";
aboutTitle.style.fontSize = (window.innerHeight / 14) + "px";
aboutTitle.style.textAlign = "center";
aboutTitle.style.backgroundColor = "rgb(243, 154, 53)";
pageBlock.appendChild(aboutTitle);
//layer1--------------------------------------------------------------------------------
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
//layer2--------------------------------------------------------------------------------
const layer2 = document.createElement("div");
layer2.style.height = (window.innerHeight / 1.45) + "px";
layer2.style.width = (window.innerWidth / 1.45) + "px";
layer2.style.borderRadius = "10px";
layer2.style.margin = "auto";
layer2.style.display = "flex";
layer2.style.justifyContent = "space-around";
layer1.appendChild(layer2);
//layer3--------------------------------------------------------------------------------
const layer3 = document.createElement("div");
layer3.style.height = (window.innerHeight / 1.449) + "px";
layer3.style.width = (window.innerWidth / 2.9) + "px";
layer3.style.borderRadius = "10px";
layer3.style.float = "left";
layer3.style.alignContent = 'center';
layer2.appendChild(layer3);
//layer3_content_container--------------------------------------------------------
const layer3content = document.createElement("div");
layer3content.style.margin = "10px";
layer3content.style.borderRadius = "10px";
layer3content.style.textAlign = "center";
layer3.appendChild(layer3content);
//profile image--------------------------------------------------------------------------------
const profileImg = document.createElement("img");
profileImg.src = "../img_files/profile.png";
profileImg.style.height = (window.innerHeight / 1.7) + "px";
profileImg.style.width = (window.innerWidth / 3.5) + "px";
profileImg.style.borderRadius = "10px";
profileImg.style.border = "5px rgb(2, 48, 71) solid";
profileImg.style.filter = "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5))";
layer3content.appendChild(profileImg);
//layer4--------------------------------------------------------------------------------
const layer4 = document.createElement("div");
layer4.style.height = (window.innerHeight / 1.449) + "px";
layer4.style.width = (window.innerWidth / 2.9) + "px";
layer4.style.borderRadius = "10px";
layer4.float = "right";
layer4.style.alignContent = 'center';
layer2.appendChild(layer4);
//layer4_content_container--------------------------------------------------------
const layer4content = document.createElement("div");
layer4content.style.margin = "10px";
layer4content.style.borderRadius = "10px";
layer4content.style.textAlign = "center";
layer4content.style.display = "flex";
layer4content.style.justifyContent = "center";
layer4.appendChild(layer4content);
//textContainer--------------------------------------------------------------------------------
const textContainer = document.createElement("div");    
textContainer.style.backgroundColor = "rgb(234, 229, 219)";
textContainer.style.borderRadius = "10px";
textContainer.style.alignContent = "center";
textContainer.style.height = (window.innerHeight / 1.68) + "px";
textContainer.style.width = (window.innerWidth / 3.5) + "px";
textContainer.style.border = "5px rgb(2, 48, 71) solid";
textContainer.style.filter = "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5))";
layer4content.appendChild(textContainer);
//text------------------------------------------------------------------------------------------------
const aboutText = document.createElement("div");
aboutText.style.fontSize = (window.innerHeight / 60) + "px";
aboutText.style.margin = (window.innerHeight / 20 ) + "px";
aboutText.innerHTML = 
    "<h2>My Name is Oscar." + "<br>" + 
    "I am a computer science student at Kent State University, " +
    "and I have experience with Javascript, Python, and C++." + "<br>" + "</br>" +
    "Outside of Academics, I enjoy drawing , playing basketball, and indulging in creative contents."

textContainer.appendChild(aboutText);
//resize function--------------------------------------------------------------------------------
function resizeAbout(){

aboutTitle.style.height = (window.innerHeight / 12) + "px";
aboutTitle.style.width = (window.innerWidth / 1.115) + "px";

aboutTitle.style.fontSize = (window.innerHeight / 14) + "px";

layer1.style.height = (window.innerHeight / 1.18) + "px";
layer1.style.width = (window.innerWidth / 1.13) + "px";

layer1.style.marginTop = (window.innerHeight / 60) + "px";

layer2.style.height = (window.innerHeight / 1.45) + "px";
layer2.style.width = (window.innerWidth / 1.45) + "px";

layer3.style.height = (window.innerHeight / 1.449) + "px";
layer3.style.width = (window.innerWidth / 2.9) + "px";

profileImg.style.height = (window.innerHeight / 1.7) + "px";
profileImg.style.width = (window.innerWidth / 3.5) + "px";

layer4.style.height = (window.innerHeight / 1.449) + "px";
layer4.style.width = (window.innerWidth / 2.9) + "px";

textContainer.style.height = (window.innerHeight / 1.68) + "px";
textContainer.style.width = (window.innerWidth / 3.5) + "px";

aboutText.style.fontSize = (window.innerHeight / 60) + "px";
aboutText.style.margin = (window.innerHeight / 20 ) + "px";
    
}

window.addEventListener("resize",resizeAbout);