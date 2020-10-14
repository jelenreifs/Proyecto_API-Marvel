const KEY = "10217395314010785";
const URL_PATH = `https://superheroapi.com/api/${KEY}`;



const NAME_HERO = document.getElementById("hero").value;
console.log(NAME_HERO);
 


const URL_HERO = `${URL_PATH}/search/${NAME_HERO}`;


let hero = "";



/* const headers = new Headers();
headers.append("x-auth-token", KEY); */


function searchHero() {
 // fetch(URL_HERO, { method: "GET", headers })


  fetch(URL_HERO)
    .then(response => response.json())
    .then(data => { 
      console.log(data)
      for (let i = 0; i < data.results.length; i++) {
          hero += `
          <div>
            <h4>${data.results[i].name}</h4>
              <p>${data.results[i].id}</p>
              <p>Inteligencia: ${data.results[i].powerstats.intelligence}</p>
              <p>Poder: ${data.results[i].powerstats.power}</p>
              <p>Biografía: ${data.results[i].biography.full-name}</p>
              <p>Apariencia: ${data.results[i].appearance.gender}</p>
              <p>Apariencia: ${data.results[i].appearance.race}</p>
              <p>Apariencia: ${data.results[i].connections.relatives}</p>
              <img src="${data.results[i].image}" alt="imagan de ${element.name}">
          </div>
                `;
        
      }
      /* data.results.forEach(element => {
        hero += `
          <div>
            <h4>${element.name}</h4>
              <p>${element.id}</p>
              <p>Inteligencia: ${element.powerstats.intelligence}</p>
              <p>Poder: ${element.powerstats.power}</p>
              <p>Biografía: ${element.biography.full-name}</p>
              <p>Apariencia: ${element.appearance.gender}</p>
              <p>Apariencia: ${element.appearance.race}</p>
              <p>Apariencia: ${element.connections.group-affiliation}</p>
              <p>Apariencia: ${element.connections.relatives}</p>
              <img src="${element.image}" alt="imagan de ${element.name}">
          </div>
                `;  */
        });
          document.getElementById("resultados").innerHTML = hero;
  }
  

   

 


    

