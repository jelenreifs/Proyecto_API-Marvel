const KEY = "10217395314010785";
const URL_PATH = `https://superheroapi.com/api/${KEY}`;






/***********************************************************/
/*                        INDEX                            */
/***********************************************************/
let imageHeroes;
let resultsImages;
let errorFetch;

const HERO_ENDPOINTS = [
  `${URL_PATH}/search/spider-man`,
  `${URL_PATH}/search/wolverine`,
  `${URL_PATH}/search/ironman`,
  `${URL_PATH}/search/magneto`,
  `${URL_PATH}/search/deadpool`,
  `${URL_PATH}/search/cyborg`,
  `${URL_PATH}/search/hawkgirl` 
]

/* Todos lo superhéroes */

for (let i = 0; i < HERO_ENDPOINTS.length; i++) {
  fetch(HERO_ENDPOINTS[i])
    .then(response => response.json())
    .then(data => {
    
      resultsImages = data.results;

      if (resultsImages !== -1) {
        resultsImages.forEach(element => {
          imageHeroes += `
         <div class="item">
            <img src="${element.image.url}" alt="Imagen de ${element.name}">
         </div>`;
        })
        document.querySelector('.masonry').innerHTML = imageHeroes;
        
      } else { 
        errorFetch = `
          <div class="error">
              <p>error en el fetch</p>
              <button onclic="cerrarMensaje()">ELIMINAR</button>
          </div>
         `;
        document.querySelector('.novedades .aviso').innerHTML = errorFetch;
      }

    }) 
}

function cerrarMensaje() {
  console.log('Quiero cerrar')
/*   let error = document.querySelectorAll('.error');
  document.querySelector('.aviso').removeChild(lastChild); */
}




/***********************************************************/
/*                     CATÁLOGO                            */
/***********************************************************/

let hero = "";
let resultado;

let arrayHero = [];
let detalleHero;
let favoritos = [];


function searchHero() {
 
  const NAME_HERO = document.getElementById("hero").value;
  const URL_HERO = `${URL_PATH}/search/${NAME_HERO}`;

 fetch(URL_HERO)
    .then(response => response.json())
    .then(data => {
      resultado = data.results;

      resultado.forEach(element => {

        detalleHero = {
          image: element.image.url,
          id: element.id,
          name: element.name,
          work: element.work.occupation,
        };
        arrayHero.push(detalleHero);


        hero += `
          <div class="card-hero" href="#">
           <div class="card-image">
            <img id="hero-image" src="${element.image.url}" alt="Imagen de ${element.name}">

            </div>
            <div class="card-name">
              <h4 id="hero-name">${element.name}</h4>
              <i onclick="addFavoritos(${element.id})" class="far fa-heart"></i>           
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


function addFavoritos(id) {
  for (let i = 0; i < arrayHero.length; i++) {
    if (id == arrayHero[i].id) {
      favoritos.push(arrayHero[i]);
    }
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  console.log(arrayHero);
}