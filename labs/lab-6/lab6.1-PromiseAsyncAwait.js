/**
 * ****************************
 * General info:
    url: https://jsonplaceholder.typicode.com
    Library: fetch
    slugs:
    GET	/posts
    9.2
        Please using PROMISE and ASYNC/AWAIT to solve this
        a. Allow user to input an userid and postId, print out that post content: 
        Demostrate the following steps:
            ====MENU===
            1. Get POST content 
            2. Print all related posts
            0. Exit!
            ===========
        b. Print all posts for that user
 * ****************************
 */
const readline = require('readline-sync');
const url = 'https://jsonplaceholder.typicode.com';
main();
async function main() {
    await showMenu();
}
async function showMenu() {
    let option;
    do {
        console.log(`====MENU===`);
        console.log(`1. Get POST content and print the related post`);
        console.log(`2. Print all related posts`);
        console.log(`0. Exit!`);
        console.log(`===========`);
        // const option = getUserInput();
        option = parseInt(readline.question("Please enter your choice: "));
        switch (option) {
            case 0:
                break;
            case 1:
                const userID = parseInt(readline.question(`Please enter your userID: ... \t`));
                const postID = parseInt(readline.question(`Please enter the postID ... \t`));
                await getPostContent(userID, postID);
                break;
            case 2:
                const userId = parseInt(readline.question(`Please enter your userID: ... \t`));
                await getAllPostContent(userId);
                break;
            default:
                console.log("Input again");
                break;
        }
    } while (option !== 0);


}
async function getPostContent(userId, postId) {
    let response = await fetch(`${url}/posts?userId=${userId}&id=${postId}`);
    let postContent = await response.json();
    if (postContent.length === 0) {
        console.log(`No data found or invalid input`);
    }
    else {
        console.log(postContent);
    }

}
async function getAllPostContent(userId) {
    let response = await fetch(`${url}/posts?userId=${userId}`)
    let postContent = await response.json();
    if (postContent.length === 0) {
        console.log(`No data found or invalid input`);
    }
    else {
        console.log(postContent);
    }

}
