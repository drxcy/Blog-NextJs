// import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github";
// import Google from "next-auth/providers/google";
// import { connectToDB } from "./utils";
// import { User } from "./models";
// import  CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import { authConfig } from "./auth.config";
// const login = async(credentials)=> {
//   try {
//     connectToDB();
//     const user = await User.findOne({username: credentials.username});
//     if(!user)
//     {
//       throw new Error("User not found");
//     }
//     // const isPasswordCorrect = await bcrypt.verify(credentials.password);
//     const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password);
//     if(!isPasswordCorrect)
//     {
//       throw new Error("Wrong Password !!!");
//     }
//     return user;
//   } catch (error) {
//     console.log(error);
//     throw new Error("Couldn't login");
//   }
// }
// export const{
// handlers:{ GET,POST},
//  auth, 
//  signIn,
//  signOut, } 
//  = NextAuth({
//   ...authConfig,
//   providers:[
//     GitHub({
//       clientId: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_SECRET_KEY,
//     }),
//     CredentialsProvider({
//       async authorize(credentials){
//         try {
//           const user = await login(credentials);
//           return user;
//         } catch (error) {
//           console.log(error.message);
//           return null;
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async signIn({user,account,profile})
//     {
//       return this.signIn(user,account,profile)
//       if(account.provider==="github")
//       {
//         connectToDB();
//         try {
//           const user = await User.findOne({ email:profile.email});
//           if(!user)
//           {
//             const newUser = new User({
//               username:profile.login,
//               email:profile.email,
//               image:profile.avatar_url,
//             });
//             await newUser.save();
           
//           }
//         } catch (error) {
//           console.log(error);
//           return false;
//         }

//       }
//       return true;
//     },
//     ...authConfig.callbacks,
//   },
// });
// import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github";
// import Google from "next-auth/providers/google";
// import { connectToDB } from "./utils";
// import { User } from "./models";
// import  CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import { authConfig } from "./auth.config";

// const login = async (credentials) => {
//   try {
//     connectToDB();
//     const user = await User.findOne({ username: credentials.username });
//     if (!user) {
//       throw new Error("User not found");
//     }
//     // const isPasswordCorrect = await bcrypt.verify(credentials.password);
//     const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
//     if (!isPasswordCorrect) {
//       throw new Error("Wrong Password!!!");
//     }
//     return user;
//   } catch (error) {
//     console.log(error);
//     throw new Error("Couldn't login");
//   }
// };

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//  ...authConfig,
//   providers: [
//     GitHub({
//       clientId: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_SECRET_KEY,
//     }),
//     CredentialsProvider({
//       async authorize(credentials) {
//         try {
//           const user = await login(credentials);
//           return user;
//         } catch (error) {
//           console.log(error.message);
//           return null;
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async signIn({ user, account, profile }) {
//       return this.signIn(user, account, profile);
//       if (account.provider === "github") {
//         connectToDB();
//         try {
//           const existingUser = await User.findOne({ email: profile.email });
//           if (!existingUser) {
//             const newUser = new User({
//               username: profile.login,
//               email: profile.email,
//               image: profile.avatar_url,
//             });
//             await newUser.save();
//           }
//         } catch (error) {
//           console.log(error);
//           return false;
//         }
//       }
//       return true;
//     },
//    ...authConfig.callbacks,
//   },
// });
// 
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { connectToDB } from "./utils";
import { User } from "./models";
import  CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });
    if (!user) {
      throw new Error("User not found");
    }
    // const isPasswordCorrect = await bcrypt.verify(credentials.password);
    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
    if (!isPasswordCorrect) {
      throw new Error("Wrong Password!!!");
    }
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't login");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET_KEY,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          console.log(error.message);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      return this.signIn(user, account, profile);
      if (account.provider === "github") {
        connectToDB();
        try {
          const existingUser = await User.findOne({ email: profile.email });
          if (!existingUser) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });
            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
  },
});