// By using class selector  
// let cn=document.getElementsByClassName("box")
// cn[0].style.border="2px solid black"
// cn[0].style.backgroundColor="red"
// cn[4].style.backgroundColor="red"
// cn[4].style.width="259px"

// By using Id selector
// let id = document.getElementById('id')



// let con=document.querySelector(".box")

// console.log(con.nodeName);
// First Method 
let a=document.getElementsByTagName("div")[0]
// a.innerHTML=a.innerHTML+'<h1>I AFRIDE</h1>'

// let we see more methods

let div=document.createElement("div")
div.innerHTML='<h1>Hiiii</h1>'
a.prepend(div)