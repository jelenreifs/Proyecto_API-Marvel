
/* RECUPERAR DEL LOCALSTORAGE */
let superheroe;
let names;


function drawFavoritos() {

  if (localStorage.getItem("superheroe")) {
    superheroe = localStorage.getItem('superheroe');
    arraySuperheroe = JSON.parse(superheroe);
    console.log(arraySuperheroe);
    
    arraySuperheroe.forEach(element => {
    hero += `
      <tr>       
        <td><img src="${element.image.url}" alt="Foro de ${element.name}"></td>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.work.occupation}</td>
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
    superheroe= "No hay héroes en tu lista de favoritos";
  } 

  

  }

  /* for (let i = 0; i < superheroe.length; i++) {
    console.log("Nombre " + superheroe[i].id);

  }

 */



/* TABLA DE FAVORITOS */
  
/*   superheroe.forEach(element => {
    console.log(element.id);

    
    
    
  }); */


 /*  function add_tabla() {


  // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.getElementById("tabla-favoritos");
  var tblBody = document.createElement("tbody");
 
  // Crea las celdas
  for (var i = 0; i < 2; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");
 
    for (var j = 0; j < 2; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
 
    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }
 
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
 // body.appendChild(tabla);
  } */
  