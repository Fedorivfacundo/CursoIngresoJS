/*
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es menor de edad.
*/

function mostrar()
{
	let edadIngresada;
	let mensaje;
	//tomo la edad

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt (edadIngresada);

	if(edadIngresada >= 18)//edad ingeesada > 17
	{
		mensaje = "La persona es mayor de edad"
	} else{
		mensaje = "La persona es menor de edad"
	}
	alert(mensaje);

}//FIN DE LA FUNCION