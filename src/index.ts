import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { resolvers } from './resolvers/UserResolver';
import { userSchema } from './schema/UserSchema';

const schema = buildSchema(userSchema);

const app = express();
app.use(morgan('combined'));
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  }),
);

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
