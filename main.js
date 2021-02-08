/* curent version */

import { movieExecutor, result, actBioExecutor,  db } from "./Components/then.js";
import { input, autocompURL, options } from "./Components/dates.js";
import {dbMovie, dbName} from "./Components/dbHandler.js";

import test2 from "./Components/test2.js";



/* initial staet must be 1 and not 0  becouse we coud'n go to the last slide from first (will be comparison with 0) */
let slideIndex = 1;

/*  Slider Next/previous controls */
window.plusSlides = function(n) {
    showSlides(slideIndex += n);
    
}



/* Slider core */
export function showSlides(n) {
    console.log('the function showSlides is called ');

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

}


/* ! To-Do: Describe a logick */
//let input = document.getElementById("search");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
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
                <button class="button" onclick="backBtn('container-2','container-3', 'block')">Back</button>  
            </div>
            
        </div>

    `
    document.getElementById('container-3').innerHTML = card2;
    document.getElementById('container-3').classList.remove('hide');
    document.getElementById("btn-prev").style.display = 'none';
    document.getElementById("btn-next").style.display = 'none';
}

/* action of event  */
window.backBtn = function (firstSection, secondSection, check) {
    document.getElementById(firstSection).classList.remove('hide');
    document.getElementById(secondSection).classList.add('hide');
    if (check == 'block') {
        document.getElementById("btn-prev").style.display = 'block';
        document.getElementById("btn-next").style.display = 'block';
        
    }
    
}

/* action of event  */
window.dataReceiverM = function() { 
    /*  For call function into this scope paramatrecly we need:
    * - we should call function (in HTML) with wraped in quatation mark. Exempel: ataReceiverM('test2') 

    1. check the name (with "if")
    2. to wrap imported function (what we going to use ) in new varible which has the same name
    
    */
        // if (xyz == 'test2') {
        //     xyz = test2;
        // } 
       
    for (const key in db) {
        if (key == input.value.toLowerCase()) {
            if (db[key].check == 'movie' ) { /* diferencess between key */
                //alert('Get movie from db. Fixed')
                dbMovie();
            } else if (db[key].check == 'bio') {
                //alert('Get bio from db')
                dbName();
            }
        
        } else {
            let url = autocompURL + input.value;
            
            /*  We coudn't use a input value from varible which defined and imported. Becouse in this case we call this function once and value will be unupdated
            Actually. I didn't fully understand
            */
            // console.log(movieReq.value);
            // console.log(document.getElementById('search').value);
                        
            function errorHandler(err) {
                console.log(err)
            }
            
            fetch(url, options).then(movieExecutor).catch(errorHandler);
        }
    }
   
}


/* action of event  */
window.dataReceiverBio = function(id) { 

    for (const key in db) {
        if (key == input.value.toLowerCase()) {
            if (db[key].check == 'bio') { 
                dbName();
            } else if (db[key].check == 'movie') {
                break
            }
        } else {
            let url = autocompURL + id;

            function errorHandler(err) {
                console.log(err)
            }

            fetch(url, options).then(actBioExecutor).catch(errorHandler);
        }
    }
    
}

/* Show a big picture of movie */
window.modalPic =  function (index){
    let modal = document.getElementById(`myModal-${index}`);
    let img = document.getElementById(`img-mySlides-${index}`);
    let modalImg = document.getElementById(`img-${index}`);
    modal.style.display = "block";
    modalImg.src = img.src; 
  
}

/* Close a big picture of movie */
window.closeModalPick = function (index) {
    let modal = document.getElementById(`myModal-${index}`);
    modal.style.display = "none";
}