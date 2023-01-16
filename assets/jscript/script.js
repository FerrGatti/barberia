// Creamos una funcion con mediaqueryList para que el resto de las funciones se apliquen solo cuando el minimo de pantalla es de 1100px

var mediaqueryList = window.matchMedia("(min-width: 1100px)");
mediaqueryList.addListener( function ejecutar(EventoMediaQueryList) {
      console.log('Ejecutado el listener', EventoMediaQueryList);
});

//
//Creamos la funcion con la que, al scrollear mas de 100px agregaremos classes con nuevas propiedades para que se adapten al header sticky. Al scrollear nuevamente para arriba estas clases son removidas dejando las clases originales.
//
window.addEventListener('scroll', function(){
    const scrolled = window.scrollY;

    console.log(scrolled);
    var mediaqueryList = window.matchMedia("(min-width: 1100px)");
    mediaqueryList.addListener( function ejecutar(EventoMediaQueryList) {
      console.log('Ejecutado el listener', EventoMediaQueryList);
});
    if(mediaqueryList.matches){
        if(scrolled > 0){
            document.getElementById('header').classList.add('header2');
            document.getElementById('btn').classList.add('btn-animado2');
            document.getElementById('btn2').classList.add('btn-animado2');
            document.getElementById('btn3').classList.add('btn-animado2');
            document.getElementById('menu').classList.add('menu2');
            document.getElementById('menu').classList.remove('menu');
            console.log(mediaqueryList.matches)
        }else(
            document.getElementById('header').classList.remove('header2'),
            document.getElementById('btn').classList.remove('btn-animado2'),
            document.getElementById('btn2').classList.remove('btn-animado2'),
            document.getElementById('btn3').classList.remove('btn-animado2'),
            document.getElementById('menu').classList.remove('menu2'),
            document.getElementById('menu').classList.add('menu')
        )
    }
})
//
//Display on de titulo Alura Barbery con scroll
//
window.addEventListener('scroll', function(){
    var mediaqueryList = window.matchMedia("(min-width: 1200px)");
        mediaqueryList.addListener( function ejecutar(EventoMediaQueryList) {
        console.log('Ejecutado el listener', EventoMediaQueryList);
});
    let scrolled = window.scrollY;
    
    if(mediaqueryList.matches){
        if(scrolled > 450){
            document.getElementById('texto-titulo').classList.add('texto-titulo2');
        }else{
            document.getElementById('texto-titulo').classList.remove('texto-titulo2')
        }
    }
})
//
//Animaciones diferenciales
//
window.addEventListener('scroll', function(){
    var mediaqueryList = window.matchMedia("(min-width: 1100px)");
        mediaqueryList.addListener( function ejecutar(EventoMediaQueryList) {
        console.log('Ejecutado el listener', EventoMediaQueryList);
});
    let scrolled = window.scrollY;
    
    if(mediaqueryList.matches){
        if(scrolled > 1050){
            document.getElementById('titulo-principal').classList.add('titulo-principal2'); 
        }else{
            document.getElementById('titulo-principal').classList.remove('titulo-principal2')
        }
    }
        if(mediaqueryList.matches){
        if(scrolled > 1250){
            document.getElementById('lista-diferenciales').classList.add('lista-diferenciales2');
        }else{
            document.getElementById('lista-diferenciales').classList.remove('lista-diferenciales2')
        }
    }
        if(mediaqueryList.matches){
            if(scrolled > 1400){
                document.getElementById('imagen-diferenciales').classList.add('imagen-diferenciales2');
            }else{
                document.getElementById('imagen-diferenciales').classList.remove('imagen-diferenciales2');
        }
    }
})
//
//
//Cambiar display de tabla en products
//
//
function displayOn(){
    document.getElementById('cabello').style.display = "block";
}
function displayOff(){
    document.getElementById('cabello').style.display = "none";
}
function displayOn2(){
    document.getElementById('barba').style.display = "block";
}
function displayOff2(){
    document.getElementById('barba').style.display = "none";
}
function displayOn3(){
    document.getElementById('merch').style.display = "block";
}
function displayOff3(){
    document.getElementById('merch').style.display = "none";
}


