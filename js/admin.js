class Producto {  
  constructor(codigo, producto, descripcion, precio, url) {
    this.codigo = codigo;
    this.producto = producto;
    this.descripcion = descripcion;
    this.precio = precio;
    this.url = url;
  }
}

console.log("desde admin.js");
//import la clase producto

//obtengo los inputs del formulario
let inputCodigo = document.getElementById("inputCodigo");
let inputProducto = document.getElementById("inputProducto");
let inputDescripcion = document.getElementById("inputDescripcion");
let inputPrecio = document.getElementById("inputPrecio");
let inputURL = document.getElementById("inputURL");
let form = document.getElementById("form");
let errorCodigo = document.getElementById("errorCodigo");
let algoBtn = document.getElementById("algoBtn");



algoBtn.addEventListener("click", (e) => {
  window.location.href = "http://www.google.com.ar"
})

//creo array donde voy a guardar los productos
let arrProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];

// remover una key de localStorage
// localStorage.removeItem("listaProductos");

// limpiar todo localStorage
// localStorage.clear();
// sessionStorage.setItem("text", "hola");

//funciones

const handleSubmit = (e) => {
  e.preventDefault();
  const regex = /^(ftp|http|https):\/\/[^ "]+$/;
  const validarURL = regex.test(inputURL.value);
  errorCodigo.innerHTML = "";
  if( inputCodigo.value === "" || inputProducto.value === "" || inputDescripcion.value === "" || inputPrecio.value === "" || inputURL.value === "" ){
    errorCodigo.innerHTML = "el codigo es requerido";
    errorCodigo.style.color = "red";
    alert("todos los campos son obligatorios");
    return;
  }
  if(!validarURL) {
    alert("la url es incorrecta")
    return;
  }
  const nuevoProducto = new Producto(
    inputCodigo.value,
    inputProducto.value,
    inputDescripcion.value,
    inputPrecio.value,
    inputURL.value
  );
  console.log(nuevoProducto);
  arrProductos.push(nuevoProducto);
  console.log(arrProductos);
  localStorage.setItem("listaProductos", JSON.stringify(arrProductos));
  form.reset();
  //opcion 1 para recargar el listado de productos
  //window.location.reload()
  //opcion 2
  crearFilaProducto();
};

form.addEventListener("submit", handleSubmit);

function handleSubmit2(e) {}

//Traigo el Tbody del html
let tbodyListaProductos = document.getElementById("bodyListaProductosAdmin");

console.log(tbodyListaProductos);

const crearFilaProducto = () => {
  arrProductos.forEach(producto => {
    return tbodyListaProductos.innerHTML += `
          <tr>
              <th>${producto.codigo}</th>
              <th>${producto.producto}</th>
              <th>${producto.descripcion}</th>
              <th> u$s ${producto.precio}</th>
              <th>${producto.url}</th>
              <th class="text-center">
                <button onclick="borrarProducto(${producto.codigo})" class="btn btn-danger">Borrar</button>
                <button onclick="editarProducto(${producto.codigo})" class="btn btn-warning">Editar</button>
              </th>
            </tr>
    `;
});
};

// borrar producto
const borrarProducto = (codigo) => {
  // console.log(typeof codigo)
  // filtrar array y devolver un array nuevo sin el producto
  const arrayFiltrado = arrProductos.filter(producto => {
    return producto.codigo !== codigo.toString()
  })
  console.log(arrayFiltrado)
  arrProductos = arrayFiltrado;
  localStorage.setItem("listaProductos", JSON.stringify(arrProductos));
  window.location.reload();
  // crearFilaProducto()
}

// modificar producto

const editarProducto = (codigo) => {
console.log(codigo)
// necesitamos encontrar el producto en el arreglo de productos
  const producto = arrProductos.find(producto => {
    return producto.codigo === codigo.toString();
  });
  console.log(producto)
    inputCodigo.value = producto.codigo;
    inputProducto.value = producto.producto;
    inputDescripcion.value = producto.descripcion;
    inputPrecio.value = producto.precio;
    inputURL.value = producto.url;
    // borrar el producto del array
    const arrayFiltrado = arrProductos.filter(producto => {
      return producto.codigo !== codigo.toString()
    })
    arrProductos = arrayFiltrado;
    localStorage.setItem("listaProductos", JSON.stringify(arrProductos));
    window.location.reload();
}

crearFilaProducto()