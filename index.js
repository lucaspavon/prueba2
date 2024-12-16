const resultadoParcial = document.getElementById("resultadoParcial");
const operacionActualDiv = document.getElementById("operacionActual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");
const botonIgual = document.getElementById("igual");
const botonBorrarTodo = document.getElementById("borrarTodo");

let operacionActual = "";
let operador = "";
let primerNumero = "";
let segundoNumero = "";
let resultadoCalculado = false;


const numeroInput = document.getElementById("numero");

function sumar() {
    // Convertir el valor actual a número e incrementarlo
    let numeroActual = numeroInput.value; 
    numeroActual++;
    numeroInput.value = numeroActual; // Actualizar el valor del input
}

function restar() {
    // Convertir el valor actual a número y decrementarlo
    let numeroActual = numeroInput.value; 
    numeroActual--;
    numeroInput.value = numeroActual; // Actualizar el valor del input
}

// Función para manejar los números clickeados
botonesNumeros.forEach((boton) => {
    boton.addEventListener("click", () => {
        // Reiniciar operacionActual si acaba de calcularse un resultado
        if (resultadoCalculado) {
            operacionActual = ""; // Reiniciar la operación
            resultadoCalculado = false; // Resetear la bandera
        }
        operacionActual += boton.textContent; // Concatenar el número clickeado
        operacionActualDiv.textContent = operacionActual; // Mostrar en el visor
    });
});

// Función para manejar los operadores clickeados
botonesOperadores.forEach((boton) => {
    boton.addEventListener("click", () => {
        if (operador) {
            calcular(); // Calcular el resultado parcial si ya hay un operador seleccionado
        }
        operador = boton.textContent;
        primerNumero = operacionActual; // Guardar el primer número
        operacionActual = ""; // Reiniciar la operación actual
        operacionActualDiv.textContent = operador; // Mostrar el operador en el visor
        resultadoParcial.textContent = primerNumero; // Mostrar el primer número en el visor superior
        resultadoCalculado = false; // Asegurar que no esté en modo "resultado calculado"
    });
});

// Función para calcular el resultado final
botonIgual.addEventListener("click", () => {
    if (operador && operacionActual) {
        calcular();
        resultadoCalculado = true; // Activar la bandera para evitar concatenar al resultado
    }
});

// Función para reiniciar la calculadora
botonBorrarTodo.addEventListener("click", () => {
    operacionActual = "";
    operador = "";
    primerNumero = "";
    segundoNumero = "";
    operacionActualDiv.textContent = ""; // Borrar el visor de la operación actual
    resultadoParcial.textContent = ""; // Borrar el visor del resultado parcial
    resultadoCalculado = false; // Resetear la bandera
});

// Función para realizar el cálculo
function calcular() {
    segundoNumero = operacionActual; // Guardar el segundo número
    let resultado;
    try {
        resultado = eval(`${primerNumero} ${operador} ${segundoNumero}`); // Evaluar la expresión
    } catch (error) {
        resultado = "Error"; // Manejar errores en el cálculo
    }
    resultadoParcial.textContent = resultado; // Mostrar el resultado en el visor superior
    operacionActualDiv.textContent = ""; // Limpiar el visor de la operación actual
    operacionActual = resultado; // Preparar el resultado para nuevas operaciones
    operador = ""; // Reiniciar el operador
}
