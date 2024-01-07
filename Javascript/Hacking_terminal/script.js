

const randomDelay = () => {
  return new Promise((resolve, reject) => {
    timeout = Math.random()*6+1;
    setTimeout(() => {
      resolve();
    }, timeout * 1000) ;
  });
};

async function Hacking(){
  const additem = async(item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
  };
let text = [
  "Initializing Hacking...",
  "Reading your Files...",
  "Password files Detected...",
  "Sending all passwords and personal files to server...",
  "Cleaning up...",
];

for (const item of text) {
   await additem(item);
}

}
Hacking()
// console.log(timeout);
