const townevent = document.getElementById('eventsection')
const cityName = document.getElementById('cityname')
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        let towns = jsonObject.towns
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == cityname) {
                let events = towns[i].events;
                // townevent.innerHTML = events;
                let h = '<ul>';
                for (event of events) {
                    h += `<li>${event}</li>`;
                }
                h += '</ul>';
                townevent.innerHTML = h;
                break; // We don't need to keep looping through the list of remaining towns
            }
        }
    });