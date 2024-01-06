//synchronus : synchronus means the code run in the sequence instruction given by the program . Each instruction wait for previous instruction to execute

//Asynchronus :Due to synchronus programing .sometimes imp instruction get blocked due to some previous instruction
// which cause delay in ui.For that we use asynchronus cede  execute next immediatly and doesn't block the flow



function getData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`data ${id}`);
      resolve("Success");
    }, 3500);
  });
}
// Nested callback (pyramid of doom)
// getData(1,()=>{
//     console.log('Getting Date 2........');

//     getData(2,()=>{
//             console.log('Getting Date 3........');
//             getData(3)
//         })
//     })
 // For sloving the callback we use promise

// Promise 
// channing then catch

// getData(1)
//   .then(() => {
//     return getData(2);
//   }).catch(()=>{
//     console.log('error in getting data 2')
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

//   Async function alway return a promise

// Async-Wait
// async function getwheaterdata() {
//   console.log("getting data 1");
//   await getData(1); //1st call
//   console.log("getting data 2");
//   await getData(2); //2nd call
//   console.log("getting data 3");
//   await getData(3); //3rd call
//   console.log("getting data 4");
//   await getData(4); //4th call
//   console.log("Completed");
// }
// getwheaterdata();

// iife is function is called immediately as soon as it defined
(async function(){
  console.log("getting data 1");
  await getData(1); //1st call
  console.log("getting data 2");
  await getData(2); //2nd call
  console.log("getting data 3");
  await getData(3); //3rd call
  console.log("getting data 4");
  await getData(4); //4th call
  console.log("Completed");
})();




// This all are the way that i have tried to learn so that i kept all this at comment

// function getData(id,getnextData){
//     setTimeout(()=>{
//         console.log(`data ${id}`)
//         // console.log("completd")
//         if(getnextData){
//           getnextData()

//         }
//     },3500)
// }

//  function api(){
//     return new Promise((reslove,reject)=>{
//         setTimeout(()=>{
//             // console.log('weather');
//             console.log("weatherData");
//             reslove("completed")
//         },1000)
//     })
// }

// Promise.all([getData(1), getData(2), getData(3)])

// Acctual Way of Promise channing
// getData(1).then((res) => {
//   getData(2).then((res) => {
//     getData(3).then((res) => {
//       getData(4).then((res) => {
//         console.log(res);
//       });
//     });
//   });
// });

//promise chanin
// let p1 = getData(1);
// p1.then((res) => {
//   console.log(res);
//   getData(2).then(() => {
// console.log(res);
// });
// });

// await pauses the execution of its surrounding async function until the promise is settled

// it has a better way to write upper code
