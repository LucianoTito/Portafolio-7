// let menuVisible = false;
// //Función que oculta o muestra el menú
// function mostrarOcultarMenu(){
//     if(menuVisible){
//         document.getElementById("nav").classList="";
//         menuVisible = false;
        
//     }else{
//         document.getElementById("nav").classList="responsive";
//         menuVisible = true;
//     }
// }

// function seleccionar () {
//     document.getElementById("nav").classList="";
//     menuVisible=false;
// }

const menu = document.querySelector(".main-menu");
const links = document.querySelectorAll(".main-menu .main-menu__item .main-menu__link");
const fabars = document.querySelector(".fa-bars");

function handleMenu() {
    menu.classList.toggle("menu_show");
}

fabars.addEventListener("click", handleMenu);

links.forEach((link) => {
    link.addEventListener("click", handleMenu);
});



// function mostrarOcultarMenu() {
//     var menu = document.querySelector('.menu');
//     menu.classList.toggle('active');
//   }