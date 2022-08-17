function addProductsEvents(){
    myProducts.forEach(item => {
        const carritoDeCompras = document.getElementById(`buttonId-${item.id}`);

        //Le agregamos al boton un evento para mostrar la informacion
        //Le pasamos una funcion anonima '()' la cual llamara a la funcion 'showInformation' pasandole el id como parametro
        carritoDeCompras.addEventListener('click', (e) => agregarAlCarrito(item.id));
    })
}

/**
 * Muestra un alert con la informacion del producto
 * @param {Number} id 
 */
function agregarAlCarrito(id){
    //Buscamos el producto en el arreglo
    const product = myProducts.find(item => item.id == id);

    //Mostramos la informacion en un alert
    alert(`Informacion de producto:\nNombre: ${product.name}\nPrecio: ${product.price}`);
    console.log(product)
}

renderProducts();

let carrito = []