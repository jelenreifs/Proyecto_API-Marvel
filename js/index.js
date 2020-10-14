const KEY = "10217395314010785";
const URL_PATH = `https://superheroapi.com/api/${KEY}`;





let hero = "";
let resultado;




/* const headers = new Headers();
headers.append("x-auth-token", KEY);
headers.append('Access-Control-Allow-Origin', '127.0.0.1');
headers.append('Access-Control-Allow-Credentials', 'true'); */


function searchHero() {
 
  const NAME_HERO = document.getElementById("hero").value;
  console.log(NAME_HERO);
  
  const URL_HERO = `${URL_PATH}/search/${NAME_HERO}`;

 // fetch(URL_HERO, {mode:'cors'})
 //fetch(URL_HERO, { method: "GET", headers })
 fetch(URL_HERO)
    .then(response => response.json())
    .then(data => {
      //console.log(data)
      resultado = data.results;
   
      resultado.forEach(element => {
        hero += `
          <a href="#">
            <img src="${element.image.url}" alt="Imagen de ${element.name}">
            <h4>${element.name}</h4>            
          </a>
                `;
      });
      document.getElementById("resultados").innerHTML = hero;
    })
}
