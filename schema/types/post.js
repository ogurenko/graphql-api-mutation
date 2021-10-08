import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import userType from "./user";
import Users from "../../data/users";


const postType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    text: { type: new GraphQLNonNull(GraphQLString) },
    user_id: { type: GraphQLID },
    user: {
      type: new GraphQLNonNull(userType),
      resolve(parent, args) {
        const user = Users[parent.user_id - 1];
        return user;
      },
    },
  }),
});


export default postType;