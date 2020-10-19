const KEY = "10217395314010785";
const URL_PATH = `https://superheroapi.com/api/${KEY}`;






/***********************************************************/
/*                        INDEX                            */
/***********************************************************/
let imageHeroes;
 let resultsImages

/* const HERO_ENDPOINTS = {
  SPIDERMAN:`${URL_PATH}/search/spider-man`,
  LOBEZNO:`${URL_PATH}/search/wolverine`,
  IRONMAN: `${URL_PATH}/search/ironman`,
  MAGNETO: `${URL_PATH}/search/magneto`,
  VENON: `${URL_PATH}/search/spider-man`,
  DEADPOOL: `${URL_PATH}/search/deadpool`,
  CYBORG: `${URL_PATH}/search/cyborg`,
  HAWKGIRL: `${URL_PATH}/search/hawkgirl` 
} */

const HERO_ENDPOINTS = [
  `${URL_PATH}/search/spider-man`,
  `${URL_PATH}/search/wolverine`,
  `${URL_PATH}/search/ironman`,
  `${URL_PATH}/search/magneto`,
  `${URL_PATH}/search/deadpool`,
  `${URL_PATH}/search/cyborg`,
  `${URL_PATH}/search/hawkgirl` 
]

for (let i = 0; i < HERO_ENDPOINTS.length; i++) {
  fetch(HERO_ENDPOINTS[i])
    .then(response => response.json())
    .then(data => {
    
      resultsImages = data.results;

      resultsImages.forEach(element => {
        imageHeroes += `
         <div class="item">
            <img src="${element.image.url}" alt="Imagen de ${element.name}">
         </div>`;
      })
      document.querySelector('.masonry').innerHTML = imageHeroes;
    })   
}


/***********************************************************/
/*                     CATÁLOGO                            */
/***********************************************************/

let hero = "";
let resultado;

let arrayHero = [];
let  detalleHero;


function searchHero() {
 
  const NAME_HERO = document.getElementById("hero").value;
  const URL_HERO = `${URL_PATH}/search/${NAME_HERO}`;

 fetch(URL_HERO)
    .then(response => response.json())
    .then(data => {
      resultado = data.results;
    
   /*    for (let i = 0; i < resultado.length; i++) {
      
        
        detalleHero = {
          'id' : resultado.id,
         'name' : resultado.name,
         'work' : resultado.work.occupation
        } 
        
      }

      console.log(detalleHero); */




      resultado.forEach(element => {
      
        // Incluir en un array los objetos de cada uno de los personajes.
        // Los almacenamos en el localstorage. 

             detalleHero = {
          'id' : element.id,
         'name' : element.name,
         'work' : element.work.occupation
        } 
        
  
        hero += `
          <div class="card-hero" href="#">
           <div class="card-image">
            <img id="hero-image" src="${element.image.url}" alt="Imagen de ${element.name}">

            </div>
            <div class="card-name">
              <h4 id="hero-name">${element.name}</h4>
              <i onclick="addFavoritos(detalleHero)" class="far fa-heart"></i>           
              </div>            
          </div>
                `;
        
    

      });
      let areaResults = document.querySelector(".resultados");
      let resultsHeroes = document.getElementById("results-hero");
      let titulo =  `<h3>Resultados</h3>`;
      resultsHeroes.innerHTML = hero;
      //areaResults.insertBefore(titulo,hero);
     // resultsHeroes.appendChild(titulo);
       
    })
  

   
}


/***********************************************************/
/*                       FAVORITOS                         */
/***********************************************************/

/* AÑADIR A FAVORITOS */



function addFavoritos(detalleHero) {
  this.detalleHero = detalleHero
  
 
 /*  id = detalle.id;
  name = detalle.name;
  work = detalle.work.occupation */

//return detalleHero(detalleHero.id, detalleHero.name, detalleHero.work)
  arrayHero.push(detalleHero);
 console.log(arrayHero); 
  
}




  
  //arrayHero.push(detalleHero);


  //localStorage.setItem("favoritos", JSON.stringify(arrayhero));