import { GraphQLObjectType, GraphQLID, GraphQLList } from "graphql";

import Users from "../data/users";
import Posts  from "../data/posts";
// const Users = [];
// const Posts = [];
import userType  from "./types/user";
import postType from "./types/post";

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    user: {
      type: userType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const user = Users[args.id - 1];
        return user;
      },
    },
    users: {
      type: GraphQLList(userType),
      resolve(parent, args) {
        const users = Users;
        return users;
      },
    },
    post: {
      type: postType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        const post = Posts[args.id - 1];
        return post;
      },
    },
    posts: {
      type: new GraphQLList(postType),
      resolve(parent, args) {
        return Posts;
      },
    },
  }),
});

export default RootQueryType;
