/*
  Al ingresar una edad solo debemos informar si la persona NO es adolescente.
  */



function mostrar()
{
	let edad;
	let mensaje;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad < 13 || edad > 17)
	{
		mensaje = "La persona no es adolescente";
	}
	alert(mensaje);
}
