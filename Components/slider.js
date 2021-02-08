/*  NOT USED */

// WE couden't use a slider becouse we increase a slideIndex in main, and if we would be export from here, the varible will be only for read.

//import { slideIndex } from "../main.js";

let slideIndex = 1;

/* Slider core */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    
}


//export  {showSlides, slideIndex } 