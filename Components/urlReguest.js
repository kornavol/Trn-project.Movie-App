const autocompURL = "https://imdb8.p.rapidapi.com/title/auto-complete?q=";

const bioURL = "https://imdb8.p.rapidapi.com/actors/get-bio?nconst=";

const movieReq = document.getElementById('search').value;

const novieReq1 = document.querySelector('#search').value;


const options = {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "3059e7b3e6msh6194f2c6a42f5cfp11bdf3jsncb27126748f0",
        "x-rapidapi-host": "imdb8.p.rapidapi.com"
    }
};

export {options, movieReq, autocompURL, novieReq1 };