/*EJERCICIO 1:
a partir de la edad de una persona validar
- si tiene mas de 18, mencionarle que puede votar
- si tiene mas de 30, felicitarlo y decirle que puede votar
- si tiene mas de 50, mecionarle que pase a la casilla 5
- despedirse del usuario

let edad =5;
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





/*EJERCICIO 2:
apartir del lugar donde quiera vacacionar una persona, mostrarle el precio de su viaje

- por lo menos dos de los lugares debe costar lo mismo
- si el usuario nos da un valor que no exista en la lista, mostrarle un mensaje que indique que el destino que eligio pronto estara disponible
-despedirse del usuario

let lugar = 'españa';

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





/*EJERCICIO 3:
pedir al usuario un número
- si el número es par, pedir de nuevo un número
- si el número no es par, imprimir un mensaje de que el número es impar
-despedirse del usuario

let numero;

do{
    numero = prompt("digite un numero");
}
while (numero%2===0);

console.log(numero+ " es impar")
console.log("baiiii")*/





/*EJERCICIO 4:
pedir al usuario un nombre
- cambiar el valor de las vocales por (a=1, e=2, i=3, o=4, u=5)
- imprimir el resultado
- despedirse del usuario*/

const nombre=prompt("cual es tu nombre");
let Nuenombre='';

//inicialimzamos las variables para el ejercicio complenmtario 5
var a = 0;
var e = 0;
var i2 = 0;
var o = 0;
var u = 0;

for(let i=0; i< nombre.length; i++){
    switch(nombre[i]){
        case 'a':
            Nuenombre +=1
            a++; //agregamos contador para el 5
            break;
        case 'e':
            Nuenombre +=2
            e++;
            break;
        case 'i':
            Nuenombre +=3
            i2++;
            break;
        case 'o':
            Nuenombre +=4
            o++;
            break;
        case 'u':
            Nuenombre[i]=5
            u++;
            break;
        default:
            Nuenombre += nombre[i]
    }
}
console.log(Nuenombre)
//console.log("gracias y besos")


/*EJERCICIO 5:
complementar el ejercicio 4
- mencionar al usuario cuantas que vocales se reemplazaron y cuantas veces se reemplazo*/

console.log("Se reemplazaron las siguientes vocales: ");
if(a > 0){
    console.log("La letra a se reemplazo "+ a + " veces")
}
if(e > 0){
    console.log("La letra e se reemplazo "+ e + " veces")
}
if(i2 > 0){
    console.log("La letra i se reemplazo "+ i2 + " veces")
}
if(o > 0){
    console.log("La letra o se reemplazo "+ o + " veces")
}
if(u > 0){
    console.log("La letra u se reemplazo "+ u + " veces")
}
console.log("Byeee");

