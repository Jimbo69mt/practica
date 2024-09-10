//devuelve el numero mayor y menor del array

let array= [2,5,7,15,-100,-55];

function devuelvaMenorMayor(arr){
    let menor = arr[0];
    let mayor = arr[0];
    // for (let num of arr) {
    //     if (num > menor){
    //         mayor = num;
    //     } else if (num < mayor){
    //         menor = num;
    //     }
    // }
    for (let num of arr) {
        menor=menor<num ? menor : num;
        mayor=mayor>num ? mayor : num;  
    }
    return [menor,mayor];
}

let numeros = devuelvaMenorMayor( array)
console.log("El número mayor es: ",numeros[1]," y el número menor es: ",numeros[0]);