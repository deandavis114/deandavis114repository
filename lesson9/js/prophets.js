
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json'
fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let img = document.createElement ("img");
            let p = document.createElement("p");
            let p2 = document.createElement("p");
            let p_birthday = document.createElement("p")
            
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            img.setAttribute('src',prophets[i].imageurl);
            p.textContent = prophets[i].birthdate;
            p2.textContent = prophets[i].birthplace;

            card.appendChild(h2);
            card.appendChild(img);
            card.appendChild(p);
            card.appendChild(p2);


            document.querySelector('div#cards').appendChild(card);
        }
    });
    
