function Mostrar()
{

	var contador=0;
	var respuesta=true;
	var numero;
	var max;
	var min;
	
while(respuesta == true)
	{
		numero=prompt("ingrese su numero");
		numero=parseInt(numero);
		respuesta=confirm("desea seguir ingresando numeros?");
		contador=contador+ 1;
	
	if(contador==1)
{
	max=numero;
	min=numero;


}
else if (numero<min)
{
	max=numero;
}
else
{
	min=numero;
}
	}
	document.getElementById('maximo').value = "El numero Maximo es: "+max;
	document.getElementById('minimo').value = 'El numero Minimo es: '+min;

}//FIN DE LA FUNCIÓN