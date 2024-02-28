"use server"
import { revalidatePath } from "next/cache";
import { connectToDB } from "./utils";
import { Post } from "./models";
import { signIn, signOut } from "./auth";
import { User } from "./models";
import bcrypt from "bcryptjs";

// Add your Post in the database
 export const addPost = async(prevState,formData) => {
    
//   const title = formData.get('title');
//   const desc = formData.get('desc');
//   const slug = formData.get('slug');
const { title, desc, slug, userId} = Object.fromEntries(formData);

try {
    connectToDB();
    const newPost = new Post({
        title,
        desc,
        slug,
        userId,
    });
    await newPost.save();
   console.log("Post saved to database");
   revalidatePath("/blog");
   revalidatePath("/admin");
} catch (error) {
   console.log(error);
return {error:"Error connecting to database"}; 
}
    // console.log(title, desc, slug, userId);
};
// Delete a post from the database
 export const deletePost = async(formData) => {
    

const { id} = Object.fromEntries(formData);

try {
    connectToDB();
    await Post.findByIdAndDelete(id);
   console.log(" Deleted Post saved to database");
   revalidatePath("/blog");
   revalidatePath("/admin");
} catch (error) {
   console.log(error);
return {error:"Error connecting to database"}; 
}
    // console.log(title, desc, slug, userId);
};
// Add user 
export const addUser = async(prevState,formData) => {
    
  //   const title = formData.get('title');
  //   const desc = formData.get('desc');
  //   const slug = formData.get('slug');
  const { username,email,password,img} = Object.fromEntries(formData);
  
  try {
      connectToDB();
      const newUser = new User({
        username,
        email,
        password,
        img,
      });
      await newUser.save();
     console.log("Post saved to database");
     revalidatePath("/admin");
  } catch (error) {
     console.log(error);
  return {error:"Error connecting to database"}; 
  }
      // console.log( username,
      //   email,
      //   password);
  };
  // delete user from database
 export const deleteUser = async(formData) => {
    

const {id} = Object.fromEntries(formData);

try {
    connectToDB();
    await Post.deleteMany({userId: id});
    await User.findByIdAndDelete(id);
   console.log(" Deleted User saved to database");
   revalidatePath("/admin");
} catch (error) {
   console.log(error);
return {error:"Error connecting to database"}; 
}
};
 
 export const handleGithubLogin = async () =>
{
    "use server"
    await signIn("github")
}
 export const handleLogout = async () =>
{
    "use server"
    await signOut()
}
export const register = async (previousState, formData) => {
    const { username, email, password, img, passwordRepeat } =
      Object.fromEntries(formData);
  
    if (password !== passwordRepeat) {
      return { error: "Passwords do not match" };
    }
  
    try {
      connectToDB();
  
      const user = await User.findOne({ username });
  
      if (user) {
        return { error: "Username already exists" };
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        img,
      });
  
      await newUser.save();
      console.log("saved to db");
  
      return { success: true };
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
export const login = async (previousState, formData) => {
    const { username,password } =
      Object.fromEntries(formData);
  
   
  
    try {
      await signIn("credentials", username, password);
    } catch (err) {
      console.log(err);
      if(err.message.includes("CredentialsSign")) {
        return { error: "Incorrect username or password" };

      }
     throw err;
    }
  };