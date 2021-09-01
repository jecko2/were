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

// var slideImg = document.getElementById("slideImg");

// var images = new Array(
//     // "respon/images/img1.jpg",
//     "/respon/img5.jpg",
//     "/respon/img6.jpg",
//     "/respon/img7r.jpg",
//     "/respon/xy1.jpg",
//     "/respon/xy2.jpg",
//     "/respon/xy3.jpg",
//     "/respon/xy4.jpg",
//     "/respon/xy5.jpg",
//     "/respon/xy6.jpg",
//     "/respon/xy7.jpg",
//     "/respon/xy8.jpg",
//     "/respon/xy9.jpg",
//     "/respon/xy10.jpg",
// )
// var len = images.length;
// var i = 0;
// function slider(){
//     if(i > len-1){
//         i=0;
//     }
//     slideImg.src = images[i];
//     i++;
//     setTimeout("slider()", 4500)
// }


















