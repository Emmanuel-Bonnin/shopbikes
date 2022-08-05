



//navtoggle//
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-menu_visible")
})



//arrays

const tipoDeBicicle = ['todoTerreno', 'urbano','ciclismo','bmx'];


//console.log(tipoDeBicicle)

function Bicicles (talle, marca, rodado, suspension){
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


// sumar o restar la cantidad de bicicletas

let listaDeProductos = document.querySelectorAll('.listaDeProductos')
let menos = document.querySelectorAll('.menos')

let contador = 0
let mas = document.querySelectorAll('.mas')
mas.onclick = (e) => {
    contador += 1;
    resultado.innerText = contador

}



let resultado = document.querySelectorAll('.resultado')
let menosS = document.querySelectorAll('.menos')

for ( menos of menosS) {
    let.el
    menos.onclick = (e) => {
        contador -= 1;
        resultado.innerText = contador


}}