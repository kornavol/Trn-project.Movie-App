/*  NOT USED */


/*  to call function via addeventLisener */


import { movieExecutor, result, actBioExecutor,  fullName } from "./then.js";
import { movieReq, autocompURL } from "./urlReguest.js";

 function dataReceiverM() { 

    const options = {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "2b06625579msha747fd5993d3d79p14985bjsn68d49cf7575f",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    }; 
   
    let url = autocompURL + movieReq;
    console.log(movieReq);
    console.log(document.getElementById('search'));
    
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
            "x-rapidapi-key": "2b06625579msha747fd5993d3d79p14985bjsn68d49cf7575f",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    }; 
   

    let url = document.getElementById('search').value + id;
    console.log(document.getElementById('search').value);

    function errorHandler(err) {
        console.log(err)
    }

    fetch(url, options).then(actBioExecutor).catch(errorHandler);
   
}

export default dataReceiverM
