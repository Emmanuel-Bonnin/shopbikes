



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
    new Product(0, 'Laptop', 3000 ,"./images/GT21_G27401M_29-M-Avalanche-300x300-1.jpg"),
    new Product(1, 'TV VEO', 4000 ,"./images/GT21_G27401M_29-M-Avalanche-300x300-1.jpg"),
    new Product(2, 'Celular', 2000, "./images/bicicleta-mtb-merida-big-n.jpg"),
    new Product(3, 'Joystick', 1000 ,"./images/bicicleta-mtb-merida-big-n.jpg"),
    new Product(4, 'Joystick', 1000 ,"./images/bicicleta-mtb-merida-big-n.jpg"),
    new Product(5, 'Joystick', 1000 ,"./images/bicicleta-mtb-merida-big-n.jpg"),
    new Product(6, 'Joystick', 1000 ,"./images/bicicleta-mtb-merida-big-n.jpg"),
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
        
        id="product-${item.id}" class="product">
            <h3>${item.name}</h3>
            <p>Precio: ${item.price}</p>
            <button id="buttonId-${item.id}" class="productButton">Show Information</button>
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
        const showInfoButton = document.getElementById(`buttonId-${item.id}`);

        //Le agregamos al boton un evento para mostrar la informacion
        //Le pasamos una funcion anonima '()' la cual llamara a la funcion 'showInformation' pasandole el id como parametro
        showInfoButton.addEventListener('click', (e) => showInformation(item.id));
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