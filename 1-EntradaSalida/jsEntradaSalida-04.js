/* Fedoriv Facundo
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{   //declaro mi variable
	let datoIngresado;
	let cajita;

    //pido el dato
	datoIngresado = prompt ("Ingresar Dato");

	//busco como acceder a la cajita y su contenido
     document.getElementById("txtIdNombre").value = datoIngresado;

	cajita = datoIngresado;

	//alert(mensaje);
	//document.getElementById("txtIdNombre").value = mensaje

	//variable = promp(alguito)entrada



}

