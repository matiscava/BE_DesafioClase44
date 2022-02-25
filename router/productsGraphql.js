
import expressGraphql from 'express-graphql';
import graphql from 'graphql';

import productSchema from '../utils/schemaGraphql.js';

import { getProduct , getAllProducts , createProduct , changeProduct , deleteProduct } from '../controllers/product.js'


const { buildSchema } = graphql;
const { graphqlHTTP } = expressGraphql;

const schema = buildSchema(productSchema);


const productsGraphql = graphqlHTTP( {
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
  } )

export default productsGraphql