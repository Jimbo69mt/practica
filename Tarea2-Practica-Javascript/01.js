/*
1. Escribe un script que utilice los bucles ```for``` y ```while``` para realizar las siguientes tareas:

+ Define un valor entero.
+ Muestra en pantalla una lista de números desde 0 hasta el valor definido.
+ Los números deben estar separados por comas.
Ingresando: 5
Devolvera: 0, 1, 2, 3, 4, 5
*/

let entero = 5;
let listaNumeros="";
for (let i = 0; i <= entero; i++) {
    listaNumeros=listaNumeros+i;
    if(i<entero){
        listaNumeros=listaNumeros+", ";
    }
}

console.log("Lista generada usando for: ",listaNumeros);

listaNumeros="";
num=0;
while(num <= entero){
    listaNumeros=listaNumeros+num;
    if(num<entero){
        listaNumeros=listaNumeros+", ";
    }
    num++;
}

console.log("Lista generada usando while: ",listaNumeros);