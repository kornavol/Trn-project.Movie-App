/* curent version */

let result;
let fullName; /* contains a object of actors */

function more(index) {
    document.getElementById('section-1').classList.add('hide');
    console.log(result);
  /* split a actor's name  */
    let NamActor = result.d[index].s;
    let NamActor2 = NamActor.split(", ");

    console.log(NamActor2[0]);
    console.log(typeof(NamActor2[0]));
  
    /* !! WHY I NEED TO WRAP A ${NamActor2[0]} INTO quotation mark */
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
                                <a onclick="dataReceiver('dataHandler1', '${NamActor2[0]}' )"  href="#">${NamActor2[0]}</a><br>
                                <a onclick="dataReceiver('dataHandler1', '${NamActor2[1]}' )"  href="#">${NamActor2[1]}</a>
                            </p>
                        </div>
                        <button class="button" onclick="back()">Back</button>
                    </div>
                </div>
            </div>
    
        `

        document.getElementById('section-2').innerHTML = card2;
    
        document.getElementById('section-2').classList.remove('hide'); 

        //dataReceiver('dataHandler1')

}

function back() {
    document.getElementById('section-1').classList.remove('hide')
    document.getElementById('section-2').classList.add('hide')

}

function back2() {
    document.getElementById('section-2').classList.remove('hide')
    document.getElementById('section-3').classList.add('hide')

}


let input = document.getElementById("search");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        console.log(event.target.value)
        event.preventDefault();
        document.getElementById("search-btn").click();
    }
});

dataReceiver = function (handelrF,artistName) { /* how to fix an module structure */
    console.log(handelrF);
    console.log(typeof(handelrF));

    console.log(artistName);
    console.log(typeof(artistName));
    
    if (handelrF == 'dataHandler') { /* request for check a movie */
    
       handelrF =  async function dataHandler(data) {
            result = await data.json();
            console.log(result);
             
            let card = '';

            for (let index = 0; index < result.d.length; index++) {
                const movie = result.d[index];

                    card += `
                <div class="mySlides">
                    <img id="img-mySlides${index}" class="img-size" src= "${movie.i.imageUrl}">
                    <h3 id="h3-title">${movie.l}</h3>
                    <p>(${movie.y})</p>
                    <button id="search-btn" class="button" onclick="more(${index})">More</button>
                </div>
                `
                    
                    document.getElementById('container').innerHTML = card;
                    document.getElementById("btn-prev").style.display = 'block'
                    document.getElementById("btn-next").style.display = 'block'
                    
                    if(movie.l.length > 40) {
                    document.getElementById(`img-mySlides${index}`).classList.remove('img-size');
                    document.getElementById(`img-mySlides${index}`).classList.add('img-height');
                   
                }
            }
            
            showSlides();
        }

    } else if (handelrF == 'dataHandler1') { /* request for get a name */
       handelrF =  async function(data) {
            fullName  = await data.json();
            console.log(fullName);

            let name = fullName.d[0].id;
             console.log(name);
                nameHandler (name);
                //(name) => {}
        }  
    }

    function errorHandler(err) {
        console.log(err)
    }

    let url;
    
    if (typeof(artistName) == 'undefined') {

       url = "https://imdb8.p.rapidapi.com/title/auto-complete?q=" + document.getElementById('search').value;
       console.log(document.getElementById('search').value);

     } else if (artistName !== 'undefined') {
       url = "https://imdb8.p.rapidapi.com/title/auto-complete?q=" + artistName;
       console.log(url);

    } 
    
    let options = {
        "method": "GET",
        "headers": {
            
            "x-rapidapi-key": "3059e7b3e6msh6194f2c6a42f5cfp11bdf3jsncb27126748f0",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    };


    fetch(url, options).then(handelrF).catch(errorHandler);
    
}



let slideIndex = 1;

//showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

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
    console.log(slideIndex);
}


function nameHandler (name) { /* fetch to get information about artist and put into DOM */

    async function process(data) {
            let result1 = await data.json();
            console.log(result1);
            //console.log(result1.image.url);
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
            <button class="button" onclick="back2()">Back</button>
    </div>`
            document.getElementById('section-3').innerHTML = card3;  
            document.getElementById('section-3').classList.remove('hide');
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