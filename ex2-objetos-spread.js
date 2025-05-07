// https://www.w3schools.com/react/react_es6_spread.asp

const perro = {
    nombre: "Toby",
    edadCanina: 5
};

const edadHumana = perro.edadCanina * 7;

const perroConEdadHumana = {
    ...perro,
    edadHumana
}

console.log(perroConEdadHumana);


// Tu tarea:
// 1. Calcula la edad humana del perro (edadCanina * 7).
// 2. Usa el operador spread para copiar el objeto `perro`.
// 3. Añade un nuevo campo `edadHumana` al nuevo objeto.
// 4. Guarda el resultado en una constante llamada `perroConEdadHumana` y muéstralo por consola

// Esperado:
// {
//   nombre: "Toby",
//   edadCanina: 5,
//   edadHumana: 35
// }
