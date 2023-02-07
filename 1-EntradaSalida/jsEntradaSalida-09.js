/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	// declaro las variables
	let sueldoIngresado;
	let porcentajeAplicado;
	let porcentaje;
	let resultado;

	//multiplicaria en negartivo y daria positivo
	porcentaje = 10;
	
	sueldoIngresado = document.getElementById("txtIdSueldo").value;

	//sueldoIngresado = parseInt(sueldoingresado);

	//parseo por con parse float
	sueldoIngresado = parseFloat(sueldoIngresado);
	//saco porcentaje

	porcentajeeAplicado = sueldoIngresado * porcentaje / 100; // otra variable
	//porcentajeAplicado = sueldoIngresado * .1;

	//sumo
	resultado = sueldoIngresado + porcentajeAplicado;
	
	document.getElementById("txtIdResultado").value = resultado;

	
}
