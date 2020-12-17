const requestURL = 'https://deandavis114.github.io/deandavis114repository//json/json.html'
fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        const vehicles = jsonObject['rentals'];
        for (let i = 0; i<rentals.length; i++){
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let p2 = document.createElement('p2');
            let p3 = document.createElement('p3');

            h2.textContent = rentals[i].brand
            p.textContent = rentals[i].name
            p2.textContent ='Maximum capacity:' +' ' +  rentals[i].max-persons
            p2.textContent ='Cost with reservation for a half day:' +' ' +  rentals[i].max-persons

            card.appendChild(h2);

            
            document.querySelector('div#cards').appendChild(card);
        }
    });