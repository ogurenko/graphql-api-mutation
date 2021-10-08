import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema } from "graphql";
// const schema = require("./schema")
import RootQueryType from "./schema/query.js";
import RootMutationType from "./schema/mutation.js";

// Define Schema
const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
const port = process.env.PORT | 8080;

app.listen(port, () =>
  console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`)
);
