import crypto from 'crypto';
import Product from '../daos/Product.js';

const products = [];

const getProduct = async ({ id }) => {
  try{
    const objetoFiltrado = await products.filter(obj => obj.id === id);
    if(objetoFiltrado[0]===undefined){
      throw new Error('Product not found.')
    }else{
      return objetoFiltrado[0];
    }
  }catch(err){console.error(`Error: ${err}`);}
}

const getAllProducts = async () => {
  try{
    return await products;
  }catch(err){console.error(`Error: ${err}`);}
}

const createProduct = async (productData) => {
  try{
    const productObj = JSON.parse(JSON.stringify(productData)).datos
    const productsList = await getAllProducts();
    const date = new Date().toLocaleString();
    let nextCode = 1;
    const id = crypto.randomBytes(10).toString('hex');

    if(productsList.length !== 0 ){
      for (let i=0;i<productsList.length ;i++) {
        while( productsList[i].code >= nextCode ){
          nextCode++;
        }
      }
    }
    const newProduct = new Product(id,date,nextCode,productObj)
    products.push(newProduct)
    return newProduct
  }catch(err){console.error(`Error: ${err}`);}
}

const deleteProduct = async ( { id } ) => {
  try{
    const productSelected = await products.filter(obj => obj.id === id);
    const product = productSelected[0]
    if ( !productSelected || productSelected === undefined || productSelected.length === 0 ) {
      throw new Error('Product not found.')
    }
    const productIndex = products.findIndex( (product) => product.id === id );
    products.splice(productIndex,1)
    return product;
  }catch(err){console.error(`Error: ${err}`);}
}

const changeProduct = async ( { id , datos } ) => {
  try{    
    const productObj = JSON.parse(JSON.stringify(datos));
    const productSelected = await products.filter(obj => obj.id === id);

    const product = productSelected[0]

    if ( !productSelected || productSelected === undefined || productSelected.length === 0 ) {
      throw new Error('Product not found.')
    }
    const productIndex = products.findIndex( (product) => product.id === id );
    const date = new Date().toLocaleString();
    const newInfo = {...datos,timestamp:date}
    const productChanged = {...product,...newInfo}
    products.splice(productIndex,1,productChanged)
    
    return productChanged
  }catch(err){console.error(`Error: ${err}`);}
}

export {
  getProduct,
  getAllProducts,
  deleteProduct,
  changeProduct,
  createProduct,
  products
}