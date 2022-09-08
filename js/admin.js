console.log('desde admin.js');
//import la clase producto
import {Producto} from "../interfaces/Producto.js";

//obtengo los inputs del formulario 
let inputCodigo=document.getElementById('inputCodigo');
let inputProducto=document.getElementById('inputProducto');
let inputDescripcion=document.getElementById('inputDescripcion');
let inputPrecio=document.getElementById('inputPrecio');
let inputURL=document.getElementById('inputURL');
let form=document.getElementById('form');
//creo array donde voy a guardar los productos
let arrProductos=JSON.parse(localStorage.getItem('listaProductos'))||[];

console.log(form);



//funciones

const handleSubmit=(e)=>{
    e.preventDefault();
    const nuevoProducto= new Producto(inputCodigo.value, inputProducto.value, inputDescripcion.value, inputPrecio.value, inputURL.value);
    console.log(nuevoProducto);
    arrProductos.push(nuevoProducto);
    console.log(arrProductos);
    localStorage.setItem("listaProductos", JSON.stringify(arrProductos));
    form.reset()
}

form.addEventListener('submit', handleSubmit);

function handleSubmit2(e){

}