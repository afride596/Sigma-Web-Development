
// Random time generator
const randomdelay = () => {
  return new Promise((reslove, reject) => {
    let timeout = Math.random() * 6 + 1;
    setTimeout(() => {
      reslove()
    }, timeout * 1000);
  });
};

async function hacking(){
  const additeam = async(item)=>{
    await randomdelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
    
  }
  text = ["inii", "hacking", "setup", "process", "completed"];
  
  for(let item of text){
   await additeam(item)
  } 

}
hacking()