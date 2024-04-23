// 9. Escreva uma função que receba um número como parâmetro e retorne verdadeiro se for par e falso caso contrário.

function ehPar(numero) {
    if(numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(ehPar(4));  
console.log(ehPar(7));  
