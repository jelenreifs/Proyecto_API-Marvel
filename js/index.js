const KEY = "10217395314010785";
const URL_PATH = `https://superheroapi.com/api/${KEY}`;






/* const headers = new Headers();
headers.append("x-auth-token", KEY);
headers.append('Access-Control-Allow-Origin', '127.0.0.1');
headers.append('Access-Control-Allow-Credentials', 'true'); */

/***********************************************************/
/*                        INDEX                            */
/***********************************************************/





/***********************************************************/
/*                     CATÁLOGO                            */
/***********************************************************/

let hero = "";
let resultado;
let arrayhero = [];






function searchHero() {
 
  const NAME_HERO = document.getElementById("hero").value;
  const URL_HERO = `${URL_PATH}/search/${NAME_HERO}`;

 fetch(URL_HERO)
    .then(response => response.json())
    .then(data => {
      resultado = data.results;


      resultado.forEach(element => {

        // Incluir en un array los objetos de cada uno de los personajes.
        // Los almacenamos en el localstorage. 
        arrayhero.push(element);

        hero += `
          <div class="card-hero" href="#">
           <div class="card-image">
            <img id="hero-image" src="${element.image.url}" alt="Imagen de ${element.name}">

            </div>
            <div class="card-name">
              <h4 id="hero-name">${element.name}</h4>
              <i onclick="addFavoritos(arrayhero)" class="far fa-heart"></i>           
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

function addFavoritos(arrayhero) {
/*  <i class="fas fa-heart"></i> */
  localStorage.setItem("superheroe", JSON.stringify(arrayhero));
}

/* RECUPERAR DEL LOCALSTORAGE */
function drawFavoritos() {

  localStorage.getItem(JSON.parse("superheroe"));

  for (let i = 0; i < superheroe.length; i++) {
    console.log("Nombre " + superheroe[i].id);

  }



/*   if (resultados !== -1) {
    Ponemos aquí el código del localstorage
    
  } else {
    console.log('No has guardado ningún héroe como favorito')
 
  }
 */


  /* TABLA DE FAVORITOS */

/*   for (let i = 0; i < superheroe.length; i++) {
    fila = `
    <td>${superheroe[i].image}</td>
    <td>${superheroe[i].name}</td>
    <td>&nbsp;</td>
    `
  } */

  // creamos una tabla
/*   let tablaFavoritos =
    `<table>
          <th>
              <td>&nbsp;</td>
              <td>Imagen</td>
              <td>Nombre</td>
              <td>Acciones</td>
          </th>
          <tr>
        
          </tr>
      </table>` */


  // agregamos las celdas a cada una de las filas
  //document.querySelector("tr").appendChild(fila);


  // agregamos la tabla a la pagina
 // document.getElementById("tabla-favoritos").innerHTML = tablaFavoritos;

}