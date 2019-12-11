export default class Alumnos{

	export constructor(Nombre,Apellido){
		this.Nombre = Nombre;
		this.Apellido = Apellido;
	}

	export get Alumno(){
		return this.Nombre+" "+this.Apellido;
	}
};