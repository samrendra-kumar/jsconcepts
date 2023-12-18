// A promise is a special Js Objects that also  are considered as a
// readibility enhancer .They get immediately returned from a function 
// setup to return a promise WE can also add a functionality we want to add
// until the future task is done .A promise is in one of these states 
//  . pending : initial state ,neither fulfilled nor rejected .
//  . fulfilled : meaning that the operation was completed successfully .
//  .rejected : meaning that operation failed .

//  what's the main reason of using promise  ? 
//   .The first reason is prevention of callback hell but for that only 
//    promise is not used bcoz if we will us promise then there is also a chance of promise hell .
//   . the most valid reason  is inversion of control withthe use of this problem is 
//    eliminated .

   //declaration of promise 

   function doSomething()
   {
    return new Promise (function task(resolve,reject)
    {
     setTimeout(()=>{
      console.log("Did something") ;
      resolve("task done ");
     },2000)
    }
    )}

    x=doSomething() ;
    console.log(x) ;

    // we can also use functional chaining for this 
    doSomething()
    .then(function (result){
      return doSomethingelse(result)
    })
    .then (function (newResult)
    {
      return dothirdthing(result) 
    })
    .then (function (finalresult)
    {
      console.log(`Got the final result :${finalresult}`)
    })
    .catch(failureCallback);

    // nested chain of a promise

    doSomething()
    .then((url)=>fetch(url))
    .then((res)=>res.json())
    .then((data)=>
    {
      listOfIngredients.push(data);
    })
    .then(()=>
    {
     console.log(listOfIngredients);
    })