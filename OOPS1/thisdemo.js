const obj={
    name:"Sanket " ,
    display:function()
    {
        console.log(this,"is the calling site");
    }
}

//when a regular function expression is used as a method in an object,
//this refers to the object itself and the value of this is dynamically determined 
//at runtime based on how the function is called 

const obj1={
    name:"Sarthak" ,
    display:()=>
    {
     console.log(this,"is the calling site");
    }
}
obj.display() ;
obj1.display() ;

//in the case of obj1.display(), the arrow function is 
//defined within the global scope (or the nearest non-arrow function), 
//so this in the arrow function refers to the global object 
//(window in a browser environment or global in Node.js).