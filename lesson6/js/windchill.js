document.addEventListener("DOMcontentLoaded", function(){

    let speed = 25;
    let temp = 10;
    buildWC(speed, temp);
});


function buildWC(speed, tem) {

    let feelTemp=document.getElementById('feeltemp');

let wc = 35.74 + 0.6215 * temp -35.75 * 
Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed,0.16);

wc = math.floor(wc);

wc = (wc > temp) ? temp : wc;


console.log(wc);

feelTemp.innerHTML = wc;
}