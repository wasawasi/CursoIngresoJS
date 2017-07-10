function Mostrar()
{
// creo variables
	var numero = 0;
	var sum_neg = 0;
	var sum_pos = 0;
	var c_pos = 0;   // contador positivos
	var c_neg = 0;   //contador negativos
	var c_ceros = 0; //contador ceros
	var c_pares = 0; //contador de nros pares
	var pro_pos = 0; //promedio positivos
	var pro_neg = 0; //promedio negativos
	var dif_pos_neg = 0;

	var respuesta = confirm("¿ Seguro de Continuar ?");
	while (respuesta == true) {
		// faltaria validar la entrada de numeros, que no pueda ingresar texto.
		numero = prompt('Ingrese un Numero');
		numero = parseInt(numero);

		if (numero<0){
			sum_neg = sum_neg + numero;
			c_neg = c_neg + 1;
		}
		else if (numero>0){
			sum_pos = sum_pos + numero;
			c_pos = c_pos + 1;
		}
		else if (numero == 0){
			c_ceros = c_ceros + 1;
		}
		//numeros pares ? preguntar profesor, alguna funcion en javascript ? 

		respuesta = confirm('¿ Continuar ?');
	}

	// proceso informacion e informo

	pro_pos = sum_pos / c_pos;
	pro_neg = sum_neg / c_neg;

	dif_pos_neg = sum_pos + sum_neg;

	document.write("La suma de Negativos es: "+sum_neg+"</br> La suma de positivos es: "+sum_pos+" </br> Cantidad Nros Positivos: "+c_pos+" </br> Cantidad Negativos: "+c_neg+"</br> Cantidad de Ceros: "+c_ceros+" </br> Cantidad de Pares: "+"</br> Promedio de Positivos: "+pro_pos+"</br> Promedio de Negativos "+pro_neg+"</br> Positivos - Negativos: "+dif_pos_neg);// creo variables
	
}//FIN DE LA FUNCIÓN