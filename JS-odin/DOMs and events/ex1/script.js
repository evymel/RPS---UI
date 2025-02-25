const container = document.querySelector("#container");



//createElement("p") is the type,! usually div for things ,name goes left and in the append
//exercise from odin DOM page in the foundation course

const p1 = document.createElement("p");
p1.textContent = "Hey I’m red!";
p1.style.color = "red";


container.appendChild(p1);



const blue = document.createElement("h3");
blue.textContent = "I’m a blue h3!";
blue.style.color = "blue";


container.appendChild(blue);



//div that holds the two "children" of his, called contest :h1, and p
const content = document.createElement("div");
content.classList.add("content");

content.style.backgroundColor = "pink"; // Set background color
content.style.border = "2px solid black"; // Set border



const divvy = document.createElement("h1");
divvy.textContent = "I’m in a div";

content.appendChild(divvy);

const pContent = document.createElement("p");
pContent.classList.add("inside");
pContent.textContent ="ME TOO!";

content.appendChild(pContent);

container.appendChild(content);