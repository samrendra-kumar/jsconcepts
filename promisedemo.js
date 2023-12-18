
// promise takes a callback function in argument 
// to create a promise call the promise contructor 
// the promise constructor takes a callback argument 
// the callback passed inside a constructor expects two argumnet as resolve and reject 
// then inside the callback we can write any logic 



function demo1()
{
 return new Promise(function(resolve,reject){
    console.log("h1") ;
    setTimeout(function process()
    {
     console.log("wohho the task is done");
    console.log( resolve("Students are the best"))
    },60000);
    console.log("by");
 })
}

demo1() ;

function demo2(val)
{
 return new Promise(function(resolve,reject){
    console.log("Start") ;
    setTimeout(function process()
    {
     console.log("Completed timer")
     if(val%2==0)
     {
      resolve("Even") ;
     }else
     {
     reject("Odd")
     }
    },4000);
    console.log("Somewhere i am stuck ")
 })
}

a= demo2(4) ;
console.log(a);

function fetchData(url)
{
 return new Promise(function (resolve,reject)
 {
    console.log("Started");
    setTimeout(function pro(){
     let data="Dummy downloaded data"

      console.log("start download");
      resolve(data);
    },10000);
    console.log("Timer to mimic download started")
 })
}
//Promise objct will get created easily as there is no blocking piece of code ,but initially it will be pending ,As the fulfillment happens after a tine 
//of 10 sec 
console.log("Starting the progrm");
console.log("We are expecting to mimic a downloader ");
x= fetchData("www.google.com");
console.log("New promise object created successfully,but downloaded still going on")

function fetchinfo(url)
{
 return new Promise(function (resolve,reject){
   console.log("Started downloading from",url) ;
   for(let i=0;i<1000000;i++)
   {
    resolve("dummy data");
   }
 })
}

//This callback is having along a sync piece of code so JS will have to wait for promise object of creation  .
//so just after completing the for loop ,we also resolve the promise so we got a resolved promise .

let downloadPromise = fetchData("www.datadrive.com");
downloadPromise.then(function processDownload(value){
   console.log("Download promise fulfilled");
   console.log(value) ;
})
//here in this example we are getting the resolve object we can pass them new function using .then function   .
//.then() takes function as an argument that we want to execute and the argument function takes value property as parameter .