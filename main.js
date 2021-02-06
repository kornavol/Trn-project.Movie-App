/* curent version */

import { movieExecutor, result, actBioExecutor,  fullName } from "./Components/then.js";
import { movieReq, autocompURL } from "./Components/urlReguest.js";
import initSec1 from "./Components/html.js";


/* !! not Working!! */
//import { options } from "./Components/urlReguest.js";

/* initial statet must be 1 and not 0  becouse we coud'n go to the last slide from first (will be comparison with 0) */
let slideIndex = 1;

/*  Slider Next/previous controls */
window.plusSlides = function(n) {
    showSlides(slideIndex += n);
    
}



/* Slider core */
export function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
     /* return to first slide */
    if (n > slides.length) {
        slideIndex = 1
    }
    /* return to the last  slide */
    if (n < 1) {
        slideIndex = slides.length
    }
    /* hide all slides */
    for ( let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    /* locate a current positon */
    slides[slideIndex - 1].style.display = "block";
    console.log(slideIndex);
    
}


/* ! To-Do: Describe */
let input = document.getElementById("search");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        console.log(event.target.value)
        event.preventDefault();
        document.getElementById("search-btn").click();
    }
}); 




/* action of event  */
window.moreBtn = function(index) {
    document.getElementById('section-1').classList.add('hide');
   
  /* split a actor's name  */
    let artsName = result.d[index].s;
    let idArts = artsName.split(", ");
  
    /* !! WHY I NEED TO WRAP A ${idArts[0]} INTO quotation mark */
    let card2 = `
    
            <header>
                <div class="header-white-bg"></div>
                <div class="navbar-container">
                    <h2>Search IMDb</h2>
                    <input id="search" type="text">
                    <button id="search-btn" class="button" onclick="dataReceiver()">Search</button>
                </div>
            </header>
        
            <div class="card-container1">
                <div class="card-container2">
                    <div class="card-container3">
                        <div class="img-thumbnail">
                            <img src= "${result.d[index].i.imageUrl}">
                        </div>
                        <div class="card-text">
                            <h3>${result.d[index].l}</h3>
                            <p>Year: ${result.d[index].y}</p>
                            <p>Rank: ${result.d[index].rank}</p>
                            <p>Genre: ${result.d[index].q}</p>
                            <p>Actors<br>
                                <a onclick="dataReceiverBio('${idArts[0]}' )"  href="#">${idArts[0]}</a><br>
                                <a onclick="dataReceiverBio('${idArts[1]}' )"  href="#">${idArts[1]}</a>
                            </p>
                        </div>
                        <button class="button" onclick="backBtn('section-1','section-2')">Back</button>
                    </div>
                </div>
            </div>
    
        `
    document.getElementById('section-2').innerHTML = card2;
    document.getElementById('section-2').classList.remove('hide'); 
}

/* action of event  */
window.backBtn = function (firstSection, secondSection) {
    document.getElementById(firstSection).classList.remove('hide')
    document.getElementById(secondSection).classList.add('hide')

}

window.resetSection1 = function() {
    document.getElementById('section-1').innerHTML = initSec1; 
}

/* !!!ASK BUELENT!!! 
Idea is  use one function as universal request
*/

/* 
window.dataReceiver = function(handelrF) { 

    
     let options = {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "2b06625579msha747fd5993d3d79p14985bjsn68d49cf7575f",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    };

   
    let url = "https://imdb8.p.rapidapi.com/title/auto-complete?q=" + document.getElementById('search').value;
    console.log(url);
    
      fetch(url, options).then(handelrF)

  
} */

/* action of event  */
window.dataReceiverM = function() { 

    const options = {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "2b06625579msha747fd5993d3d79p14985bjsn68d49cf7575f",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    }; 
   
    let url = autocompURL + document.getElementById('search').value;
    
    /* !!! ASK Buelent. Why  it's now working as imported varibles */
    console.log(movieReq);
    console.log(document.getElementById('search'));
    console.log(document.getElementById('search').value);
    
    
    function errorHandler(err) {
        console.log(err)
    }

    fetch(url, options).then(movieExecutor).catch(errorHandler);
   
}


/* action of event  */
window.dataReceiverBio = function(id) { 

    const options = {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "2b06625579msha747fd5993d3d79p14985bjsn68d49cf7575f",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    }; 
   

    let url = autocompURL + id;
    

    function errorHandler(err) {
        console.log(err)
    }

    fetch(url, options).then(actBioExecutor).catch(errorHandler);
   
}

