var Calculadora = ( function(){
 
  var foo = 'Module Pattern';
  var bar = 'ver 1.0';
 
  var sum = function( param1, param2 ){
    return param1 + param2;
  }
 
  return {
    myMessage: function(nombre){

    	//suma = sum(10,20)
      return nombre;
    }
  }
})();
 
console.log( Calculadora.myMessage("dario") ); // Module Pattern ver 1.0
//console.log( myApp.sum( 10, 5 ) ); // myApp.sum is not a function. sum es privada


//2+2 = 4


function obtenerValor(valor){

		if ( typeof valor === "number" ) {
			llenarCaja(valor);
		}

		if (valor == "reset") {
			resetCaja();

		}
		if (valor == "sig") {
			cambiaSigno();

		}
		if (valor == "punto") {
			ponerPunto();

		}
		if (valor == "mas") {
			suma();

		}
		if (valor == "menos") {
			resta();

		}
		if (valor == "dividido") {
			division();

		}
		if (valor == "por") {
			multiplicacion();

		}
		if (valor == "igual") {
			mostrarRes();

		}




}


function llenarCaja(val){
	var valorActual = document.getElementById('display').innerHTML;

	largo = largoCaja(valorActual);	
	
	if (largo < 8) {
		if (valorActual !=0) {
		valorActual = valorActual + val;
		}	
		if (valorActual == 0) {
		valorActual = val;
				//alert(valorActual);
		}
	}
	document.getElementById('display').innerHTML = valorActual;
//alert(valorActual)
}

function resetCaja(){

	document.getElementById('display').innerHTML = 0;
	bandera = false;
	memoria=0;
}

function largoCaja(valorCaja){
	return (valorCaja.length);
}

function cambiaSigno(){
	var valorActual = document.getElementById('display').innerHTML;

	valorActual = -valorActual;

	document.getElementById('display').innerHTML = valorActual;
}



bandera = false;
function ponerPunto(){
	var valorActual = document.getElementById('display').innerHTML;	
	if (bandera === false && valorActual != 0  ) {		
		valorActual = valorActual+".";
		document.getElementById('display').innerHTML = valorActual;
		bandera = true;
	}
}

memoria = 0;
function suma( ){
var valorActual = document.getElementById('display').innerHTML;
estado = "sumando";
if (valorActual !== "") {
valorActual = parseInt(valorActual);
memoria = valorActual + memoria;
document.getElementById('display').innerHTML = "";
console.log("sumado "+memoria);
resultado = memoria;
}
}

function resta(){
var valorActual = document.getElementById('display').innerHTML;
estado = "restando";
	if (valorActual !== "") {
		valorActual = parseInt(valorActual);
		if (memoria != 0) {
			memoria = memoria - valorActual;
		}else{
			memoria = valorActual;
		}
		
		document.getElementById('display').innerHTML = "";
		console.log("Restando "+memoria);
		resultado = memoria;

	}
}
function multiplicacion(){
var valorActual = document.getElementById('display').innerHTML;
estado = "multiplicando";
	if (valorActual !== "") {
		valorActual = parseInt(valorActual);
		if (memoria != 0) {
			memoria = memoria * valorActual;
		}else{
			memoria = valorActual;
		}		
		document.getElementById('display').innerHTML = "";
		console.log("Multiplicado "+memoria);
		resultado = memoria;

	}
}
function division(){
var valorActual = document.getElementById('display').innerHTML;
estado = "dividiendo";
	if (valorActual !=="" ) {
		valorActual = parseInt(valorActual);
		if (memoria != 0) {
			memoria = memoria / valorActual;
		}else{
			memoria = valorActual;
		}
		document.getElementById('display').innerHTML = "";
		console.log("Divivido "+memoria);
		resultado = memoria;

	}
}
 function mostrarRes(){
 	var valorActual = document.getElementById('display').innerHTML;
 	switch(estado) {
    case "sumando":    	
        suma();
        memoria = 0;
        break;
    case "restando":
    	resta();
    	memoria = 0;
        break;
    case "multiplicando":
    	multiplicacion();
    	memoria = 0;
        break;
    case "dividiendo":
    	division();
    	memoria = 0;
        break;        
    default:
        
}

 	document.getElementById('display').innerHTML = resultado;
 }