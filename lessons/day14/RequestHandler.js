const Post = require("./Post.js");

class RequestHandler {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }

    async getTargetPost(targetUserId, targetpostId) {
        // const targetUserPosts = this._getAllPosts(userId);
        /**
        * 2. Filter out the target pos:
        targetUserPosts.find(function(post){
        return post.postId === postId;
        }
        })
        */
        const targetUserPosts = await this._getAllPosts(targetUserId);
        const targetPost = targetUserPosts.find(function (post) {
        //    response tra ve voi cau truc la : {key:value}, goi la post.id vi cau truc tra ve co key la id, khong phai postid
            return post.id === targetpostId;
        });
        // if (targetPost==undefined)
        // console.log(targetPost);
        
        if (!targetPost) {
            return undefined;
        }
        // define variable targetPost voi viec hung cac thong tin trong object theo key nhu sau
        const {userId, id, title, body} = targetPost;
        console.log("targetPost", targetPost);
        // constructor new object la Post voi cac thong tin la bien duoc lay tu targetPost
        return new Post(userId, id, title, body);
    }

    async getAllPosts(targetUserId) {
        const allPost = [];
        const targetUserPosts = await this._getAllPosts(targetUserId);
        // Push new object to new array
        for (const post of targetUserPosts) {
            const {userId, postId, title, body} = post;
            allPost.push(new Post(userId, postId, title, body));
        }

        return allPost;
    }

    async _getAllPosts(userId) {
        const postEndpoint = `${this._baseUrl}/posts`;
        const response = await fetch(postEndpoint);
        const allPosts = await response.json();
        return allPosts.filter(function (post) {
            return post.userId === userId;
        });
    }
}
module.exports = RequestHandler;