


alert("Bienvenidos a SHOPBIKES")

nombre = prompt("hola como te llamas ")
alert(nombre + " selecciona una de las 3 marcas disponibles")







function Bicicle() {
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
Bicicle()









//navtoggle//
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-menu_visible")
})

//alert("Bienvenidos a SHOPBIKES")











