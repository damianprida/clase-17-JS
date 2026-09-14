//DOM document object model
/*
Es un objeto que nos permite manipular el html dsde JS.
getElementById() nos permite obtener un elemento del html a partir de su id.
usar console.dir para verlo como objeto y ver sus propiedades.
*/
/* const title = document.getElementById("title");
console.dir(title) */
/* title.innerText = "Hola, mundo!"; MODIFICA EL HTML*/
/* console.log(title.innerText) /* MUESTRA EL TEXTO DEL HTML */
/*title.innerText = "Hola, mundo! / MODIFICA EL HTML */

/* let nombre = "pepe";

const caja = document.getElementById("caja")
caja.innerHTML = `
    <h2>Hola ${nombre}</h2>
    <button>Click me</button>
` */
/* 
dado el producto escribir dentro del elemento con id product-card h2: titulo
span: precio
*/

/* const productos = [
{
    id : 1,
    titulo : "tv samsung",
    precio : 1000,
    stock : 26,
},
{
    id : 2,
    titulo : "tv lg",
    precio : 2000,
    stock : 56,
},
{
    id : 3,
    titulo : "tv sony",
    precio : 3000,
    stock: 45,
}
]

const caja = document.getElementById("caja");

let html_productos = ""
for(let producto of productos){
    html_productos = html_productos + `
    <div>
        <h2 class="producto_titulo">${producto.titulo}</h2>
        <div>
            <div>Precio: <strong>${producto.precio}</strong></div>
            <div>Stock: <strong>${producto.stock}</strong></div>
        </div>
        <button>Comprar</button>
        <hr/>
    </div>
`
}
caja.innerHTML = html_productos */

const mensajes = [
    {
        Autor: "pepe",
        Mensaje: "hola, que tal?",
        Fecha: "21:30",
        id: 1
    },
    {
        Autor: "tu",
        Mensaje: "todo bien y vos?",
        Fecha: "21:32",
        id: 2
    },
    {
        Autor: "pepe",
        Mensaje: "genial",
        Fecha: "21:35",
        id: 3
    }
]

const caja = document.getElementById("caja")

let html_mensajes = ""

for(let mensaje of mensajes){
    html_mensajes = html_mensajes + `
    <div>
        <h3>Autor: ${mensaje.Autor}</h3>
        <p>Mensaje: ${mensaje.Mensaje}</p>
        <span>Fecha: ${mensaje.Fecha}</span>
        <hr>
    </div>
    `
}
caja.innerHTML = html_mensajes
