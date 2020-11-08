let temp = document.getElementById("temp").innerText;

let speed = document.getElementById("speed").innerText;

let wc = 35.74 + 0.6215 * temp -35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed,0.16);

console.log(wc)

document.getElementById("windchill").innerText = wc.toFixed(0);