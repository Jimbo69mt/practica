/*
2. Escribe un script que realice las siguientes tareas:

+ Usa un bucle ```for``` para sumar todos los números de un arreglo.
+ Usa un bucle ```while``` para realizar la misma suma de números del arreglo.

const numeros =[1,2,3,4,5];
Devolvera: 15
*/

const numeros = [1, 2, 3, 4, 5];

//Suma usando for

let sumaFor = 0;
for (let i = 0; i < numeros.length; i++) {
  sumaFor += numeros[i];
}

console.log("Resulado de la suma usando for: ", sumaFor);

//Suma usando while

let sumaWhile = 0;
let idx = 0;
while (idx < numeros.length) {
  sumaWhile += numeros[idx];
  idx++;
}

console.log("Resulado de la suma usando while: ", sumaWhile);