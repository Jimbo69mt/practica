/*
3.  Escribe un script que realice las siguientes tareas:

+ Usa un bucle ```for``` para imprimir cada nombre en un arreglo.
+ Usa un bucle ```while``` para imprimir cada nombre en el mismo arreglo.
+ Usa un bucle ```do-while``` para imprimir cada nombre en el arreglo.

const nombres =["Ana", "Luis", "Carlos", "Maria"];
*/

const nombres = ["Ana", "Luis", "Carlos", "Maria"];

// Imprimir cada nombre usando un bucle for

console.log("Lista de nombres impresas usando un bucle for:");

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

// Imprimir cada nombre usando un bucle while

console.log("Lista de nombres impresas usando un bucle while:");

let idx = 0;
while (idx < nombres.length) {
  console.log(nombres[idx]);
  idx++;
}

// Imprimir cada nombre usando un bucle do-while

console.log("Lista de nombres impresas usando do-while:");

idx = 0;
do {
  console.log(nombres[idx]);
  idx++;
} while (idx < nombres.length);
