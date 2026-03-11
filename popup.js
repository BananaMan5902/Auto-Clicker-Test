document.getElementById("start").onclick = async () => {

let cps = document.getElementById("cps").value;

let [tab] = await chrome.tabs.query({active:true,currentWindow:true});

chrome.scripting.executeScript({
target:{tabId:tab.id},
func:startClicker,
args:[cps]
});

};

document.getElementById("stop").onclick = async () => {

let [tab] = await chrome.tabs.query({active:true,currentWindow:true});

chrome.scripting.executeScript({
target:{tabId:tab.id},
func:stopClicker
});

};

function startClicker(cps){

if(window.autoClickerLoop) return;

let delay = 1000 / cps;

window.autoClickerLoop = setInterval(()=>{

let el=document.elementFromPoint(window.innerWidth/2,window.innerHeight/2);

if(el) el.click();

},delay);

}

function stopClicker(){

clearInterval(window.autoClickerLoop);
window.autoClickerLoop=null;

}
