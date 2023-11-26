//  1.what will the following print in javascript?
// console.log("har\"".length)
  console.log("har\"".length)

//   2.Explore the includes,startsWith & endsWith functions of a string
let strings="please give Rs 1000 500";
// if(strings.includes('Ah')){

//     console.log(true);
// }
// else {
//     console.log(false);
// }
console.log(strings.startsWith('Af'));
console.log(strings.endsWith('de'));
console.log(strings.indexOf("A"));
console.log(strings.split(" "));
console.log(strings.toLocaleUpperCase());
console.log(strings.replace("is","are"))
const match =strings.match(/\d+/,/\d+/)
if(match){
    console.log(`${match[0]} is present`);
}