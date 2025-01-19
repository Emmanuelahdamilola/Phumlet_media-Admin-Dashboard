const hamburger = document.querySelector(".toggle-btn"); // get the toggle-btn class
const toggler = document.querySelector("#icon"); // get the icon id

// function to epand the sidebar icon when clicked
hamburger.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("expand");
    toggler.classList.toggle("bx-chevrons-right");
    toggler.classList.toggle("bx-chevrons-left");
});