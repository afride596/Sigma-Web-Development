// create an array  and take inputs from user to add numbers to to this array
// let array=[]
// let userInput=prompt("enter how many number you want to insert in array")
//  userInput=parseInt(userInput)

//  for(i=0;i<userInput;i++){
//     let num=prompt("Enter a number");
//     array.push(num);
//     }
//     console.log(array)

// 1.create an array of numbers and take input from the user to add numbers of this array 
// let arr=[2,5,6,7,52]
// let number=prompt("enter the number")
// number=Number.parseInt(number)    
// arr.push(number)
// console.log(arr);

// 2.keep adding number to the array in 1 until 0 is added to array
// let arr=[2,5,6,7,52]
// let number=prompt("enter the number")
// number=Number.parseInt(number)    
// if(number===0){
//     alert('you have entered zero')
// }
// else{

//     arr.push(number)
// }
// console.log(arr);

// 3. infinity loop for second question 

// let arr=[]
// let number
// let userinput

// do{
//  number=prompt("enter the number")
// userinput=Number.parseInt(number)
// arr.push(userinput)

// }while(userinput!=0)
// console.log(arr)

// filter the number which is divisble by 10 of givin array 
// let arr=[48,90,23,45,67,89,100,105,]
// let n=arr.filter((value)=>{
//     return value%10==0
// })
// console.log(n)

// create an array of square of give Number
let arr=[2,5,6,7,52]
let newArr=arr.map((val)=> val*val)
console.log(newArr)