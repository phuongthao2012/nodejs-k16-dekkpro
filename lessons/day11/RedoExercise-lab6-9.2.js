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
        const { getUserInput } = require('../../utils/ConsoleControler');
        const url = 'https://jsonplaceholder.typicode.com/posts';
        
        main();
        
        function main() {
            console.log(`====MENU===`);
            console.log(`1. Get POST content info then Print all related posts`);
            console.log(`2. Print all related posts`);
            console.log(`0. Exit!`);
            console.log(`===========`);
            showMenu();
        }
        
        async function showMenu() {
            let isValidOption = true;
            while (isValidOption) {
                const option = getUserInput();
                switch (option) {
                    case 0:
                        isValidOption = false;
                        console.log('Exiting...');
                        break;
                    case 1:
                        const userID = parseInt(readline.question(`Please enter your userID: ... \t`));
                        const postID = parseInt(readline.question(`Please enter the postID ... \t`));
                        await filterPostContent(userID, postID);
                        break;
                    case 2:
                        const userId = parseInt(readline.question(`Please enter your userID: ... \t`));
                        await filterAllPostContent(userId);
                        break;
                    default:
                        console.log(`Input again`);
                        break;
                }
            }
        }
        
        async function filterAllPostContent(userId) {
            try {
                const response = await fetch(`${url}`);
                const responseJson = await response.json();
                const filteredPosts = responseJson.filter(post => post.userId === userId);
                console.log(filteredPosts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }
        
        async function filterPostContent(userId, postId) {
            try {
                const response = await fetch(`${url}`);
                const responseBody = await response.json();
                const userPosts = responseBody.filter(post => post.userId === userId);
                const postContent = userPosts.filter(post => post.id === postId);
                console.log(postContent);
            } catch (error) {
                console.error('Error fetching post content:', error);
            }
        }
        
        async function getPostContent(userId, postId) {
            try {
                const response = await fetch(`${url}?userId=${userId}&id=${postId}`);
                const responseJson = await response.json();
                printJSONResponse(responseJson);
            } catch (error) {
                showError(error);
            }
        }
        
        async function getAllPostContent(userId) {
            try {
                const response = await fetch(`${url}?userId=${userId}`);
                const responseJson = await response.json();
                printJSONResponse(responseJson);
            } catch (error) {
                showError(error);
            }
        }
        
        function printJSONResponse(rawResponseJSON) {
            if (rawResponseJSON.length === 0) {
                console.log(`No data found`);
                return;
            }
            console.log(rawResponseJSON);
        }
        
        function showError(error) {
            console.log(`API has problem with ${error}`);
        }