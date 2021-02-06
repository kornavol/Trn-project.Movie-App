//import showSlides from "./slider.js";
import {showSlides} from "../main.js";

let result; /* contains a data set of movie */
let fullName; /* contains a object of actors */

/* request for check a movie */
async function movieExecutor(data) { 
   
   result = await data.json();
   
   let gate1 = result.d[0].id;

   
   console.log(result);
   console.log(gate1.split("", 2));
   console.log()
   
   if (gate1.startsWith("nm")) {
    let name = result.d[0].id;
    console.log(name);
    nameHandler1 (name);
    
    
    } else {

        let card = '';
        
        for (let index = 0; index < result.d.length; index++) {
            const movie = result.d[index];

                card += `
            <div class="mySlides">
                <img id="img-mySlides${index+1}" class="img-size" src= "${movie.i.imageUrl}">
                <h3 id="h3-title">${movie.l}</h3>
                <p>(${movie.y})</p>
                <button id="search-btn" class="button" onclick="moreBtn(${index})">More</button>
            </div>
            `
                
            document.getElementById('container').innerHTML = card;
            document.getElementById("btn-prev").style.display = 'block'
            document.getElementById("btn-next").style.display = 'block'
                
            /* ! Not working with first index/  T est input = ring;  */     
            if(movie.l.length > 40) {
                console.log(movie.l);
                console.log(movie.l.length);
                console.log(document.getElementById(`img-mySlides${index}`));
                document.getElementById(`img-mySlides${index+1}`).classList.remove('img-size');
                document.getElementById(`img-mySlides${index+1}`).classList.add('img-height');
            }
        } 
        showSlides();
    
    }

}


/* request for get id name */
async function actBioExecutor(data) {
    fullName  = await data.json();
    console.log(fullName);

    let name = fullName.d[0].id;
    console.log(name);
    nameHandler (name);
        //(name) => {}
}  

/* fetch to get information about artist and put into DOM */
function nameHandler (name) { 

    async function process(data) {
            let result1 = await data.json();

            document.getElementById('section-2').classList.add('hide');
            let card3 = `
            <div class="profile-container">
            <div class="profile-image">
                <img src="${result1.image.url}" alt="">
            </div>
            <div class="profile-text">
                <h3>${result1.name}</h3>
                <p>Birth Date: ${result1.birthDate}</p>
                <p>Birth Place: ${result1.birthPlace}</p>
                <p>Real name: ${result1.realName}</p>
            </div>
            <button class="button" onclick="backBtn('section-2','section-3' )">Back</button>
    </div>`
            document.getElementById('section-3').innerHTML = card3;  
            document.getElementById('section-3').classList.remove('hide');
            console.log(result1.name);
        }


    let url = "https://imdb8.p.rapidapi.com/actors/get-bio?nconst="+name 
    let options = {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "2b06625579msha747fd5993d3d79p14985bjsn68d49cf7575f",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    };

    fetch(url, options).then(process).catch();
    console.log(url);
}


function nameHandler1 (name) { 

    async function process(data) {
            let result1 = await data.json();

            let card3 = `
            <div class="profile-container">
            <div class="profile-image">
                <img src="${result1.image.url}" alt="">
            </div>
            <div class="profile-text">
                <h3>${result1.name}</h3>
                <p>Birth Date: ${result1.birthDate}</p>
                <p>Birth Place: ${result1.birthPlace}</p>
                <p>Real name: ${result1.realName}</p>
            </div>
            <button class="button" onclick="resetSection1()">Back</button>
    </div>`
            document.getElementById('section-1').innerHTML = card3;  
        }


    let url = "https://imdb8.p.rapidapi.com/actors/get-bio?nconst="+name 
    let options = {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "2b06625579msha747fd5993d3d79p14985bjsn68d49cf7575f",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    };

    fetch(url, options).then(process).catch();
    console.log(url);
}




export {movieExecutor, actBioExecutor, result, fullName }