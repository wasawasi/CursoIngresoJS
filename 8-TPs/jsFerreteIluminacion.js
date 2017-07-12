/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    // select id Marca
    //input cantidad
    // input precioDescuento //muestra el resultado

    var precio  = 35;
    var cantidad;
    var p_final;
    var empresa;
    var tot_impuesto = 0;
    var impuesto;
    cantidad = document.getElementById('Cantidad').value;
    cantidad = parseInt(cantidad);
    empresa = document.getElementById('Marca').value;
    //valido que los datos sean positivos
    if(cantidad>=1){
      
        if (cantidad >= 6){
            p_final = (precio * cantidad) * .50; //10x35 = 350 - descuento(50%) = 175
            console.log('Se aplico un 50% por comprar mas de 6 Productos: $'+p_final);
        } 
        else if ( cantidad == 5 && empresa == 'ArgentinaLuz') { 
            p_final = (precio * cantidad) * .60; //5x35 = 175 - descuento(40%) = 105
            console.log('Como compro 5 unidades Marca ArgentinaLuz se aplica 40% Off: $'+p_final);
        } 
        else if ( cantidad == 5 && empresa !='ArgentinaLuz') {
            p_final = (precio * cantidad) * .70; //5x35 = 175 - descuento(30%) = 122,50
            console.log('Descuento del 30% off por comprar 5 unidades de otras Empresas: $'+p_final);
        } 
        else if ( cantidad == 4 && (empresa =='ArgentinaLuz' || empresa == 'FelipeLamparas')) {
            p_final = (precio * cantidad) * .75; //4x35 = 140 - descuento(25%) = 105
            console.log('25% OFF Por comprar 4 unidades de Empresa:'+empresa+" a pagar : $"+p_final);
        } 
        else if ( cantidad == 4 && !(empresa =='ArgentinaLuz' || empresa == 'FelipeLamparas')) {
            p_final = (precio * cantidad) * .80; //4x35 = 175 - descuento(80%) = 112
            console.log('Por comprar 4 unidades de Otras Marcas, 20% Off : $'+p_final);
        }
        else if ( cantidad == 3 && empresa == "ArgentinaLuz"){
            p_final = (precio * cantidad) * .85; // 3x35 = 105 - descuento 15% = 89,25
            console.log("Por comprar 3 unidades Marca: "+empresa+" 15% OFf Total: $"+p_final);
        } 
        else if ( cantidad == 3 && empresa == "FelipeLamparas"){
            p_final = (precio * cantidad)*.90; //3X35 = 70 - descuento 10% = 94.50
            console.log('Por comprar '+cantidad+' unidades de la empresa:'+empresa+' 10% OFF, total a pagar: '+p_final);
        }
        // calculo precio final
        else{
            p_final  = precio * cantidad;
            console.log('El precio a pagar es : '+p_final);
        }

    }   else {
        alert('Debes ingresar un Valor Mayor a 1');
    }
        if(p_final>120){
        impuesto = p_final * .10; // calculo el 10% de impuesto
        tot_impuesto = Math.round(p_final+impuesto); // al precio total le incremento 10%
        
        console.log('Usted pago $'+impuesto+' de IIBB');
        console.log('El precio Final con impuesto incluido es $' +tot_impuesto);
    }


    
}
