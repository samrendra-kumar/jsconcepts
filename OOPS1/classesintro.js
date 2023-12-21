class Product{
    constructor(n,p)
    {
      //constructor function to create new real life instances
      this.name= n ; //data member function 

      this.price=p ; //data member function 
    }

    //member function 
    displayProduct()
    {
    console.log(this.name,this.price)
    //whenever u want to access data member function into method function u can use by using this keyword .
    }
    buyProduct()
    {

    }

}

let iphone= new Product("Iphone 11",5000);
let vixi = new Product("Macbook air",10000);
console.log(iphone,vixi);
iphone.displayProduct() ;