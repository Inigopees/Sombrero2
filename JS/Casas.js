export class Casas{

	constructor(Nombre,Fundador,Mascota,Colores,Alumnos){
		this.Nombre = Nombre;
		this.Fundador = Fundador;
		this.Mascota = Mascota;
		this.Colores = Colores;
		this.Alumnos = Alumnos;
	}

	set AñadirAlumnos(alumno){
		this.Alumno = alumno;
	}
};