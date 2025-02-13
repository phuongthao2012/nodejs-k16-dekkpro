/**
 * ****************************
 * General info:
    url: https://jsonplaceholder.typicode.com
    Library: fetch
    slugs:
    GET	/posts
    9.1
        Please using PROMISE and then able to solve this
        a. Allow user to input an userid and postId, print out that post content: 
        Demostrate the following steps:
        ====MENU===
        1. Get POST content 
        2. Print all related posts
        0. Exit!
        ===========
        Please enter your choice: -> 1  
            Please enter your userID: 1 
            Please enter the postID: -> 1 -> then system print out that post content
        Please enter your choice: 0 -> Exit  
        b. Print all posts for that user
    9.2
        Please using PROMISE and ASYNC/AWAIT to solve this
        Allow user to input an userid and postId, print out that post content
        Print all posts for that user
 * ****************************
 */
const readline = require('readline-sync');
const { getUserInput } = require('../../utils/ConsoleControler')
const url = 'https://jsonplaceholder.typicode.com';
main();
function main() {
    console.log(`====MENU===`);
    console.log(`1. Get POST content info then Print all relate posts`);
    console.log(`2. Print all related posts`);
    console.log(`0. Exit!`);
    console.log(`===========`);
    showMenu();
}
function showMenu() {
    let isValidOption = true;
    // ---could not run while loop here because it's waiting for response-----
    // while (isValidOption) { 
    const option = getUserInput();
    switch (option) {
        case 0:
            isValidOption = false;
            break;
        case 1:
            const userID = parseInt(readline.question(`Please enter your userID: ... \t`));
            const postID = parseInt(readline.question(`Please enter the postID ... \t`));
            getPostContent(userID, postID);
            break;
        case 2:
            const userId = parseInt(readline.question(`Please enter your userID: ... \t`));
            getAllPostContent(userId);
            break;
        default:
            console.log(`Input again`);
            break;
    }
    // }


}
function getPostContent(userId, postId) {
    fetch(`${url}/posts?userId=${userId}&id=${postId}`)
        .then(getResponse)
        .then(printJSONResponse)
        .catch(showError);
}
function getAllPostContent(userId) {
    fetch(`${url}/posts?userId=${userId}`)
        .then(getResponse)
        .then(printJSONResponse)
        .catch(showError);
}

function getResponse(rawResponse) {
    // this time the API has not returned yet then could not return the consolelog here
    // console.log(rawResponse.json());
    return rawResponse.json();
}
function printJSONResponse(rawResponseJSON) {
    if (rawResponseJSON.length === 0) {
        console.log(`No data found`);
        // have to return here because the function will continue to execute
        return;
    }
    console.log(rawResponseJSON);

}
function showError(error) {
    console.log(`API has problem with ${error}`);
}