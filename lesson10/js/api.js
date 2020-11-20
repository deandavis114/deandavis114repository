let url = "http://api.openweathermap.org/data/2.5/weather?id=";

let cityId = "5604473";

const apiKey = "de8e234434351321aacbcad506c213dd";


"http://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}"

let requestUrl = url +
    cityId +
    "&appid=" + apiKey;

console.log(requestUrl);

fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
        // Parse the JASON stuff

        console.log(data);
        console.log(data.weather[0].description);

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.weather[0].description; // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);

        let temp = data.main.temp;
        document.getElementById('current-temp').innerText = temp;

        
    });