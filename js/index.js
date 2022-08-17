



//navtoggle//
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");




navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-menu_visible")
})



// variable de carrito de Compras




//Construccion de la clase para los objetos
function Product(_id, _name, _price ,_image){
    this.id = _id;
    this.name = _name;
    this.price = _price;
    this.image = _image;
}

//Arreglo de productos (nuestra 'Base de datos DB' cargada)
const myProducts = [
    new Product(0, 'GT', 130000 ,"./images/GT21_G27401M_29-M-Avalanche-300x300-1.jpg", ),
    new Product(1, 'GT 2', 140000 ,"./images/GT21_G27401M_29-M-Avalanche-300x300-1.jpg"),
    new Product(2, 'MERIDA', 120000, "./images/bicicleta-mtb-merida-big-n.jpg"),
    new Product(3, 'MERIDA 2', 110000 ,"./images/bicicleta-mtb-merida-big-n.jpg"),
    new Product(4, 'SCOOT 1 ', 150000 ,"./images/aspect-960-dark-grey-300x300.JPG"),
    new Product(5, 'SCOOT 2', 170000 ,"./images/aspect-960-dark-grey-300x300.JPG"),
    new Product(6, 'CANNONDALE 1', 250000 ,"./images/cannondale.jpg"),
    new Product(7, 'CANNONDALE 2', 300000 ,"./images/cannondale.JPG"),
    new Product(8, 'SPECIALIZED 1 ', 350000 ,"./images/specialized-bicicleta-mtb-rockhopper-29.JPG"),
    new Product(9, 'SPECIALIZED 2', 400000 ,"./images/specialized-bicicleta-mtb-rockhopper-29.JPG"),
    new Product(10, 'SPECIALIZED 3', 450000 ,"./images/specialized-bicicleta-mtb-rockhopper-29.JPG"),
];

//Buscamos el elemento contenedor
const productsContainer = document.getElementById('products');

/**
 * Muestra los productos en pantalla
 */
function renderProducts(){
    //Limpiamos los productosd que se encuentran en el contenedor de productos
    productsContainer.innerHTML = "";

    //Colocar productos de la DB en la pagina
    //para cada (foreach) item (elemento) de la DB hacemos lo siguiente
    myProducts.forEach(item => {

        //Tomamos el div y le agregamos HTML
        //Dentrod el div colocamos un ID para el producto. El id es "product-ID" donde ID será diferente para cada producto. Ej: 'product-0'
        //Hacemos lo mismo con el boton para tener un id dinamico
        productsContainer.innerHTML += `
        <div 
        
        id="product-${item.id}" class="product"><br>
            <h3>${item.name}</h3><br>
            <p>Precio: ${item.price}</p><br>
            <button id="buttonId-${item.id}" class="button-17">Agregar al Carrito</button>
            <img src="${item.image}" alt="" width="100%" height="100%">  
        </div>
        `;
    });

    addProductsEvents();
}

/**
 * Añade los eventos para los botones.
 * Tambien para otros elementos de ser necesario
 */



function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();

}
function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
}

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();
renderizarCarrito();