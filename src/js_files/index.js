// Create the HTML structure
const body = document.body;

// Create a header
const header = document.createElement('h1');
header.textContent = "Welcome to My JavaScript-Only Webpage!";
header.style.textAlign = "center";
header.style.color = "blue";
body.appendChild(header);

// Create a paragraph
const paragraph = document.createElement('p');
paragraph.textContent = "This webpage is built entirely using JavaScript!";
paragraph.style.fontSize = "18px";
paragraph.style.textAlign = "center";
body.appendChild(paragraph);

// Create a button
const button = document.createElement('button');
button.textContent = "Click Me!";
button.style.display = "block";
button.style.margin = "20px auto";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
body.appendChild(button);

// Add an event listener to the button
button.addEventListener('click', () => {
  alert("You clicked the button!");
});
