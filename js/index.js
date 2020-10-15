const KEY = "10217395314010785";
const URL_PATH = `https://superheroapi.com/api/${KEY}`;


let hero = "";
let resultado;



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
        
          
          <div class="card-hero" href="#">
           <div class="card-image">
            <img id="hero-image" src="${element.image.url}" alt="Imagen de ${element.name}">
            </div>
            <div class="card-name">
              <h4 id="hero-name">${element.name}</h4>
              <a onclick="addFavoritos()"><i class="far fa-heart"></i></a>           
              </div>            
          </div>
                `;
      });
      document.getElementById("resultados").innerHTML = hero;
      document.getElementsByClassName("resultados").appendChild = `<h3>Resultados ${element}</h3>`;
       
    })
}


/***********************************************************/
/*                       FAVORITOS                         */
/***********************************************************/

/* AÑADIR A FAVORITOS */

function addFavoritos() { 
/*  <i class="fas fa-heart"></i> */
  

  let datos = {
    name: document.getElementById("hero-name").textContent,
    image: document.getElementById("hero-image").textContent,
  };

  // leemos los favoritos del localStorage
  let favoritos = localStorage.getItem("favoritos") || "[]";
  favoritos = JSON.parse(favoritos);

  // buscamos el superhéroe en la lista de favoritos
  let posLista = favoritos.findIndex(function (e) {
    return e.name == datos.name;
  });

  if (posLista > -1) {
    // si está, lo quitamos
    favoritos.splice(posLista, 1);
  } else {
    // si no está, lo añadimos
    favoritos.push(datos);
  }

  // guardamos la lista de favoritos 
  localStorage.setItem("favoritos", JSON.stringify(favoritos));

}


/* TABLA DE FAVORITOS */

// leemos los favoritos del localStorage
let favoritos = localStorage.getItem("favoritos") || "[]";
favoritos = JSON.parse(favoritos);

let fila;

for (let i = 0; i < favoritos.length; i++) {
  fila = `
    <td>${favoritos[i].image}</td>
    <td>${favoritos[i].name}</td>
    <td>&nbsp;</td>
    `
}

// creamos una tabla
let tablaFavoritos = 
      `<table>
          <th>
              <td>&nbsp;</td>
              <td>Imagen</td>
              <td>Nombre</td>
              <td>Acciones</td>
          </th>
          <tr>
        
          </tr>
      </table>`


// agregamos las celdas a cada una de las filas
document.querySelector("tr").appendChild(fila);


// agregamos la tabla a la pagina
document.getElementById("tabla-favoritos").innerHTML = tablaFavoritos;




  
  
  
  
  
  
  




