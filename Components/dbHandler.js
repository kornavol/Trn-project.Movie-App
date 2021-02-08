import { db } from "./then.js";
//import { showSlides } from "../main.js";

export {dbMovie, dbName }

/* We coudnt defined varibles globaky (regarding this scope\page), becouse this function execute in anothe scope (main.js) and varible WILL BE UNDEFINED */

// let key = document.getElementById('search').value;
// let result = db[key];


function dbMovie() { 
        
    /* !!! they couldn't be defined globally */
    let key = document.getElementById('search').value;
    let result = db[key];
    let card = ''; 
   
    console.log('dbMovie for  ' + key + '  is activ');
    
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


function dbName () { 

    let key = document.getElementById('search').value;
    let result = db[key]; 

    console.log('dbName for  ' + key + '  is activ');

    let card3 = 
        `
        <div class="black-bg"></div>
        <div class="profile-container">
            <div class="profile-img-container">
                <div class="profile-bg"></div>
                    <div class="profile-img">
                        <img src="${result.image.url}" alt="">
                    </div>
                </div>
                <div class="profile-text-container">
                    <div class="text-border">
                    <h3>${result.name}</h3>
                    <p>Birth Date: ${result.birthDate}</p>
                    <p>Birth Place: ${result.birthPlace}</p>
                    <p>Real name: ${result.realName}</p>
                    <button class="button" onclick="backBtn('section-1','section-2' )">Back</button>
                </div>
            </div>
        </div>
        `
        document.getElementById('section-2').innerHTML = card3;  
        document.getElementById('section-1').classList.add('hide');

}





