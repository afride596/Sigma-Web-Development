function createcard(Title,cname,views,monthold,duration,thumnail){
    let viewstr;
    
        if(views<1000){
            viewstr=views
        }
        else if(views<1000&&views>100000){
            viewstr=views/1000+"K";

        }
        else if(views>100000){
            viewstr=views/1000000+"M"
        }
        else{
            viewstr= views
        }

    
let html=`<div class="card">
<div class="left-section">
  <img src="${thumnail}"
  alt="">
  <div class="duration">${duration}</div>
</div>

<div class="right-section">
  <div class="Title">
    <h3>
    ${Title}
    </h3>
  </div>
  <div class="info">

    <div class="channelName">${cname}&nbsp;&nbsp;.</div>
    <div class="views">${viewstr}views &nbsp;.</div>
    <div class="months">${monthold}</div>
  </div>
  
</div>
</div>`

document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html
}
createcard("introduction Express JS || Sigma Web Development course#78","codeWithHarry","1000000","7month ago","7:58","https://i.ytimg.com/vi/uFbCTidM-xw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDGgn0Kh5ek5hkE0xk4iFuv1znLPw")
createcard("introduction Express JS || Sigma Web Development course#78","codeWithHarry","1000000","7month ago","7:58","https://i.ytimg.com/vi/uFbCTidM-xw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDGgn0Kh5ek5hkE0xk4iFuv1znLPw")



