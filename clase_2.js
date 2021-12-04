/*EJERCICIO 1
Generar una función donde imprima su nombre completo:

function Nombre(){
  console.log('Agustin Garcia Cervantes')
}

Nombre()*/




/*EJERCICIO 2
preguntarle al usuario su nombre y edad
Saludarlo
Si el usuario tiene mas de 18 años, decirle que puedo votar
Si el usuario tiene menos de 18 años, verificar si la tercera letra de su nombre es una vocal, si lo es, decirle que puede votar solo por esta vez
Despedirse del usuario


const nombre=prompt("cual es tu nombre");

const edad= Number (prompt("cual es tu edad")); // el number cambia la cadena a numero

console.log('hola '+nombre)

   if(edad>18){
     console.log('puedes votar')
   }
   else{
     const caracter = nombre [2];
     switch(caracter){
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':  
        console.log('puede votar por esta ocasion');
        break;
      default:
        console.log('Nel we, no puedes votar')
     }

   }
   console.log('Muchas gracias')*/






   /*EJERCICIO 3
   Mostrarle al usuario un menu
1. doble del numero
2. Multiplicacion de numeros

Si el usuario elige la opcion 1, solo pedirle un numero, imprimir resultado y salir
Si el usuario elige la opcion 2, solicitar los dos numeros, multiplicarlos, imprimir resultado y salirMostrarle al usuario un menu
1. doble del numero
2. Multiplicacion de numeros

Si el usuario elige la opcion 1, solo pedirle un numero, imprimir resultado y salir
Si el usuario elige la opcion 2, solicitar los dos numeros, multiplicarlos, imprimir resultado y salir



   console.log('opcion 1');
   console.log('opcion 2');

   const opcion= Number (prompt("cual es tu opcion ")); //
   const Num1= Number (prompt("Digite un numero"));

   if(opcion===1){
 
    NueNumero=Num1*2;
    console.log('El doble de tu numero es '+NueNumero);
   }
   else if (opcion===2){
    const Num2= Number (prompt("Digite su primer numero"));
    const Num3= Number (prompt("Digite su segundo numero"));
    NueNumero1=Num2*Num3;
    console.log('La multiplicacion de tus numero es '+ )

   }
*/




/*EJERCICIO 4
Generar un programa que permita al usuario guardar una lista de nombres, preguntar si desea guardar uno nuevo,
si la respuesta del usuario es afirmativa, pedir un nuevo nombre y guardarlo, volver a preguntar al usuario si desea 
guardar un nuevo nombre, si es negativa la respuesta, imprimir la lista de nombres uno por uno y terminar el programa


const personas = []
let pregunta = "s"
do{

personas.push(prompt("Dame un nombre qlo: "));
pregunta = prompt("Quieres agregar otro nombre? s o n")

}
while (pregunta == "s")

console.log(personas.length);
for (let i=0; i<personas.length; i++){
  console.log(personas[i]);

}*/



/*EJERCICIO 5 
Pedir Nombre del Alumno,
Pedir la calificación de 4 materias
Preguntar si registrar un nuevo alumno
Si el usuario dice que si, preguntar los mismos datos
De lo contrario, 
Imprimir el nombre Alumno, promedio y el estatus (Reprobo o Aprobo)
Reprobo menor que 7
Aprobo mayor o igual que 7


let alumnos = []
let calif = []
let stat = []

let pregunta = "s"
do{
  let calif2 = []

arreglo.push(prompt("Dame un nombre del alumno: "));

for(let i=0;i<3;i++){
  promedio += Number (prompt(`Dame las 4 calificaciones del alumno: ${i+1}`));
}
promedio = promedio/4;

calif.push(promedio)
stat.push(promedio<7 ? "Reprobado" : "Aprobado")  //TERNARIO===> ? equivale al "entonces, : equivale al sino"

pregunta = prompt("Quieres agregar otro Alumno? si o no")

}
while (pregunta == "si");

for(let i=0; i<alumnos.length; i++){
  console.log(`Nombre: ${alumnos[i]} Promedio: ${calif[i]} Estatus: ${stat[i]}`)
}*/
