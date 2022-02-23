const productSchema = `
  type Product {
    id: ID!,
    title: String,
    stock: Int,
    price: Int,
    timestamp: String,
    photo: String,
    description: String,
    code: Int 
  }
  input ProductInput {
    title: String,
    stock: Int,
    price: Int,
    photo: String,
    description: String
  }
  type Query {
    getProduct(id: ID!): Product,
    getAllProducts(campo: String, Valor: String): [Product]
  }
  type Mutation {
    createProduct(datos: ProductInput): Product,
    changeProduct(id: ID!, datos: ProductInput): Product,
    deleteProduct(id: ID!): Product
  }
`

export default  productSchema;