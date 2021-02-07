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
                
            // document.getElementById('container-2').innerHTML = card;

        }
        document.getElementById('container-2').innerHTML = card;

        document.getElementById('container-1').classList.add('hide');
        document.getElementById('container-2').classList.remove('hide');
        document.getElementById("btn-prev").style.display = 'block';
        document.getElementById("btn-next").style.display = 'block';
                
        
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
        document.getElementById('section-1').classList.add('hide');

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
        console.log(result1.name);
    }


    let url = "https://imdb8.p.rapidapi.com/actors/get-bio?nconst="+name 
    let options = {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "3059e7b3e6msh6194f2c6a42f5cfp11bdf3jsncb27126748f0",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    };

    fetch(url, options).then(process).catch();
    console.log(url);
}


function nameHandler1 (name) { 

    async function process(data) {
        let result1 = await data.json();

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
            document.getElementById('section-1').classList.add('hide');
        }


    let url = "https://imdb8.p.rapidapi.com/actors/get-bio?nconst="+name 
    let options = {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "3059e7b3e6msh6194f2c6a42f5cfp11bdf3jsncb27126748f0",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    };

    fetch(url, options).then(process).catch();
    console.log(url);
}




export {movieExecutor, actBioExecutor, result, fullName }