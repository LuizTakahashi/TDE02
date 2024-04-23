// 10. Crie uma função que receba um número como parâmetro e retorne o fatorial desse número.

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}


const numero = 5;
const resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);
