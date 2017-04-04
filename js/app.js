var Calculadora = (function() {

    var valorActual = "0";
    var bandera = false;
    var memoria = 0;
    var estado = "";
    var resultado = 0;

    var llenarCaja = function(val) {
        valorActual = document.getElementById('display').innerHTML;
        largo = (valorActual.length);
        if (largo < 8) {
            if (valorActual != 0) {
                valorActual = valorActual + val;
            }
            if (valorActual == 0) {
                valorActual = val;
                //alert(valorActual);
            }
        }
        


        document.getElementById('display').innerHTML = valorActual;
    }
    var resetCaja = function() {
        document.getElementById('display').innerHTML = 0;
        bandera = false;
        memoria = 0;
        valorActual = "0";
    }

    var cambiaSigno = function(){
    	valorActual = document.getElementById('display').innerHTML;
    	valorActual = -valorActual;
    	document.getElementById('display').innerHTML = valorActual;
    }

    var ponerPunto = function(){
    	valorActual = document.getElementById('display').innerHTML;
    	if (bandera === false && valorActual != 0) {
	        valorActual = valorActual + ".";
	        document.getElementById('display').innerHTML = valorActual;
	        bandera = true;
    	}
    }

    var sumar = function() {
    	valorActual = document.getElementById('display').innerHTML;
        estado = "sumando";
        if (valorActual !== "") {
        	document.getElementById('display').innerHTML = "";
            valorActual =  parseFloat(valorActual);
            memoria = valorActual + memoria;             
				 if (memoria % 1 == 0) {
				        resultado = (memoria);
				    }
				else{
				     resultado = (memoria).toFixed(1) ;
				    }
            bandera = false;
            console.log(memoria);
        }
    }
    var restar = function() {
    	valorActual = document.getElementById('display').innerHTML;
        estado = "restando";
        if (valorActual !== "") {
        	document.getElementById('display').innerHTML = "";
            valorActual =  parseFloat(valorActual);
            if (memoria != 0) {
                memoria = memoria - valorActual;
            } else {
                memoria = valorActual;
            }   
				 if (memoria % 1 == 0) {
				        resultado = (memoria);
				    }
				else{
				     resultado = (memoria).toFixed(1) ;
				    }
            bandera = false;
        }
    }

    var multiplicar = function() {
    	valorActual = document.getElementById('display').innerHTML;
        estado = "multiplicando";
        if (valorActual !== "") {
        	document.getElementById('display').innerHTML = "";
            valorActual =  parseFloat(valorActual);
            if (memoria != 0) {
                memoria = memoria * valorActual;
            } else {
                memoria = valorActual;
            }           
				 if (memoria % 1 == 0) {
				        resultado = (memoria);
				    }
				else{
				     resultado = (memoria).toFixed(1) ;
				    }

             

            bandera = false;

        }
    }
    var dividir = function() {
    	valorActual = document.getElementById('display').innerHTML;
    	estado = "dividiendo";
        if (valorActual !== "") {
        	document.getElementById('display').innerHTML = "";
            valorActual =  parseFloat(valorActual);
            if (memoria != 0) {
                memoria = memoria / valorActual;
            } else {
                memoria = valorActual;
            }             
				 if (memoria % 1 == 0) {
				        resultado = (memoria);
				    }
				else{
				     resultado = (memoria).toFixed(1) ;
				    }
            bandera = false;

        }
    }
    var mostrarRes = function(){
    	switch (estado) {
		    case "sumando":
		        sumar();
		        memoria = 0;
		        break;
		    case "restando":
		        restar();
		        memoria = 0;
		        break;
		    case "multiplicando":
		        multiplicar();
		        memoria = 0;
		        break;
		    case "dividiendo":
		        dividir();
		        memoria = 0;
		        break;
		    default:

		}
	resultado = String(resultado);
		
    document.getElementById('display').innerHTML = resultado.substr(0,8);
    }

    return {
        llenarCaja: function(valor) {
            return llenarCaja(valor);
        },
        resetCaja:function(){
        	return resetCaja();
        },
        cambiaSigno:function(){
        	return cambiaSigno();
        },
        ponerPunto:function(){
        	return ponerPunto();
        },
        sumar:function(){
        	return sumar();
        },
        restar:function(){
        	return restar();
        },
        multiplicar:function(){
        	return multiplicar();
        },
        dividir:function(){
        	return dividir();
        },
        mostrarRes:function(){
        	return mostrarRes();
        }
    }
})();

function controlador(valor) {

    if (typeof valor === "number") {
        Calculadora.llenarCaja(valor);
    }

    if (valor == "reset") {
        Calculadora.resetCaja();

    }
    if (valor == "sig") {
        Calculadora.cambiaSigno();

    }
    if (valor == "punto") {
       Calculadora.ponerPunto();

    }
    if (valor == "mas") {
        Calculadora.sumar();

    }
    if (valor == "menos") {
       Calculadora.restar();

    }
    if (valor == "dividido") {
        Calculadora.dividir();

    }
    if (valor == "por") {
        Calculadora.multiplicar();

    }
    if (valor == "igual") {
        Calculadora.mostrarRes();

    }

}
