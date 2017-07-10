function Mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta=true;

while(respuesta==true)
{
	contador++;
	numero= prompt("ingrese su numero");
	numero=parseInt(numero);
	//validar
	acumulador=acumulador+=numero;
respuesta=confirm("quieres seguir");

}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN