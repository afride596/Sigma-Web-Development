
function loadScript(src){
    let promise=new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src=src;
        script.onload=()=>{
            resolve(script)
        }
        script.onerror=()=>{
            reject(Error(`Could not find or load script ${src}`))
        }
        document.head.appendChild(script);
    })
    return promise;

}
loadScript('https://www.pexels.com/').then((script)=>{
    console.log(`${script.src} is Loaded`)
})
.catch((error)=>{
    console.error("An error occurred while loading the script.")
})