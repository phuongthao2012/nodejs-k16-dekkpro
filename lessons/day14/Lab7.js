const Post = require('./Post.js');
const RequestHandler = require('./RequestHandler.js');
let userId = 1;
let postId = 1;
// Initialize the RequestHandler
const BASE_URL = 'https://jsonplaceholder.typicode.com';

main();
async function main() {
    const requestHandler = new RequestHandler(BASE_URL);
    const post = await requestHandler.getTargetPost(userId, postId);
    const allPosts = await requestHandler.getAllPosts(userId);
    if (!post) {
        console.log(`Post with ID ${postId} not found! for the user ${userId}`);
    }
    else {
        console.log(`Post with ID ${postId} for the user ${userId}`);
        console.log(post.body);
        _printPostContent(post);
        

    }
    if (allPosts.length === 0) {
        console.log(`No posts found for user ${userId}`);
    } else {
        console.log(`All posts for user ${userId}:`);
        for (const post of allPosts) {
            _printPostContent(post);
        }

    }
}
function _printPostContent(post) {
    const { userId, postId, title, body } = post;
    console.log(`Post content: `);
    console.log(`\t userId: ${userId}`);
    console.log(`\t postId: ${postId}`);
    console.log(`\t Title: ${title}`);
    console.log(`\t Body: ${body}`);
}
