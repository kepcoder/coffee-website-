let navbar = document.querySelector('.navbar');
document.querySelector('#Menu').onclick = () =>{
    navbar.classList.toggle('active');
    cart.classList.remove('active');
    search.classList.remove('activremove');
}

let cart = document.querySelector('.cart-item-container');
document.querySelector('#cart').onclick = () =>{
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    search.classList.remove('active');
}
let search = document.querySelector('.search2');
document.querySelector('#search').onclick = () =>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
    cart.classList.remove('active');
}

windiw.onscroll = () =>{
    navbar.classList.remove('active');
    cart.classList.remove('active');
    search.classList.remove('active');
}