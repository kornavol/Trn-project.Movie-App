Link to page:
<https://kornavol.github.io/Trn-project.Movie-App/>.

Link to api:
<https://rapidapi.com/apidojo/api/imdb8/endpoints>

## Version features

- module structure
- "Enter" works together with click on button;
- image enlargement on click;
- DB for happened requests;
- repeated requests redirected to DB;
- a request match with DB independently from letters size (upper-lower case)

## To-do

- create a structure, when we can use the same "request" function;
- describe all js logick;

## Bugs

- we coudnt repeat the same customer "input's" request from db if it not comleted !!  Regarding only to bio. artists. It happans becouse save occurs with key from "name". For fixing need to create another 'saver' for customer "input's" request  

## Question to Buelent

  1. Explanation about scope im module structure

- the idea was create module structure, and call function otside (on page) wiht atribute which is also function. It's not working.

  - onclick from button
  - varible as container for .value

- Why if variable declared outside from function we couldn't get a value? (dbHandler, line:13 )
