
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