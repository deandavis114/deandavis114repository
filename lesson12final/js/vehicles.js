const requestURL = 'https://deandavis114.github.io/deandavis114repository//json/json.html'
fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    promise.then(function(jsonObject){
        console.table(jsonObject);
        const vehicles = jsonObject['rentals'];
        for (let i = 0; i<rentals.length; i++){
            let card = document.createElement('section');
            let h2 = document.createElement('h2');

            h2.textContent = rentals[i].name

            card.appendChild(h2);

            document.querySelector('div#cards').appendChild(card);
        }
    });