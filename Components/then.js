//import showSlides from "./slider.js";
import {showSlides} from "../main.js";
import { options, input } from "./dates.js";

export {movieExecutor, actBioExecutor, result, db }

let result; /* contains a data set of movie */
let db = {test: "test"};


/* request for check a movie */
async function movieExecutor(data) { 
   
   result = await data.json();
   /* !!! I coud't use as global varible in this js file */
   let key = input.value.toLowerCase();
   let gate1 = result.d[0].id;
   
   if (gate1.startsWith("nm")) {
        let name = gate1;
        nameHandler (name);
    } else {
        /* Adding into object a cheker for comparison with db*/
        result.check = 'movie'
        /* Adding into db new paar key\varible and saving a data from request into db.
           the key will be value from customre requst 
        */
        db[key] = result;
        console.log(db);
  
        let card = '';
        
        for (let index = 0; index < result.d.length; index++) {
            const movie = result.d[index];

            card += `
            <div class="mySlides">
                <div class="gallery-container">    
                    <img id="img-mySlides-${index}" src= "${movie.i.imageUrl}" onclick="modalPic(${index})">
                </div>
                <div class="footer">
                    <h3 id="h3-title">${movie.l}</h3>
                    <p>(${movie.y})</p>
                    <button id="search-btn" class="button" onclick="moreBtn(${index})">More</button>
                </div>
                <div id="myModal-${index}" class="modal">
                    <span class="close" onclick="closeModalPick(${index})" >&times;</span>
                    <img class="modal-content" id="img-${index}">
                </div>
            </div>
            `
        }
        /* we can recive card once, becouse we ADD each slider into the varible "card" */
        document.getElementById('container-2').innerHTML = card;
        
        document.getElementById('container-1').classList.add('hide');
        document.getElementById('container-2').classList.remove('hide');
        document.getElementById("btn-prev").style.display = 'block';
        document.getElementById("btn-next").style.display = 'block';

        /* I don't need to import "slideIndex" becouse this function is exuted in main.js 
        
        Why I need in this case import this function here?
        */
        showSlides();
    
    }

}


/* request for get id name */
async function actBioExecutor(data) {
    let fullName  = await data.json();
    console.log('actBioExecutor  ', fullName );
    let name = fullName.d[0].id;
    nameHandler (name);
 }  

/* fetch to get information about artist and put into DOM */
function nameHandler (name) { 

    async function process(data) {
        document.getElementById('section-1').classList.add('hide');

        let result1 = await data.json();
        let key = result1.name.toLowerCase();
                
        /*TO-DO. add checker for db */
        result1.check = 'bio' /* exacurting */
        db[key] = result1;
        console.log('db from nameHanler',  db);
      
        let card3 = 
            `
                <div class="black-bg"></div>
                <div class="profile-container">
                    <div class="profile-img-container">
                        <div class="profile-bg"></div>
                            <div class="profile-img">
                                <img src="${result1.image.url}" alt="">
                            </div>
                        </div>
                        <div class="profile-text-container">
                            <div class="text-border">
                            <h3>${result1.name}</h3>
                            <p>Birth Date: ${result1.birthDate}</p>
                            <p>Birth Place: ${result1.birthPlace}</p>
                            <p>Real name: ${result1.realName}</p>
                            <button class="button" onclick="backBtn('section-1','section-2' )">Back</button>
                        </div>
                    </div>
                </div>
             `
            
        document.getElementById('section-2').innerHTML = card3;  
        document.getElementById('section-2').classList.remove('hide');

    }


    let url = "https://imdb8.p.rapidapi.com/actors/get-bio?nconst="+name 

    fetch(url, options).then(process).catch();
}


