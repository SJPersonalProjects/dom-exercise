// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

// TASK 1: a <p> with red text that says “Hey I’m red!”
const paragraph = document.createElement("p"); //Creating an element of <p> in the DOM.
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

container.appendChild(paragraph); //appending/adding child to the parent container.


// TASK 2: an <h3> with blue text that says “I’m a blue h3!”
const h3_heading = document.createElement("h3");
h3_heading.textContent = "I'm a blue h3!";
h3_heading.style.color = "blue";

container.appendChild(h3_heading);

/**
 * TASK 3: a <div> with a black border and pink background color with the following elements inside of it:
 *      # another <h1> that says “I’m in a div”
 *      # a <p> that says “ME TOO!”
 *      # Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the 
 *      container.
*/

const innerDiv = document.createElement("div");
innerDiv.style.border = "2px solid black";
innerDiv.style.backgroundColor = "pink";

//Inserting elements within innerDiv.
const innerH1 = document.createElement("h1");
innerH1.textContent = "I'm a div";
innerDiv.appendChild(innerH1);

const innerParagraph = document.createElement("p");
innerParagraph.textContent = "ME TOO!";
innerDiv.appendChild(innerParagraph);

container.appendChild(innerDiv);



