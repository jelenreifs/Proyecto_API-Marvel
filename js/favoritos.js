
/* RECUPERAR DEL LOCALSTORAGE */
let superheroe;
let arraySuperheroe = [];
let names;



function drawFavoritos() {
  console.log('kk');

  if (localStorage.getItem("favoritos")) {
   // localStorage.getItem("favoritos", JSON.parse(favoritos))
    superheroe = localStorage.getItem('favoritos');
    arraySuperheroe = JSON.parse(superheroe); 
    console.log(superheroe);
    
    arraySuperheroe.forEach(element => {
      hero += `
      <tr>       
        <td><img src="${element.image}" alt="Foro de ${element.name}"></td>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.work}</td>
        <td>ACCIONES</td>
      </tr>
       `;
    });
    

    // let tabla = document.getElementById("tabla-favoritos");
    
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

    let insertTabla = document.getElementById('tabla-favoritos').innerHTML = tabla
    let tablaBody = document.getElementsByTagName('tbody');
    tabla.appendChild(tablaBody);

   
  } else {
    superheroe = "No hay héroes en tu lista de favoritos";
  }


}

