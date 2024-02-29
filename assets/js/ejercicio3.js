// Selección de elementos
const valor1Input = document.querySelector('#valor1');
const valor2Input = document.querySelector('#valor2');
const resultadoSpan = document.querySelector('.resultado'); // Utilizando querySelector para seleccionar por clase
const btnSumar = document.querySelector('#btn-sumar');
const btnRestar = document.querySelector('#btn-restar');

// Función para validar si es un número
function esNumero(valor) {
    return !isNaN(valor);
}

// Función para sumar
function sumar() {
    const valor1 = +(valor1Input.value);
    const valor2 = +(valor2Input.value);
    if (!esNumero(valor1) || !esNumero(valor2)) {
        alert("Por favor, ingrese solo números.");
        return;
    }
    const resultado = valor1 + valor2;
    resultadoSpan.textContent = resultado;
}

// Función para restar
function restar() {
    const valor1 = +(valor1Input.value);
    const valor2 = +(valor2Input.value);
    if (!esNumero(valor1) || !esNumero(valor2)) {
        alert("Por favor, ingrese solo números.");
        return;
    }
    let resultado = valor1 - valor2;
    if (resultado < 0) {
        resultado = 0;
    }
    resultadoSpan.textContent = resultado;
}

// Event listeners para los botones
btnSumar.addEventListener('click', sumar);
btnRestar.addEventListener('click', restar);


