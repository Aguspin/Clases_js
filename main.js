/*let edad =5;
 if (edad>50){
     console.log("pase a la casilla 5")
 } else if (edad > 30 ){
     console.log("felicidades, puede votar")
 } else if (edad > 18){
     console.log("puedes votar")
 }
 else {
     console.log("eres menor de edad")
 }
  console.log("muchas gracias y hasta la proxima")*/

/*let lugar = 'españa';

switch (lugar){
    case 'francia':
        console.log("Ir a frnacia nos sale en 5 peso")
        break;
    case 'españa':
        console.log("Ir a españa nos sale ne 5 peso")
        break;
    default:
        console.log( lugar + " pronto estara disponible")
}
console.log("gracias por tu visita")*/


/*let numero;

do{
    numero = prompt("digite un numero");
}
while (numero%2===0);

console.log(numero+ " es impar")
console.log("baiiii")*/

const nombre=prompt("cual es tu nombre");
let Nuenombre='';

for(let i=0; i< nombre.length; i++){
    switch(nombre[i]){
        case 'a':
            Nuenombre +=1
            break;
        case 'e':
            Nuenombre +=2
            break;
        case 'i':
            Nuenombre +=3
            break;
        case 'o':
            Nuenombre +=4
            break;
        case 'u':
            Nuenombre[i]=5
            break;
        default:
            Nuenombre += nombre[i]
    }
}
console.log(Nuenombre)
console.log("gracias y besos")

