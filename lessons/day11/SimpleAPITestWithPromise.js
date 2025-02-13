/**
 * ****************************
 * https://jsonplaceholder.typicode.com/
 * ****************************
 */
const todo1Endpoint = "https://jsonplaceholder.typicode.com/todos/1";

console.log(fetch(todo1Endpoint));
// return a promise with fetch
// thinking---------scenarios
// fetch(todo1Endpoint)
//      .then(getResponse)
//      .then(validateResponse);
// ----detail implement----
// function getResponse(rawResponse) {
//     return rawResponse.json();}
// function validateResponse(todo) {
//     if(todo.completed){
//         console.log("Todo is completed");}
//     else{
//         console.log("Todo is in progress");}

// then-- syntax chi call dinh nghia cua ten function, neu co () thi bao he thong thuc thi luon
// 
/* fetch(todo1Endpoint)
     .then(getResponse)
     .then(validateResponse);
// neu call "done" thi done duoc call truoc khi getResponse va validateResponse
console.log("Done"); */
// --------------------sua thanh -----------
fetch(todo1Endpoint)
     .then(getResponse)
     .then(function (todo){
        if(todo.completed){
            console.log("Task is completed");}
        else{
            console.log("Task is in progress");
        }
        console.log("DOne testing");
        console.log("next step");
        console.log("Other step");
        
        
     });



    //  detail implement
function getResponse(rawResponse) {
    return rawResponse.json();
}
function validateResponse(todo) {
    console.log(todo);
    
    if(todo.completed){
        console.log("Task is completed");}
    else{
        console.log("Task is in progress");
    }
}
