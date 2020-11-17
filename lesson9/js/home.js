
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
fetch(requestURL) 
    .then(function(response){
        return response.json();
    })
    .then(function(jsonObject){      
        console.log(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let p1 = document.createElement("p1");
            let p2 = document.createElement("p2");
            let p3 = document.createElement("p3");
            let img = document.createElement ("img");
           
            
            h2.textContent = towns[i].name;
            p.textContent = 'Moto'+ ':'+ ' ' + towns[i].motto;
            p1.textContent = 'Year Founded' + ' ' + towns[i].yearFounded;
            p2.textContent = 'Population' + ' ' + towns[i].currentPopulation;
            p3.textContent = 'Annual Rain Fall' +' ' + towns[i].averageRainfall;
            img.setAttribute('src',towns[i].photo);


            card.appendChild(h2);
            card.appendChild(p);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(img);


            document.querySelector('div#data1').appendChild(card);
        }
    });
