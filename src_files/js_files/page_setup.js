console.log("loading page");

const pageContainer = document.createElement("div");
pageContainer.style.backgroundColor = "rgb(33, 158, 188)";
pageContainer.style.borderRadius = "10px";
pageContainer.style.height = (window.innerHeight / 1.019) + "px";
window.container.appendChild(pageContainer);   

const pageContent = document.createElement("div");
pageContent.style.backgroundColor = "rgb(33, 158, 188)";
pageContent.style.borderRadius = "10px";
pageContent.style.height = (window.innerHeight / 1.019) + "px";
pageContent.style.width = (window.innerWidth / 1.1) + "px";
pageContent.style.float = "right";
pageContainer.appendChild(pageContent);

const pageBlock = document.createElement("div");
pageBlock.style.backgroundColor = "rgb(255, 183, 3)";
pageBlock.style.margin = "10px";
pageBlock.style.borderRadius = "10px";
pageBlock.style.height = (window.innerHeight / 1.04) + "px";
pageBlock.style.width = (window.innerWidth / 1.115) + "px";
pageBlock.style.float = "right";
pageContent.appendChild(pageBlock);

function resizePage() {
    pageContainer.style.height = (window.innerHeight / 1.019) + "px";
    pageContent.style.height = (window.innerHeight / 1.019) + "px";
    pageContent.style.width = (window.innerWidth / 1.1) + "px";
    pageBlock.style.height = (window.innerHeight / 1.04) + "px";
    pageBlock.style.width = (window.innerWidth / 1.115) + "px";
}

window.addEventListener("resize", resizePage);