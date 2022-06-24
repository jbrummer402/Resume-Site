const mongoCollection = require('../config/mongoCollection');
const ObjectId = require('mongodb').ObjectId;
const blogDB = mongoCollection.blog;

let exportedMethods = {
    async getPosts() {
        let blogCollection = await blogDB();
        const blogList = await blogCollection.find({}).toArray();
        
        return blogList;
    },
    async showPosts(skip, take, n, y) {
        try {
            let postIndex = 0;
            let blogCollection = await blogDB();
            const posts = await blogCollection.find({}).toArray();
            let postListResult = [];
            if (skip === true) {
                if (typeof n !== 'number') {
                    throw 'N must be a number'
                }  
                postIndex = n;
            }
            if (take === true) {
                if (typeof y !== 'number') {
                    throw 'Y must be a number'
                }
                for (let i = postIndex; i < y + postIndex; i++) {
                    postListResult.push(posts[i]);
                }
            }
            else {
                for (let i = postIndex; i < 20 + postIndex; i++) {
                    postListResult.push(posts[i]);
                }
            }

            return postListResult;
        } catch (e) {
            console.log(e);
        }
        
    },
    async uploadBlogPost(id, date, title, content) {
        try {
            const blogCollection = await blogDB();

            let newBlogPost = 
                {
                    date : "",
                    title : "", 
                    content : "",
                };
            
                const insertInfo = await blogCollection.insertOne(newBlogPost)

        } catch (e) {

        }
    }, 
    async readByBlogId(id, file) {
        try {
            
        } catch (e) {

        }
    }
};

modules.exports = exportedMethods