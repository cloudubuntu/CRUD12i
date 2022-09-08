export class Producto {  
  constructor(codigo, producto, descripcion, precio, url) {
    this.codigo = codigo;
    this.producto = producto;
    this.descripcion = descripcion;
    this.precio = precio;
    this.url = url;
  }

  get getCodigo() {
    return this.codigo;
  }
  get getProducto() {
    return this.producto;
  }

  get getDescripcion() {
    return this.descripcion;
  }

  get getPrecio() {
    return this.precio;
  }

  get getUrl() {
    return this.url;
  }

  set setCodigo(codigo) {
    this.codigo = codigo;
  }

  set setProduto(produto) {
    this.producto = produto;
  }
  set setDescricion(descricpcion) {
    this.descripcion = descricpcion;
  }

  set setPrecio(precio) {
    this.precio = precio;
  }

  set setUrl(url) {
    this.url = url;
  }
}
