import { Post ,User} from "./models";
import { connectToDB } from "./utils";
import { unstable_noStore as noStore } from "next/cache"

// TEMPORARY DATA
// const users=[
//     {id:1, name:"Drxcy ",},
//     {id:2, name:"Brownie ",},
// ]
// const posts=[
//     {id:1, title:"Post1", body:"......", userId:1},
//     {id:2, title:"Post2", body:"......", userId:2},
//     {id:2, title:"Post3", body:"......", userId:3},
//     {id:2, title:"Post4", body:"......", userId:4},
    
// ]
export const getPosts = async() => {
    try {
        connectToDB();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch posts");
    }
    
};
export const getPost = async(slug) => {
    try {
        connectToDB();
        const post = await Post.findOne({slug});
        return post;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch post");
    }
    
};
   

export const getUser = async(id) => {
    noStore();
    try {
        connectToDB();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch user information");
    }
    
};
export const getUsers = async(id) => {
    try {
        connectToDB();
        const users = await User.find();
        return users;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch user information");
    }
    
};
    
