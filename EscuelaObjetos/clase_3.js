/*EJERCICIO 1
Son profesores en una escuela y manejan distintos grupos, es hora de subir calificaciones finales
Las calificaciones son de las siguientes materias: Matematicas, Español, Geografia, Ingles, Sociales
y los grupos disponibles son: grupoA, grupoB, grupoC, grupoD
no necesariamente impartes clases en todos los grupos pero por lo menos en 2 si
Hay que registrar las calificaciones de todos los alumnos, así que el sistema te preguntará
Nombre del alumno
Grupo del alumno
Calificaciones de cada materia

Al final, debe entregar un resumen de la siguiente manera:
Lista de alumnos por grupo:
Nombre promedio estatus
Calificación por materia

Promedio por grupo
Promedio por materia
Mejor calificacion por materia con el nombre del alumno
Mejor Promedio por Grupo con el nombre del alumno*/ 

/*const grupos = ['grupoA', 'grupoB', 'grupoC', 'grupoD'];
const materias = ['Matematicas', 'Español', 'Geografia', 'Ingles', 'Sociales'];
const data = {
    alumnosData: []
};

let respuesta = true;

do{
    const dataAlumno = {
        calificaciones: {}
    };
    dataAlumno['nombre'] = prompt('Nombre del alumno: ');
    dataAlumno['grupo'] = prompt('Grupo del alumno: ');
    dataAlumno['promedio'] = 0;
    dataAlumno['calificaciones'] = {}; //se inicia calificaciones como un objeto vacio y en el ciclo for se le 
                                        //agrega una nueva propiedad al arreglo de calificaciones 
    for (let materia of materias) {            //for in obtiene la posicion y for of el valor de la posicion (lo que hay dentro)                                       
       const calificacion = Number(prompt(`Calificacion de ${materia}: `));
       dataAlumno['promedio'] += calificacion;
       console.log(dataAlumno['promedio'])
       dataAlumno.calificaciones [materia.replace('ñ', 'n').toLocaleLowerCase()]
    }   
     
    dataAlumno['promedio'] = dataAlumno ['promedio'] / materias.length;

    dataAlumno['status'] = dataAlumno ['promedio'] < 7 ? 'Reprobado' : 'Aprobado';

    data.alumnosData.push(dataAlumno);

    const resp = prompt('resgistrar un alumno mas?: [s]Si [n]No').toLocaleLowerCase()
    respuesta = resp === 's' ? true : false;
    console.log(dataAlumno)

}while(respuesta);


const resumen ={};
//lista de alumnos por grupo
for (let alumno of data.alumnosData){
    const infoAlumno = `${alumno.nombre} ${alumno.promedio} ${alumno.status}`

    let caliAlumno = ` `;

    for (let materia of materias) {         
        caliAlumno += `${materia}: ${alumno.calificaciones [materia.replace('ñ', 'n').toLocaleLowerCase()]} \n`
     }  
     caliAlumno += `\n`;
     resumen[alumno.grupo].push([{infoAlumno: infoAlumno, caliAlumno:caliAlumno, promedio:alumno.promedio}]);
}

const keysGrupos = Object.keys(resumen);// entrega un arreglo con las propiedades del objeto, en este caso, los grupos
console.log('llaves de grupos: ',keysGrupos)


//promedio por grupo
for (let grupo of keysGrupos ){
    const grupoAlumnos = resumen[grupo];
    const totalAlumGrupo = grupoAlumnos.length;
    let promGrupo = 0;
    for (let alumno of grupoAlumnos) {
        promGrupo += alumno.promedio;
    }
    promGrupo = promGrupo / totalAlumGrupo;
    resumen[grupo]. promedioTotal = promGrupo;
}


const promMaterias = {};
//promedio por materia 
for (let alumno of data.alumnosData){
    for (let materia of materias) {    
        promMaterias[materia.replace('ñ', 'n').toLocaleLowerCase()].push(alumno.calificaciones [materia.replace('ñ', 'n').toLocaleLowerCase()])
       
     }  
}

resumen['promediosMaterias'] = {}

for (let materia of materias) {    
    let promTotal = 0;
    for (let calif of promMaterias [materia.replace('ñ', 'n').toLocaleLowerCase()] ){
        promTotal += calif;
    }
    resumen.promediosMaterias [materia.replace('ñ', 'n').toLocaleLowerCase()]= promTotal / promMaterias [materia.replace('ñ', 'n').toLocaleLowerCase()],length;
 }  
 
console.log('data:', data ); 
console.log('resumen:', resumen ); */









//ORIENTADO A OBJETOS       


/*                           nombre,edad,genero,colorCabello,colorOjos
const antonio = new Persona('Antonio', 30, 'M', 'negro', 'cafe','programador');
console.log(antonio);


const antoniProgramador = new Programador('Antonio', 30, 'M', 'negro', 'cafe','programador',['javascript','java'],10,['web','desktop'],['microsoft','Mdn'])

console.log(antoniProgramador);*/





const escuela = new Escuela('Patito');
let pregunta = 's';

do {
    const nombre = prompt('Nombre del Alumno: ');
    const grupo = prompt('Grupo del Alumno: ');
    const calificaciones = {};
    for(let materia of escuela.materias) {
        calificaciones[materia] = Number(prompt(`Calificacion de ${materia}`));
    }
    const alumno = new Alumno(nombre, grupo, calificaciones);
    alumno.calcularPromedio(escuela.materias);
    escuela.registarAlumno(alumno);
    pregunta = prompt('Registar otro alumno: [s]Si [n]No ').toLowerCase()
} while(pregunta === 's');


for (let alumno of escuela.alumnos) {
    alumno.verExpediente();
}
 







