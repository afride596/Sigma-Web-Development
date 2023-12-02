// Arrays are variables which hold more than one value 

// const fruit=["banana","apple","grape"]
// const a=[7,"harry",false]

// let arr=["fgfdbcvb",2,3,4,5,7]
// // let arr="jhhg"
// arr[0]='YUGHGFG'
// // console.log(arr)
// // console.log(arr.length);
// console.log(arr[0],typeof arr);

// Array Methods 
// push() : add element to the end of array
// pop() : remove last element from an array and return it
// shift(): removes first element from array and returns it
// unshift(): adds elements at beginning of array
// slice(): extract part of array
// splice(): change content of array
// indexOf(): find position of specified element in array
// includes(): check if array contains specific element
// join(): combine all elements of array into string with optional separator
// reverse(): reverses the order of array
// sort(): sorts the array
// forEach(): apply function on each element of array
// map(): create new array by applying function on each element
// filter(): creates new array with elements that pass test implemented by provided function
// reduce(): Apply a reducer function (that you provide) on each element of the array, resulting in single output value
// reduce(): reduces the array to a single value
// every(): checks if all elements passes the test implemented by provided function
// some(): checks if any element passes the test implemented by provided function
// fill(): fills the array with specified value
// copyWithin(): copies parts of an array to another location in the same array
// arr.push("orange");
// arr.pop();
// arr.shift();
// arr.unshift("mango")
// arr.slice(1,3);
// arr.splice(1,2,"kiwi","blueberry");

// let array=['12345',12346]
// toString():we can convert an array to string with commas seperated by values
// console.log(array.toString());

// join():joins all the array element with help of seperator
// and it return a string 
// console.log(array.join(" and "));

// pop():remove last element from an array
// update the orginal Array and returns the popped value 

// console.log(array.pop())
// console.log(array)
// 
// push(): add new  element at end of the array with help push method and return it return new array length and modifed or updated the orginal array 

// console.log(array.push("Hello"));
// console.log(array)

// shift():Remove first element from an array and return the removed value and updated an orginal array
// console.log(array.shift(12345));
// console.log(array);



// unshift():Adds one or more elements to the beginning of an array and returns the new length of the array
// console.log(array.unshift('apple'));
// console.log(array);

// delete():
// Deleting Elements:
// delete() operator is use to delete the element from an array and memory was allocated of deleted it will be undefined
// Delete is used to remove an element at a specific index position from an array. It does not modify the original array but instead returns the deleted element



// console.log(delete array[0]);
// console.log(array[0]);


// concat():used to join an arrays with given arrays and return new array without changing an orginal array

// let a=[1,2,3,4]
// let b=[5,6,7,8]
// let c=[9,10,11,12]
// console.log(a.concat(b,c));
// console.log(a); doesnot change orginal   array 

// sort()

// splice(1,3,22,22 ):add new items to an array 
// slice 

// loop using Array 

// classical forloop
let array=[1,32,3,8]
// for(let i=0;i<array.length;i++){
//     console.log(array[i])
// } 

// 
// array.forEach((value,index,array)=>{
    // console.log(value*2);

// })

// for of 
// for (let item of array){
//     console.log(item)
//     }
// obj={
//     1:5,
//     2:6,
//     3:7
//     }

// for(const key in obj){
//     element=obj[key]
//     console.log(key,":",element);
// }

// map()
// let arr = [1, 2, 3,4,526,75];

// let newArr=arr.map(e=>{
//     return e**2
// }
// )


// console.log(newArr)
// console.log(arr.filter((e)=>{
//     if(e!=2){
//         return true

//     }
//     return false
// }));

// reduce()
// red=(accumulator,currentValue)=>{
//     return accumulator*currentValue;
// } 
// console.log(arr.reduce(red));

obj={
    1:5,
    6:6,
    8:9
}

  
// console.log(Array.from(obj[key]));