function Product(name,brand,price,description) {
  this.name= name;
  this.brand= brand;
  this.price= price;
  this.description= description;
  this.sold= false;
  // Complete the constructor function
}

Product.prototype.changePrice= function(price){
  this.price= price;
}
Product.prototype.toggleStatus=function(){
  if(this.sold){
    this.sold= false;
  }else{
    this.sold= true;
  }
}

// Create these two methods in Product prototype :-
// changePrice
// toggleStatus

// Do not change this
export default Product;
