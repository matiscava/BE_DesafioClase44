class Product {
  constructor( id , timestamp , code , { title , stock , price , photo , description } ) {
    this.id = id;
    this.timestamp = timestamp;
    this.code = code;
    this.title = title;
    this.stock = stock;
    this.price = price;
    this.photo = photo;
    this.description = description;
  }
}

export default Product;