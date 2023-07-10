const burguer = document.querySelector('#burguer');
const menu = document.querySelector('#menu-mobile div:nth-child(2)');
burguer.addEventListener('click', e=>{
    burguer.classList.toggle('active');
    menu.classList.toggle('open');
})

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function savedCartItem(){
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function addToCart ( productName, price ){
    cartItems.push({name: productName, price: price})//* AGREGA UN ELEMENTO AL ARRAY

    updateCart();
    savedCartItem();
}


function updateCart(){
    let cartItemsElement = document.getElementById('cart-items');
    let cartTotalElement = document.getElementById('cart-total');
    let total = 0 

    cartItemsElement.innerHTML = ''; //* LIMPIE TODOS LOS PRODUCTOS

    for (let i = 0; i < cartItems.length; i++){
        let listItem = document.createElement('li');
        listItem.textContent = cartItems[i].name + ' - $ ' + cartItems[i].price;
        cartItemsElement.appendChild(listItem);
        total += cartItems[i].price;
    }

    cartTotalElement.textContent = '$' + total.toFixed(2);//* ACTUALIZAR EL TOTAL DEL CARRITO
}

function checkout(){
    alert('checkout suscefull')

    setTimeout(function(){
        clearCart()
    }, 5000)
}

