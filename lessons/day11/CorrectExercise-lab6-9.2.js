/* //**

Get a target post's content for user

    A. Check if user is existing
        1. Get all posts for the user
        2. Filter out the target post content
            if the postID is existing
                print out the post content
            else
                the postID is not found

    B. Print out user is not found


    Copy a line: Alt + Shift + Down arrow key
    Remove a line: Ctrl + X or Shift + Delete or Alt + Shift + K
    Open a function, keep key: Alt and click on the function
* ****************************
// */
const readline = require('readline-sync');
const POST_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

showMenu();

async function showMenu() {
    let option;
    do {
        console.log(`====MENU===`);
        console.log(`1. Get POST content and print the related post`);
        console.log(`2. Print all related posts`);
        console.log(`0. Exit!`);
        console.log(`===========`);
        option = parseInt(readline.question("Please enter your choice: "));
        switch (option) {
            case 1:
                await handleGetPostContent();
                break;
            case 2:
                await handleGetAllPostFromUser();
                break;
            case 0:
                console.log('Exiting...');
                break;
            default:
                console.log('Invalid option');
        }
    } while (option !== 0);
}

async function handleGetAllPostFromUser() {
    const userId = Number(readline.question('Enter user ID: '));
    try {
        const allPosts = await getAllPostFromUser(userId);
        if (allPosts.length > 0) {
            console.log(`All Posts for User ${userId}:`);
            allPosts.forEach(post => console.log(JSON.stringify(post, null, 2)));
        } else {
            console.log(`No posts found for User ${userId}`);
        }
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

async function handleGetPostContent() {
    const userId = Number(readline.question('Enter user ID: '));
    const postId = Number(readline.question('Enter post ID: '));
    try {
        const allPosts = await getAllPostFromUser(userId);
        const postContent = filterPostContent(allPosts, postId);
        if (postContent) {
            console.log(`Post Content: ${JSON.stringify(postContent, null, 2)}`);
        } else {
            console.log(`Post with id ${postId} is not found!`);
        }
    } catch (error) {
        console.error('Error fetching post content:', error);
    }
}

// filter POST first, get this function as common
async function getAllPostFromUser(userId) {
    try {
        const response = await fetch(POST_ENDPOINT);
        const allPosts = await response.json();
        return allPosts.filter(post => post.userId === userId);
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

function filterPostContent(allPosts, targetPostId) {
    return allPosts.find(post => post.id === targetPostId);
}
/* 
function filterPostContent(allPosts, targetPostId) {
    return allPosts.find(function(post) {
        return post.id === targetPostId;
    });
} */