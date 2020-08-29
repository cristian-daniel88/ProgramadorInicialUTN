botonLogin = document.getElementById('login-li')
botonTutorial = document.getElementById('tutorial-li')
botonChoice = document.getElementById('choice-li')

// funcion para mostrar con botones
function mostrar(caja) {
    var botonera = document.getElementById(caja)
    botonera.style.display = "block"
}

function ocultar(caja) {
    var botonera = document.getElementById(caja)
    botonera.style.display = 'none'
}

function hover(caja) {
    var botonera = document.getElementById(caja)
    botonera.style.background = 'none'
}

function mantenerhover(caja) {
    var botonera = document.getElementById(caja)
    botonera.style.background = 'rgba(10, 10, 56,0.9)'
    botonera.style.display = 'inline-block'
    botonera.style.borderRadius = '15px'
}

function ocultarhover(caja) {

    var botonera = document.getElementById(caja)
    botonera.style.background = 'none'
}

// Evento para mostrar con botones
botonLogin.addEventListener('click', e => {
    mostrar('login')
    ocultar('tutoriales') 
    ocultar('choice')
    ocultarhover('tutorial-li') 
    ocultarhover('choice-li') 
    mantenerhover('login-li')
})

botonTutorial.addEventListener('click', e => {
    mostrar('tutoriales') 
    ocultar('login')
    ocultar('choice') 
    hover('login-li')
    mantenerhover('tutorial-li')
    ocultarhover('choice-li')
    galeria()
}) 

botonChoice.addEventListener('click', e => {
    mostrar('choice') 
    ocultar('login') 
    ocultar('tutoriales')
    mantenerhover('choice-li')
    ocultarhover('tutorial-li') 
    ocultarhover('login-li')
})






// choice

function choice(t) {
    var lenguajes = ['b', 'c', 'd', 'a', 'e']
    var nro = prompt('Ingrese el número de la palabra en ingles: de 0 a 4')
    var ganador = document.querySelector('#ganador')


    if (nro < 0 || nro > 4) {
        alert('numero incorrecto')

    } else {

        var codigo = prompt('Ingrese la letra de la palabra en castellano: a, b, c , d, e ')
        if (codigo == lenguajes[nro]) {
            alert('Traducción correcta')
            ganador.style.display = 'block'
        } else {
            alert('Traduccion incorrecta')
            ganador.style.display = 'none'
        }
    }


}


// galeria
function galeria () {
    var tobe = document.getElementById('tobe')
    var dO = document.getElementById('do')
    var have = document.getElementById('have')
    var objetos = document.getElementById('objetos')
    var oficios = document.getElementById('oficios')
    var niveles = [tobe, dO, have, objetos, oficios];
    var nro = prompt('Elige un nivel de 1 a 5')



  
    if (nro < 1 || nro > 5) {
        alert('Número incorrecto')
    } else {
        
    } 
    if(nro == 1) {
        niveles[0].style.display='block'
        niveles[1].style.display='none'
        niveles[2].style.display='none'
        niveles[3].style.display='none'
        niveles[4].style.display='none'
        
    } else { 
        
       
    }
    if (nro == 2) {
        niveles[0].style.display='none'
        niveles[1].style.display='block'
        niveles[2].style.display='none'
        niveles[3].style.display='none'
        niveles[4].style.display='none'
        
        


        
    } else{
        
    }
    if (nro == 3) {
        niveles[0].style.display='none'
        niveles[1].style.display='none'
        niveles[2].style.display='block'
        niveles[3].style.display='none'
        niveles[4].style.display='none'
    } else {

    }
    if (nro == 4) {
        niveles[0].style.display='none'
        niveles[1].style.display='none'
        niveles[2].style.display='none'
        niveles[3].style.display='block'
        niveles[4].style.display='none'
    } else {

    }
    if (nro == 5) {
        niveles[0].style.display='none'
        niveles[1].style.display='none'
        niveles[2].style.display='none'
        niveles[3].style.display='none'
        niveles[4].style.display='block'
    } else {
       
    }
    if (!isNaN(nro) && nro != null && nro != "" ){

    }else {
        alert('No es un número')
    }



}



    
