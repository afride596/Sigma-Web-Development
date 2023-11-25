// // 1.Write a program to print the marks of a student in an object using for loop

// const marks={
//     Harry:98,
//     rohan:70,
//     aakash:7
// }
// for(const student in marks){
//     console.log(`${student} has ${marks[student]} marks`)
// }


// Write a program  to print try again until 
// the user enters the correct number


//  let correctNumber=8
//  let userNumber=prompt("enter the number");

//  while(correctNumber!=userNumber){
//     console.log("try again");
//     userNumber=prompt("enter the number");
//  }
//  console.log("you entered the right number")


// Write a function to find mean of 5 numbers

 const mean=(user1,user2,user3,user4,user5)=>{
    let sum=user1+user2+user3+user4+user5;
    return (sum/5)
 }
 console.log(mean(6,7,8,9,10))