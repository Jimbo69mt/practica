/*
4. Crea un objeto llamado persona que contenga las siguientes propiedades:

```nombre``` (cadena de texto)
```edad```(número)
```profesion```(cadena de texto)

Define una función llamada ```actualizarInformacion``` que reciba el objeto ```persona``` y dos parámetros: ```nuevaEdad``` y ```nuevaProfesion```. La función debe actualizar la edad y la profesión de la persona en el objeto y luego mostrar la información actualizada en la consola.
*/

let persona = {
    nombre: "Juan",
    edad: 25,
    profesion: "Desarrollador web"
};

function actualizarInformacion(personaParaActualizar, nuevaEdad, nuevaProfesion) {
    personaParaActualizar.edad = nuevaEdad;
    personaParaActualizar.profesion = nuevaProfesion;
    return personaParaActualizar;
}

console.log("Información antes de actualizar: ",persona);
console.log("Información actualizada luego de ejecutar la función: ",actualizarInformacion(persona,65,"Abogado"));