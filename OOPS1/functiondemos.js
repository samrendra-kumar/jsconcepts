function Product(n,p)
{
    this.name= n ;
    this.price= p ;
    this.display = function()
    {
        console.log(this.name,this.price);
    }
    return 10 ;
}

const p1=new Product("iphone",100000) ;
console.log(p1) ;
p1.display();
//with the use of new it will always return this whether we write or not or anything other we wiil return 

const p2=Product("ksfnv",34345) ;
console.log(p2);
//without new we can't use this keyword undefined
//in function without new we can't call functions
//it will return 10 
