const autocompURL = "https://imdb8.p.rapidapi.com/title/auto-complete?q=";

const bioURL = "https://imdb8.p.rapidapi.com/actors/get-bio?nconst=";

const input = document.getElementById('search');

const novieReq1 = document.querySelector('#search').value;

/* 
keys:
3059e7b3e6msh6194f2c6a42f5cfp11bdf3jsncb27126748f0
899f46c196msh9bf9c439c1c480bp1eb58ajsn850473019af8 

*/
const options = {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "899f46c196msh9bf9c439c1c480bp1eb58ajsn850473019af8",
        "x-rapidapi-host": "imdb8.p.rapidapi.com"
    }
};

export {options, input, autocompURL};