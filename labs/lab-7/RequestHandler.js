/**
 * ****************************
 * Class RequestHandler
 * Todo:
 * - Print target post
 * - Print all posts
 * ****************************
 */
const Post = require('./Post'); // Import class Post

class RequestHandler {
    // fetch all Post with userID and set into Post object
    // constructor this object for handle the POST which is raw data
    async _getAllPosts(POST_ENDPOINT) {
        try {
            const response = await fetch(POST_ENDPOINT);
            const allPosts = await response.json();
            // this time normaly have value: array of raw object
            //    console.log(allPosts);

            return allPosts
                // create array of POST object
                .map(post => new Post(post.userId, post.id, post.title, post.body));
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }
    // this method for handle the POST after construction

    async printTargetPost(POST_ENDPOINT, userId, postId) {
        // handle the POST, add raw data into Post object
        const allPosts = await this._getAllPosts(POST_ENDPOINT);
        const userPosts = allPosts.filter(post => post.userId === userId);
        const targetPost = userPosts.find(post => post.postId === postId);

        if (targetPost) {
            console.log(targetPost);

        } else {
            console.log(`Post with ID ${postId} not found!`);
        }
    }

    // this method for handle the POST after construction
    async printAllPosts(POST_ENDPOINT, userId) {
        const allPosts = await this._getAllPosts(POST_ENDPOINT);
        const userPosts = allPosts.filter(post => post.userId === userId);

        if (userPosts.length > 0) {
            console.log(`\nAll Posts for User ID: ${userId}\n`);
            userPosts.forEach(post => {
                console.log(post);
            });
        } else {
            console.log(`No posts found for User ID ${userId}`);
        }
    }


}

module.exports = RequestHandler;
