const autocompURL = "https://imdb8.p.rapidapi.com/title/auto-complete?q=";

const bioURL = "https://imdb8.p.rapidapi.com/actors/get-bio?nconst=";

const movieReq = document.getElementById('search').value;

const novieReq1 = document.querySelector('#search').value;


const options = {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "2b06625579msha747fd5993d3d79p14985bjsn68d49cf7575f",
        "x-rapidapi-host": "imdb8.p.rapidapi.com"
    }
};

export {options, movieReq, autocompURL, novieReq1 };