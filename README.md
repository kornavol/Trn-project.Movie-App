Link to page:
<https://kornavol.github.io/Trn-project.Movie-App/>

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
- recreate a slider function (Buelent method) and put it into new module

## Bugs

- we coudnt repeat the same customer "input's" request from db if it not comleted !!  Regarding only to bio. artists. It happans becouse save occurs with key from "name". For fixing need to create another 'saver' for customer "input's" request

## Syntax & problems solution

1.it's not allow declarate varibles or function in global scope and use them into another object. It can working only in two cases:
  
- it happend in main script (main.js).
- all those objects will be export to place from they are calling

2.if we wanna call function "onclick" from HTNL with atribute which is name of another function. We need to do:

- to wrap a attribute in quotation mark;
- create into a function a cheker ('if') which will be compare an atribute with name of "callback" function.
- crate a new varible with the same neme as callback function and assign callback function as value

## Question to Buelent

- Why if variable declared outside from function we couldn't get a value? (dbHandler, line:13 )
