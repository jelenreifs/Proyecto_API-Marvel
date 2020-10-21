
/* RECUPERAR DEL LOCALSTORAGE */
let superheroe;
let arraySuperheroe = [];
let names;
let id;
let favoritosArray;

  


/* Obtener los datos del localstorage y dibujar la tabla */

function drawFavoritos() {

  if (localStorage.getItem("favoritos")) {
    superheroe = localStorage.getItem('favoritos');
    arraySuperheroe = JSON.parse(superheroe); 

    console.log(arraySuperheroe);
    arraySuperheroe.forEach(element => {

      hero += `
      <tr>       
        <td><img src="${element.image}" alt="Foto de ${element.name}"></td>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.work}</td>
        <td><i onclic="deleteFavorito(>${element.id})" class="fas fa-trash-alt eliminar"></i></td>
      </tr>
       `;
    });
    
    
    let tabla = `
     <table class="">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Id</th>
            <th>Nombre</th>
            <th>Trabajo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        ${hero}
        </tbody>
      </table>
    `

    document.getElementById('tabla-favoritos').innerHTML = tabla;
    

   
  } else {
    superheroe = "No hay héroes en tu lista de favoritos";
  }

}



/* function deleteFavorito(id) {
       for (var i = 0; i < localStorage.length; i++) {
       localStorage.removeItem(id[i]);
    }
} */
  
/* function deleteFavorito(id) {   
  for (let i = 0; i < arraySuperheroe.length; i++) {
    
     if (id == arraySuperheroe[i].id) {
      localStorage.removeItem(id);
  
    }
  } */

   
/*     if (id == favoritos[i].id) {
      //favoritos.slice(arraySuperheroe[i], 1);

      localStorage.removeItem(id);
    } */

 


  

  
  
