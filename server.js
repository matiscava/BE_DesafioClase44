import express from 'express';
import expressGraphql from 'express-graphql';
import graphql from 'graphql';

import productSchema from './utils/schemaGraphql.js';

import { getProduct , getAllProducts , createProduct , changeProduct , deleteProduct } from './controllers/product.js'

const { buildSchema } = graphql;
const { graphqlHTTP } = expressGraphql;

const schema = buildSchema(productSchema);

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use( '/graphql' , graphqlHTTP( {
  schema: schema,
  rootValue: {
    //QUERYs
    getAllProducts,
    getProduct,
    //MUTATIONS
    createProduct,
    changeProduct,
    deleteProduct
  },
  graphiql: true
} ) )

const PORT = 8080;

app.listen( PORT , () => {
  const msg = `servidor corriendo en http://localhost:${PORT}`
  console.log(msg);
})
