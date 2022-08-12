



//navtoggle//
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-menu_visible")
})



//Construccion de la clase para los objetos
function Product(_id, _name, _price ,_image){
    this.id = _id;
    this.name = _name;
    this.price = _price;
    this.image = _image;
}

//Arreglo de productos (nuestra 'Base de datos DB' cargada)
const myProducts = [
    new Product(0, 'GT', 3000 ,"./images/GT21_G27401M_29-M-Avalanche-300x300-1.jpg", ),
    new Product(1, 'GT 2', 4000 ,"./images/GT21_G27401M_29-M-Avalanche-300x300-1.jpg"),
    new Product(2, 'MERIDA', 2000, "./images/bicicleta-mtb-merida-big-n.jpg"),
    new Product(3, 'MERIDA 2', 1000 ,"./images/bicicleta-mtb-merida-big-n.jpg"),
    new Product(4, 'SCOOT', 1000 ,"./images/bicicleta-mtb-merida-big-n.jpg"),
    new Product(5, 'SCOOT2', 1000 ,"./images/bicicleta-mtb-merida-big-n.jpg"),
    new Product(6, 'Joystick', 1000 ,"./images/bicicleta-mtb-merida-big-n.jpg"),
    new Product(7, 'SCOOT', 1000 ,"./images/aspect-960-dark-grey-300x300.JPG"),
    new Product(8, 'SCOOT2', 1000 ,"./images/aspect-960-dark-grey-300x300.JPG"),
    new Product(9, 'Joystick', 1000 ,"./images/aspect-960-dark-grey-300x300.JPG"),
    new Product(10, 'Joystick', 1000 ,"./images/aspect-960-dark-grey-300x300.JPG"),
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
function addProductsEvents(){
    myProducts.forEach(item => {
        const carritoDeCompras = document.getElementById(`buttonId-${item.id}`);

        //Le agregamos al boton un evento para mostrar la informacion
        //Le pasamos una funcion anonima '()' la cual llamara a la funcion 'showInformation' pasandole el id como parametro
        carritoDeCompras.addEventListener('click', (e) => showInformation(item.id));
    })
}

/**
 * Muestra un alert con la informacion del producto
 * @param {Number} id 
 */
function showInformation(id){
    //Buscamos el producto en el arreglo
    const product = myProducts.find(item => item.id == id);

    //Mostramos la informacion en un alert
    alert(`Informacion de producto:\nNombre: ${product.name}\nPrecio: ${product.price}`);
}

renderProducts();