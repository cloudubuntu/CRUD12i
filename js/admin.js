console.log("desde admin.js");
//import la clase producto
import { Producto } from "../interfaces/Producto.js";

//obtengo los inputs del formulario
let inputCodigo = document.getElementById("inputCodigo");
let inputProducto = document.getElementById("inputProducto");
let inputDescripcion = document.getElementById("inputDescripcion");
let inputPrecio = document.getElementById("inputPrecio");
let inputURL = document.getElementById("inputURL");
let form = document.getElementById("form");

//creo array donde voy a guardar los productos
let arrProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];

console.log(form);

//funciones

const handleSubmit = (e) => {
  e.preventDefault();
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
  crearFilaProducto(nuevoProducto);
};

form.addEventListener("submit", handleSubmit);

function handleSubmit2(e) {}

//Traigo el Tbody del html

let tbodyListaProductos = document.getElementById("bodyListaProductosAdmin");

console.log(tbodyListaProductos);

const crearFilaProducto = (producto) => {
  tbodyListaProductos.innerHTML += `
    <tr>
              <th>${producto.codigo}</th>
              <th>${producto.producto}</th>
              <th>${producto.descripcion}</th>
              <th> u$s ${producto.precio}</th>
              <th>${producto.url}</th>
              <th class="text-center">
                <button class="btn btn-danger">Borrar</button>
                <button class="btn btn-warning">Editar</button>
              </th>
            </tr>
    `;
};

arrProductos.forEach(element => {
    crearFilaProducto(element);
});
