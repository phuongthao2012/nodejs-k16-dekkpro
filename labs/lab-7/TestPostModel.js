const RequestHandler = require('./RequestHandler');
const readline = require('readline-sync');

const POST_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

async function main() {
    const requestHandler = new RequestHandler();
    let option;

    do {
        console.log(`\n==== MENU ===`);
        console.log(`1. Get POST content and print the related post`);
        console.log(`2. Print all related posts`);
        console.log(`0. Exit!`);
        console.log(`===============`);
        
        option = parseInt(readline.question("Please enter your choice: "), 10);

        switch (option) {
            case 1:
                const userId1 = Number(readline.question('Enter User ID: '));
                const postId = Number(readline.question('Enter Post ID: '));
                console.log(`\nFetching details for User ID: ${userId1}, Post ID: ${postId}...\n`);
                await requestHandler.printTargetPost(POST_ENDPOINT, userId1, postId);
                break;

            case 2:
                const userId2 = Number(readline.question('Enter User ID: '));
                console.log(`\nFetching all posts for User ID: ${userId2}...\n`);
                await requestHandler.printAllPosts(POST_ENDPOINT, userId2);
                break;

            case 0:
                console.log('Exiting...');
                break;

            default:
                console.log('Invalid option. Please try again.');
        }

    } while (option !== 0);
}

main();
