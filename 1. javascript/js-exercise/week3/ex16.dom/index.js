const h2 = document.createElement("h2");

h2.innerText = "I was written in index.js ";

h2.setAttribute("id", "sub-heading");
h2.setAttribute("class", "secondary");

document.body.appendChild(h2);

//buttons
const target = document.querySelector("body");
function clickBody() {
  console.log("clicked the body");
}
target.addEventListener("click", clickBody);

//click on the heading text
function handleClick() {
  console.log("Click the heading");
}
