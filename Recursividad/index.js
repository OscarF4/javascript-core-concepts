//Recursividad: Llamado a la misma función
//Estructura:
// if (/* validación */) {
//     //Llamados Recursivos
// } else {
//     //Llamados normales, sin recursividad
// }

function recursiva(numerito) {
    console.log(numerito);
    if (numerito < 5) {
        return recursiva(numerito + 1);
    } else {
        return 5;
    }
}
recursiva(0);