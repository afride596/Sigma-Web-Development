// function employee(name) {
//     console.log(`hey ${name} how are you bro?`);
//     console.log(`hey ${name} what are you eating bro`);
//     console.log(`hey ${name} which account need to withdraw bro`);
// }
// employee("John");
// // employee("Mike");
// // employee("Jane"); 

// //  new function model arrow function
// (name)=>{
//     console.log(`hey ${name} how are you bro?`);
//     console.log(`hey ${name} what are you eating bro`);
//     console.log(`hey ${name} which account need to withdraw bro`);
// }
// ("JOHN")


// function sum(a,b) {
//     return a+b
// }
// console.log(sum(5,6));
// let result1=sum(6,5)
// let result2=sum(5,65)
// let result3=sum(626,155)
// console.log(result1);
// console.log(result2);
// console.log(result3);



// Arrow Function

// const functions = ()=>{

// }
 
// Here we are transfering one variable one function variable name to another variable  

 const func1=function add(a, b) {
    return a + b;
  }
  let sum=func1(5,6)
// console.log(` Hello how are you bro ${func1(5,6)} `);  
console.log(` Hello how are you bro ${sum} `);  
//  add(1, 2);

const object=(x)=>{
    return {
        name:"John",
        age:x,
    }
}
console.log(object(6));