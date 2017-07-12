function Mostrar()
{
	var contador = 10;
	var repeticiones = 0;
	while(contador>=1 &&contador<=10 ){
		alert(contador);
		contador = contador -1;
		repeticiones = repeticiones+1;

		document.getElementById('mostrar').innerHTML = "Se repitio :"+repeticiones+" Veces";
	}
}//FIN DE LA FUNCIÓN