
const apiKey  = "de8e234434351321aacbcad506c213dd";
const baseurl = "http://api.openweathermap.org/data/2.5/forecast";
let cityId    = "5604473";
let units     = "imperial";



//"https://api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}"

let requestUrl = baseurl + "?" +
    "id=" + cityId +
    "&appid=" + apiKey +
    "&units=" + units;

// let requestUrl = "https://"https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=de8e234434351321aacbcad506c213dd&units="imperial"
console.log(requestUrl);

fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
        // Parse the JASON stuff

        console.log(data);
        console.log(data.weather[0].description);

        let temp = data.main.temp;
        document.getElementById('current-temp').innerText = temp;

        
    });