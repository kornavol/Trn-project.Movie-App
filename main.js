/* curent version */

import { movieExecutor, result, actBioExecutor,  fullName } from "./Components/then.js";
import { movieReq, autocompURL } from "./Components/urlReguest.js";



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
    document.getElementById('container-2').classList.add('hide');
   
  /* split a actor's name  */
    let artsName = result.d[index].s;
    let idArts = artsName.split(", ");
  
    /* !! WHY I NEED TO WRAP A ${idArts[0]} INTO quotation mark */
    let card2 = 
    `
        <div class="card-container1">
            <div class="card-container2">
                
                    <div class="details-title">
                        <h3>Movie Details</h3>
                    </div>
                
                <div class="details-container">
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
                </div>
            </div>
            
            <div class="footer">
                <button class="button" onclick="backBtn('container-2','container-3')">Back</button>  
            </div>
            
        </div>

    `

    document.getElementById('container-3').innerHTML = card2;
    document.getElementById('container-3').classList.remove('hide');
    document.getElementById("btn-prev").style.display = 'none';
    document.getElementById("btn-next").style.display = 'none';
}

/* action of event  */
window.backBtn = function (firstSection, secondSection) {
    document.getElementById(firstSection).classList.remove('hide');
    document.getElementById(secondSection).classList.add('hide');
    document.getElementById("btn-prev").style.display = 'block';
    document.getElementById("btn-next").style.display = 'block';

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
            "x-rapidapi-key": "3059e7b3e6msh6194f2c6a42f5cfp11bdf3jsncb27126748f0",
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
            "x-rapidapi-key": "3059e7b3e6msh6194f2c6a42f5cfp11bdf3jsncb27126748f0",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    }; 
   

    let url = autocompURL + id;
    

    function errorHandler(err) {
        console.log(err)
    }

    fetch(url, options).then(actBioExecutor).catch(errorHandler);
   
}

/* Show a big picture of movie */
window.modalPic =  function (index){
    let modal = document.getElementById(`myModal-${index}`);
        console.log(modal);
    let img = document.getElementById(`img-mySlides-${index}`);
    let modalImg = document.getElementById(`img-${index}`);
    console.log(img.src);
    modal.style.display = "block";
    modalImg.src = img.src; 
  
}

/* Close a big picture of movie */
window.closeModalPick = function (index) {
    let modal = document.getElementById(`myModal-${index}`);
    modal.style.display = "none";
}