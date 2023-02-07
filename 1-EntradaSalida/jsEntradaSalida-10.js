/*FACUNDO FEDORIV
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*EJ 10 
{
	let importe;
	let porcentaje;
	let importeFinal;
	let descuento;

	descuento = 25;

	importe = document.getElementById("txtIdImporte").value;

	importe = parseFloat(importe);

	porcentaje = importe * descuento / 100;

	importeFinal = importe - porcentaje

	document.getElementById("txtIdResultado").value = importeFinal;


	
} */
//Fedoriv Facundo ejercicio 10bis:

function mostrarAumento()
{
let importe;
let descuentoIngresado;
let resultado;
let descuento;

importe = document.getElementById("txtIdImporte").value;
importe = parseInt(importe);

descuentoIngresado = prompt ("Ingresar un porcentaje de descuento");
descuentoIngresado = parseInt (descuentoIngresado);

//             100 * 0.25 = 25
descuento = importe * descuentoIngresado/100;
//             100 - 25
resultado = importe - descuento;

document.getElementById("txtIdResultado").value = resultado;
}
