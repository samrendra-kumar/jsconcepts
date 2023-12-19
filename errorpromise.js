function fetchData(url)
{
 return new Promise (function (resolve,reject)
 {
 console.log("Start downloading from",url) ;
 setTimeout(function processDownloading()
 {
 let data="dummy data " ;
 console.log("download completed") ;
 resolve(data) ;
 },3000)
 })
}

let x=fetchData("samrendra");
x.then(function success(value)
{
  console.log("value is ",value );
  throw {error : "new error "}
})
.catch(function errorHandle(err)
{
 console.log("error is",err);
})
.finally (()=>{
    console.log('Experiment completed');
})
