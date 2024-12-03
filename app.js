// Paso 1: Declaración de Variables
let num1, num2, operacion;

// Paso 2: Función para realizar operaciones
function realizarOperacion(num1, num2, operacion) {
    let resultado;

    // Estructura condicional para determinar la operación a realizar
    if (operacion === "suma") {
        resultado = num1 + num2;
    } else if (operacion === "resta") {
        resultado = num1 - num2;
    } else if (operacion === "multiplicacion") {
        resultado = num1 * num2;
    } else if (operacion === "division") {
        // Validación para evitar división por cero
        if (num2 === 0) {
            return "Error: No se puede dividir entre cero";
        }
        resultado = num1 / num2;
    } else {
        return "Error: Operación no válida";
    }

    return resultado;
}

// Paso 3: Realizar validaciones de datos y operaciones
function validarOperacion(operacion) {
    const operacionesValidas = ["suma", "resta", "multiplicacion", "division"];
    return operacionesValidas.includes(operacion);
}

// Paso 4: Bucle para realizar múltiples operaciones
while (true) {
    // Pedir al usuario los números y la operación
    num1 = parseFloat(prompt("Introduce el primer número:"));
    num2 = parseFloat(prompt("Introduce el segundo número:"));
    operacion = prompt("Introduce la operación (suma, resta, multiplicacion, division):").toLowerCase();

    // Validar la operación
    if (!validarOperacion(operacion)) {
        alert("Operación no válida, por favor ingresa una operación válida.");
        continue;  // Si la operación no es válida, reiniciar el ciclo
    }

    // Llamada a la función realizarOperacion
    let resultado = realizarOperacion(num1, num2, operacion);

    // Mostrar el resultado de la operación
    alert(`Resultado de la ${operacion}: ${resultado}`);

    // Preguntar si el usuario quiere hacer otra operación
    let continuar = prompt("¿Deseas realizar otra operación? (sí/no):").toLowerCase();
    if (continuar !== "sí") {
        alert("Gracias por usar la calculadora. ¡Hasta luego!");
        break;  // Si el usuario no quiere seguir, salimos del bucle
    }
}
