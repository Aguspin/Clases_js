class Programador extends Persona { // extends nos dice de donde estoy agarrando la informacion que vamos a heredar 
    constructor(nombre,edad,genero,colorCabello,colorOjos,ocupacion,lenguaje,experiencia,plataforma,certificaciones){
        super(nombre,edad,genero,colorCabello,colorOjos,ocupacion); //hace referencia hacia la clase de la cual estamos heredando, en este caso, de Persona 
        this.lenguaje = lenguaje;
        this.experiencia = experiencia;
        this.plataforma = plataforma;
        this.certificaciones = certificaciones;
    }
}