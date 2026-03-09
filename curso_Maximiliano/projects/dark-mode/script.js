const myButton = document.getElementById("myButton");
const bd = document.querySelector("body");

myButton.addEventListener("click", function() {
   bd.classList.toggle("dark");
})

