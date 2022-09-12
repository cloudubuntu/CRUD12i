//compruebo que este bien linkeado el app.js
console.log("desde app.js");
//declaro variable con el contenido del localStorage o array vacio
let listaProductosLS = JSON.parse(localStorage.getItem("listaProductos")) || [];
//logueo el resultado del localstorage
console.log(listaProductosLS);
//tomo el contenedor de las cards del index.html
let contenedorIndex = document.getElementById("contenedor");
//compruebo que haya tomnado bien el contenedor
console.log(contenedorIndex);


//creamos arrowFunction para la creacion de las cards de los prodcutos
//opcion1
const crearCard = (producto) => {
  contenedorIndex.innerHTML += `<div class="card mx-3 my-3 p-3" style="width: 250px;">
    <img src="${producto.url}" class="card-img-top" alt="imagen">
    <div class="card-body">
      <h5 class="card-title">${producto.producto}</h5>
      <p class="card-text">${producto.codigo}</p>
      <p class="card-text">${producto.descripcion}</p>
      <p class="card-text">u$s ${producto.precio}</p>
    </div>
  </div>`;
};

//recorro el array de listado 
for (let index = 0; index < listaProductosLS.length; index++) {
    const element = listaProductosLS[index];
    crearCard(element);
}
//opcion 2
/*listaProductosLS.forEach(producto => {
    contenedorIndex.innerHTML += `<div class="card mx-3 my-3 p-3" style="width: 250px;">
    <img src="${producto.url}" class="card-img-top" alt="imagen">
    <div class="card-body">
      <h5 class="card-title">${producto.producto}</h5>
      <p class="card-text">${producto.codigo}</p>
      <p class="card-text">${producto.descripcion}</p>
      <p class="card-text">u$s ${producto.precio}</p>
    </div>`

});*/
