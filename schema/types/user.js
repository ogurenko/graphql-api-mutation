import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import postType from "./post";
import Posts from "../../data/posts";



const userType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    username: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    posts: {
      type: new GraphQLList(postType),
      resolve(parent, args) {
        const posts = Posts.filter(
          (posts) => posts.user_id === JSON.stringify(parent.id)
        );
        return posts;
      },
    },
  }),
});


export default userType;