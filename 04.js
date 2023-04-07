/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  var numString = num.toString();
  longuitud = numString.length;
  for(var i = 0; i < Math.floor(longuitud / 2); i++){
    if(numString[i] !== numString[longuitud - i - 1]){
      return false;
    }
  }
  return true;
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico