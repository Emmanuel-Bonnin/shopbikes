


//alert("Bienvenidos a SHOPBIKES")//

//nombre = prompt("hola como te llamas ")
//alert(nombre + " selecciona una de las 3 marcas disponibles")



function bicicle() {
    marcaBicicleta = prompt("puedes seleccionar gt , merida o scott");
if ( marcaBicicleta == "gt") {
    alert("Seleccionaste GT , el valor es de 600 usd")
}
else if ( marcaBicicleta == "scoot") {
    alert("Seleccionaste SCOOT , el valor es de 900 usd")}


else if ( marcaBicicleta == "merida") {
        alert("Seleccionaste MERIDA , el valor es de 700 usd")

}
else {
    alert("debes de selecionar una de las 3 opciones")
}
} 
bicicle()



//navtoggle//
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-menu_visible")
})



//arrays

const tipoDeBicicle = ['todoTerreno', 'urbano','ciclismo','bmx'];


//console.log(tipoDeBicicle)

function bicicles (talle, marca, rodado, suspension){
    this.talle = talle;
    this.marca = marca;
    this.rodado = rodado;
    this.suspension = suspension;

}

const biciclenew = new bicicles( 'm','venzo',27.5, 'delantera')

tipoDeBicicle.push(biciclenew);

console.log(tipoDeBicicle)


//marcas de bicicletas
const todasBicicle = [
{marcaBici: 'trek' , precio : 70000},
{marcaBici: 'merida' , precio : 85000},
{marcaBici: 'gt' , precio : 90000},
{marcaBici: 'scoot' , precio : 70000},

]
const resultSelect = todasBicicle.find((el) => el.marcaBici === 'scoot')

console.log(resultSelect)

console.log(todasBicicle.some((el) => el.marcaBici =='gt'))
console.log(todasBicicle.some((el) => el.marcaBici =='bianchi'))

//actualizacion de precios 2021 a 2022
const actualizarPrecio = todasBicicle.map((el) => {
    return{
         marcaBici:el.marcaBici,
         precio: el.precio * 2 }}
)
console.log(actualizarPrecio)


let listaDeProductos = document.querySelectorAll(".listaDeProductos")
let menos = document.querySelector(".menos")
let resultado = document.querySelector(".resultado")
let contador = 0
let mas = document.querySelector(".mas")
mas.onclick = (e) => {
    contador += 1;
    resultado.innerText = contador

}

menos.onclick = (e) => {
    contador -= 1;
    resultado.innerText = contador

}


