			//import Alumnos from './JS/Alumnos.mjs'
			//Crear objetos de casas desde un fichero JSON
			//variable DatosCasas es el JSON de las casas
			var DatosCasas = '{"Casas":['+
				'{"Nombre":"Gryffindor","Fundador":"Godric Gryffindor","Mascota":"Leon dorado aslan","Colores":["Escarlata","dorado"],"Alumnos":[]},'+
				'{"Nombre":"Hufflepuff","Fundador":"Helga Hufflepuff","Mascota":"Tejon Negro","Colores":["Amarillo","Negro"],"Alumnos":[]},'+
				'{"Nombre":"Ravenclaw","Fundador":"Rowena Ravenclaw","Mascota":"Aguila de bronce","Colores":["Azul","Bronce"],"Alumnos":[]},'+
				'{"Nombre":"Slytherin","Fundador":"Salazar Slytherin","Mascota":"Serpiente plateada","Colores":["verde esmeralda","plata"],"Alumnos":[]}'+
			']}';
			
			//Hacemos un JSON.parse a la variable anteriormente creada y lo insertamos en la siguiente variable
			var Casas = JSON.parse(DatosCasas);
			console.log(Casas.Casas[0].Nombre);

			//Las variables usadas en esta pagina con JS
			var pregunta=0; //Variable usada para saber la pregunta que hay que visualizar
			var resultado=0; //Variable usada para saber los resultados, cambiando el valor por cada pregunta
			//Creamos el objeto colegios en este caso solo tenemos uno
			var Colegios = {	
					Nombre:'Hogwarts',
					FechaApertura:'20-1-990',
					Director:'Albus Dumbledore',
					Materia:'Magico',
					Casas :[Casas.Casas[0],Casas.Casas[1],Casas.Casas[2],Casas.Casas[3]]		
			};
			
			//Constructor de Alumnos
			class Alumnos{

				constructor(Nombre,Apellido){
					this.Nombre = Nombre;
					this.Apellido = Apellido;
				}
		
			};

			//Con esta funcion escondemos el div principal y mostramos la primera pregunta
			function mostrarPreguntas(){
				document.getElementById("Presentacion").style.display ="none";
				document.getElementById("Cuestionario").style.display ="flex";
				document.getElementById("CuestParte1").style.display ="flex";
			};

			//Con esta funcion al pulsar el boton cambiamos a la siguiente pregunta
			function siguientePregunta(){
				switch (pregunta){
					case 0:
						document.getElementById("CuestParte1").style.display ="none";
						document.getElementById("CuestParte2").style.display ="flex";
					break;

					case 1:
						document.getElementById("CuestParte2").style.display ="none";
						document.getElementById("CuestParte3").style.display ="flex";
					break;

					case 2:
						document.getElementById("CuestParte3").style.display ="none";
						document.getElementById("CuestParte4").style.display ="flex";
					break;

					case 3:
						document.getElementById("CuestParte4").style.display ="none";
						document.getElementById("CuestParte5").style.display ="flex";
						document.getElementById("botonSiguiente").style.display ="none";
					break;
				};
				pregunta++;
			};

			//Con esta función recopilamos todas las respuestas e insertamos los datos en el objeto
			function resultadoPreguntas() {
				//recogemos la respuesta de la primera pregunta
				let asignaturas = document.querySelectorAll("input[type='radio']");
				//recogemos respuestas de la segunda pregunta en la variable
				let hechizos = document.querySelectorAll("input[type='checkbox']");
				//recogemos la respuesta de la tercera pregunta
				let seres = document.querySelectorAll("input[type='radio']");
				//recogemos la respuesta de la tercera pregunta
				let adjetivos = document.querySelectorAll("input[type='radio']");
				//Cogemos el nombre que inserta el usuario
				let nombre = document.getElementById("Nombre").value;
				//Cogemos el apellido que inserta el usuario
				let apellido = document.getElementById("Apellido").value;



				//Miramos cual ha sido la respuesta del usuario y asignamos un valor a la variable respuesta
				for(let i=0;i<asignaturas.length;i++){
                	if(asignaturas[i].checked==true){
                		switch(asignaturas[i].value){
                			case "astronomia":
                				resultado = resultado+5;
                			break; 
                			case "vuelo":
                				resultado += 20;
                			break;
                			case "historia":
                				resultado -= 10;
                			break;
                			case "pociones":
                				resultado += 25;
                			break;
                		};
                	};
            	};

            	//Segunda pregunta, miramos la respuesta de esta
            	for(let i=0;i<hechizos.length;i++){
                	if(hechizos[i].checked==true){
                		resultado += parseInt(hechizos[i].value);
                	};
                };

                //Tercera pregunta, miramos la respuesta
                for(let i=0;i<seres.length;i++){
                	if(seres[i].checked==true){
                		switch(seres[i].value){
                			case "acromantula":
                				resultado += 5;
                			break;
                			case "basilisco":
                				resultado -= 20;
                			break;
                			case "cancerbero":
                				resultado += 10;
                			break;
                			case "dementor":
                				resultado += 15;
                			break;
                			case "hipogrifo":
                				resultado -= 3;
                			break;
                		};
                	};
            	};

            	//Cuarta pregunta, miramos la respuesta
            	for(let i=0;i<adjetivos.length;i++){
                	if(adjetivos[i].checked==true){
                		switch(adjetivos[i].value){
                			case "Gryffindor":
                				resultado -= 35;
                			break;
                			case "Hufflepuff":
                				resultado += 20;
                			break;
                			case "Ravenclaw":
                				resultado += 10;
                			break;
                			case "Slytherin":
                				resultado += 15;
                			break;
                		};
                	};
            	};

            	//Hacemos el calculo de las respuestas para saber a donde irian
            	if(resultado<=15){
					//Gryffindor
					console.log('1');
					var Alumno = new Alumnos(nombre,apellido);
					Casas.Casas[0].Alumnos.push(Alumno);
					console.log(Casas.Casas[0].Alumnos[1].Nombre);
            	}
            	else if(resultado>30 && resultado<=45){
					//Hufflepuff
					var Alumno = new Alumnos(nombre,apellido);
					Casas.Casas[1].Alumnos.push(Alumno);

            	}else if(resultado>45 && resultado<60){
					//Ravenclaw
					var Alumno = new Alumnos(nombre,apellido);
					Casas.Casas[2].Alumnos.push(Alumno);
            	}else{
					//Slytherin
					console.log('4');
					var Alumno = new Alumnos(nombre,apellido);
					Casas.Casas[3].Alumnos.push(Alumno);
					console.log(Casas.Casas[3].Alumnos[1].Nombre);
            	}
			};

			//Mostrar datos del colegio y sus casas
			function mostrarDatosColegio(){
				document.getElementById("Presentacion").style.display ="none";
				document.getElementById("Respuesta").style.display ="flex";
				document.getElementById('Respuesta').innerHTML+="<h1>Colegios:</h1><br>Nombre: "+Colegios.Nombre+"<br>FechaApertura : "+Colegios.FechaApertura+"<br>Director : "+Colegios.Director+"<br>Materia : "+Colegios.Materia+"<br>Casas : "
				for(let i=0;i<Colegios.Casas.length;i++){
					document.getElementById('Respuesta').innerHTML+="<li>"+Colegios.Casas[i].Nombre+"</li>";
				}	
			};
			
			//Vuelve a mostrar pestaña inicial
			function inicio(){
				document.getElementById("Presentacion").style.display ="flex";
				document.getElementById("Respuesta").style.display ="none";
				document.getElementById('Respuesta').innerHTML="<button id='Inicio' onclick='inicio()'>Pagina Principal</button>";
			};
