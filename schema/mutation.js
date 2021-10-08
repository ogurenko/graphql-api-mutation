import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import Users from "../data/users";
import Posts from "../data/posts";
import userType from "./types/user";
import postType from "./types/post";
import { inputUserType } from "./types/input";
import { inputPostType } from "./types/input";




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
       
        return post
      },
    },
  }),
});

export default RootMutationType;
