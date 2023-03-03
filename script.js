let menuVisible = false;
//Función que oculta o muestra el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
        
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar () {
    document.getElementById("nav").classList="";
    menuVisible=false;
}


// function mostrarOcultarMenu() {
//     var menu = document.querySelector('.menu');
//     menu.classList.toggle('active');
//   }