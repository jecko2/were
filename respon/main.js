const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-menu");

hamburger.addEventListener("click", MobileMenu);

function MobileMenu(){
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
}

var slideImg = document.getElementById("slideImg");

var images = new Array(
    "img5.jpg",
    "img6.jpg",
    "img7r.jpg",
    "xy1.jpg",
    "xy2.jpg",
    "xy3.jpg",
    "/xy4.jpg",
    "/xy5.jpg",
    "/xy6.jpg",
    "/xy7.jpg",
    "/xy8.jpg",
    "/xy9.jpg",
    "/xy10.jpg",
)
var len = images.length;
var i = 0;
function slider(){
    if(i > len-1){
        i=0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout("slider()", 4500);
}


















