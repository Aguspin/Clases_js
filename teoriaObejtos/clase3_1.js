const nombres = ['Pedro', 'pepe', 'jose'];
//a:4, e:3, i:1, o=0, u,6

function validaCaracter(caracter, nombreActual){
    switch(caracter){
        case 'a':
            nuevoNombre += '4';
            break;
        case 'e':
            nuevoNombre += '3';
            break;
        case 'i':
            nuevoNombre += '1';
            break;
        case 'o':
            nuevoNombre += '0';
            break;
        case 'u':
            nuevoNombre += '6';
             break;
        default:
            nuevoNombre +=caracter;
    }

}

const nuevosNombres = nombres.map( (nombre) => {
    let nuevoNombre = '';
    for(let caracter of nombre){

    }
    return nuevoNombre;

});

console.log(nuevosNombres)