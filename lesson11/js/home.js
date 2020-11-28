const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let p = document.createElement('p');
                let p1 = document.createElement("p");
                let p2 = document.createElement("p");
                let p3 = document.createElement("p");
                let img = document.createElement("img");


                h2.textContent = towns[i].name;
                p.textContent = 'Moto' + ':' + ' ' + towns[i].motto;
                p1.textContent = 'Year Founded' + ":" + ' ' + towns[i].yearFounded;
                p2.textContent = 'Population' + ":" + ' ' + towns[i].currentPopulation;
                p3.textContent = 'Annual Rain Fall' + ":" + ' ' + towns[i].averageRainfall;
                /*img.setAttribute('src', 'images/' + towns[i].photo);*/
                img.setAttribute('src', 'images/fishhaven.jpg');

                let d = document.createElement ('div'); 

                

                d.appendChild(h2);
                d.appendChild(p);
                d.appendChild(p1);
                d.appendChild(p2);
                d.appendChild(p3);
                card.appendChild(d);

                card.appendChild(img);


                document.querySelector('div#data1').appendChild(card);
            }
        }
    });