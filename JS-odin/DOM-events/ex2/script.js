const container = document.querySelector("#container");



// the JavaScript file - of method two button, still a tad problematic, still the DOM element can only have one "onclick" property.
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");


// the JavaScript file - of the third method
//the best method, it's both separated from the html file, while also flexible for several "onclick" funcs at once if we wish for that
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  alert("Hello World");
});

// see the following example of method 3 used with named functions:
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  const btn2 = document.querySelector("#btn2");

  btn2.addEventListener("click", alertFunction);

btn.addEventListener("click", function (e) {
    console.log(e);
});

btn.addEventListener("click", function (e) {
    console.log(e.target);
});


btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";


});