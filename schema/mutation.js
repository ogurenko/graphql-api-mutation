import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { readFile, writeFile } from "fs";
import Users from "../data/users";
import Posts from "../data/posts";
import userType from "./types/user";
import postType from "./types/post";
import { inputUserType } from "./types/input";
import { inputPostType } from "./types/input";

// const Users = [];
// const Posts = [];


// readFile("C:/Users/gaga/Desktop/FreeCodeCamp/CleverProgrammer/graphql-api/data/users.js",{encoding: "utf8"}, (err,data) => {
//   if (err) throw err
//   console.log(JSON.parse(data));
// })


const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    createUser: {
      type: new GraphQLNonNull(userType),
      args: { input: { type: new GraphQLNonNull(inputUserType) } },
      resolve: async (parent, args) => {
        const user = ({
          id: Number(args.input.id),
          username: args.input.username,
          email: args.input.email,
        });

        Users.push(user);
        console.log(Users);

        // writeFile(
        //   "C:/Users/gaga/Desktop/FreeCodeCamp/CleverProgrammer/graphql-api/data/users.js",
        //   JSON.stringify(user),{flag: "a"},
        //   (err) => {
        //     if (err) throw err;
        //   }
        // );
        // return Users.filter(
        //   (users) => users.id === JSON.stringify(args.input.id)
        // );
        return user
      },
    },
    createPost: {
      type:new GraphQLNonNull(postType),
      args: { input: { type: new GraphQLNonNull(inputPostType) } },
      resolve: async (_, args) => {
        const post = {
          id: Number(args.input.id),
          title: args.input.title,
          text: args.input.text,
          user_id: Number(args.input.user_id),
        };
        Posts.push(post);
        console.log(Posts);
        // writeFile(
        //   "C:/Users/gaga/Desktop/FreeCodeCamp/CleverProgrammer/graphql-api/data/posts.json",
        //   JSON.stringify(post),
        //   (err) => {
        //     if (err) throw err;
        //   }
        // );
        // return Posts.filter(
        //   (posts) => posts.id === JSON.stringify(args.input.id)
        // );
        return post
      },
    },
  }),
});

export default RootMutationType;
