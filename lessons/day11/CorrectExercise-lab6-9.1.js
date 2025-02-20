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
 */
// Step1

/* const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const userId = 1;
const targetPostId = 1;
const allPosts = getAllPostFromUser(userId);
const targetPostContent = filterPostContent(allPosts, targetPostId);
console.log(targetPostContent);

function getAllPostFromUser(userId) {
    let allPosts = []
    fetch(API_ENDPOINT)
    .then(function (response) {
    return response.json();
    })
    .then(function (posts) {
    allPosts = posts.filter()
    });
    return allPosts;
} */

// Step2 : Use Promise to handle asynchronous no validate user

/* const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const userId = 1;
const targetPostId = 1;

getAllPostFromUser(userId)
    .then(function (allPosts) {
        // Synchronous start from here
        const targetPostContent = filterPostContent(allPosts, targetPostId);
        if (!targetPostContent) {
            console.log('The post with id ${targetPostId} is not found!');
        } else {
            console.log(targetPostContent);
        }
    });

function getAllPostFromUser(userId) {
    return fetch(API_ENDPOINT)
        .then(function (response) {
            return response.json();
        })
        .then(function (allPosts) {
            return allPosts.filter(function (post) {
                return post.userId === userId;
            });
        });
}

function filterPostContent(allPosts, targetPostId) {
// Find neu co se tra ve object neu khong se tra ve undefined
    const targetPost = allPosts.find(function (post) {
        return post.id === targetPostId;
    });
    return targetPost;
}
 */



// Step3 : Use Promise to handle asynchronous WITH validate user
/* const USER_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
const POST_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const userId = 1;
const targetPostId = 8;

getAllPostFromUser(userId)
    .then(function (allPosts) {
        // Synchronous start from here
        const targetPostContent = filterPostContent(allPosts, targetPostId);
        if (!targetPostContent) {
            console.log("The post with id ${targetPostId} is not found!");
        } else {
            console.log(targetPostContent);
        }
    });

function getAllPostFromUser(userId) {
    return fetch(USER_ENDPOINT)
        .then(function (response) {
            return response.json();
        })
        .then(function (allUsers) {
            let hasUser = false;
            for (const user of allUsers) {
                if (user.id === userId) {
                    hasUser = true;
                    break;
                }
            }
            if (hasUser) {
                return fetch(POST_ENDPOINT)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (allPosts) {
                        return allPosts.filter(function (post) {
                            return post.userId === userId;
                        });
                    });
            } else {
                console.log('User with id ${userId} is not found!');
                process.exit(1);
            }
        });
}
function filterPostContent(allPosts, targetPostId) {
    // Find neu co se tra ve object neu khong se tra ve undefined
        const targetPost = allPosts.find(function (post) {
            return post.id === targetPostId;
        });
        return targetPost;
    } */

// Step4 : Use Promise to handle asynchronous COMPLETELY

/* readline = require('readline-sync');

const USER_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
const POST_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const userId = 1;
const targetPostId = 1;

// Run the main app
app();

function app() {
    let isPlaying = true;
    while (isPlaying) {
        printAppMenu();
        getUserOption().then(function (userOption) {
            switch (userOption) {
                case 1:
                    getAllPostFromUser().then(app);
                    break;
                case 2:
                    getPostContent().then(app);
                    break;
                case 0:
                    isPlaying = false;
                    break;
                default:
                    console.log('Nhap lui roi Teo oi!');
            }
        });
    }
}

function getUserOption() {
    return new Promise(function (resolve, reject) {
        const userOption = readline.question('Enter your option: ');
        resolve(userOption);
    });
}

function printAppMenu() {
    console.log('1. Get all posts from a user');
    console.log('2. Get a post content');
    console.log('0. Exit');
}
function getAllPostFromUser() {
    return new Promise(function (resolve, reject) {
        fetch(USER_ENDPOINT)
            .then(function (response) {
                return response.json();
            })
            .then(function (allUsers) {
                let hasUser = false;
                for (const user of allUsers) {
                    if (user.id === userId) {
                        hasUser = true;
                        break;
                    }
                }
                if (hasUser) {
                    return fetch(POST_ENDPOINT)
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (allPosts) {
                            return allPosts.filter(function (post) {
                                return post.userId === userId;
                            });
                        });
                } else {
                    console.log('User with id ${userId} is not found!');
                    process.exit(1);
                }
            })
            .then(function (allPosts) {
                resolve(allPosts);
            });
    });
}
 */
// => CORRECT EXERCISE and FIX bug of promise and swith case


/* function app() {
    let isPlaying = true;
    while (isPlaying) {
        printAppMenu();
        getUserOption().then(function (userOption) {
            switch (userOption) {
                case 1:
                    getAllPostFromUser().then(function (allPosts) {
                        console.log(`All Posts for User ${userId}:`);
                        allPosts.forEach(post => console.log(JSON.stringify(post, null, 2)));
                        app(); // Continue the app loop
                    }).catch(function (error) {
                        console.error('Error fetching posts:', error);
                        app(); // Continue the app loop
                    });
                    break;
                case 2:
                    getPostContent().then(function (postContent) {
                        console.log(`Post Content: ${JSON.stringify(postContent, null, 2)}`);
                        app(); // Continue the app loop
                    }).catch(function (error) {
                        console.error('Error fetching post content:', error);
                        app(); // Continue the app loop
                    });
                    break;
                case 0:
                    isPlaying = false;
                    console.log('Exiting...');
                    break;
                default:
                    console.log('Invalid option, please try again.');
                    app(); // Continue the app loop
            }
        });
    }
} */
    const readline = require('readline-sync');

    const USER_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
    const POST_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
    
    // Run the main app
    app();
    
    function app() {
        let isPlaying = true;
        while (isPlaying) {
            handlePromise();
            break;
        }
    
        function handlePromise() {
            if (!isPlaying) {
                return;
            }
            printAppMenu();
            getUserOption()
                .then(function (userOption) {
                    switch (userOption) {
                        case 1:
                            return handleGetAllPostFromUser();
                        case 2:
                            return handleGetPostContent();
                        case 0:
                            isPlaying = false;
                            console.log('Exiting...');
                            return Promise.resolve();
                        default:
                            console.log('Invalid option');
                            return Promise.resolve();
                    }
                })
                .then(handlePromise)
                .catch(function (error) {
                    console.error('Error:', error);
                    handlePromise();
                });
        }
    
        function getUserOption() {
            return new Promise(function (resolve) {
                const userOption = Number(readline.question('Enter your option: '));
                resolve(userOption);
            });
        }
    
        function printAppMenu() {
            console.log('1. Get all posts from a user');
            console.log('2. Get a post content');
            console.log('0. Exit');
        }
    
        function handleGetAllPostFromUser() {
            return new Promise(function (resolve) {
                const userId = Number(readline.question('Enter user ID: '));
                getAllPostFromUser(userId)
                    .then(function (allPosts) {
                        if (allPosts.length > 0) {
                            console.log(`All Posts for User ${userId}:`);
                            allPosts.forEach(post => console.log(JSON.stringify(post, null, 2)));
                        } else {
                            console.log(`No posts found for User ${userId}`);
                        }
                        resolve();
                    })
                    .catch(function (error) {
                        console.error('Error fetching posts:', error);
                        resolve();
                    });
            });
        }
    
        function handleGetPostContent() {
            return new Promise(function (resolve) {
                const userId = Number(readline.question('Enter user ID: '));
                const postId = Number(readline.question('Enter post ID: '));
                getAllPostFromUser(userId)
                    .then(function (allPosts) {
                        const postContent = filterPostContent(allPosts, postId);
                        if (postContent) {
                            console.log(`Post Content: ${JSON.stringify(postContent, null, 2)}`);
                        } else {
                            console.log(`Post with id ${postId} is not found!`);
                        }
                        resolve();
                    })
                    .catch(function (error) {
                        console.error('Error fetching post content:', error);
                        resolve();
                    });
            });
        }
    
        function getAllPostFromUser(userId) {
            return fetch(POST_ENDPOINT)
                .then(function (response) {
                    return response.json();
                })
                .then(function (allPosts) {
                    return allPosts.filter(function (post) {
                        return post.userId === userId;
                    });
                })
                .catch(function (error) {
                    console.error('Error fetching data:', error);
                    return [];
                });
        }
    
        function filterPostContent(allPosts, targetPostId) {
            return allPosts.find(function (post) {
                return post.id === targetPostId;
            });
        }
    }