//  Write a program to calculate factorial of a number using reduce and using for loops

// 1.method one using reduce and array
let a=prompt("enter the number")
let b=parseInt(a)
let arrr=[]
for(let i=1;i<=b;i++){
    arrr.unshift(i)
    
}
console.log(arrr.reduce((a,b)=>{
    return a*b;
}))

// 2.method two using for loop

let fact=(n)=>{
    if(n<0){
        console.log("we can't take factorial for negative numbers")
    }
    let facdt=1
    for(let i=1;i<=n;i++){

        facdt*=i
        
    }
    console.log(facdt);
}
console.log(fact(5));