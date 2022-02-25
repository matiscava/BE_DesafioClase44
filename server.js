import express from 'express';

import productsGraphql from './router/productsGraphql.js';



const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use( '/api/products' , productsGraphql)

const PORT = 8080;

app.listen( PORT , () => {
  const msg = `servidor corriendo en http://localhost:${PORT}`
  console.log(msg);
})
