// 8. Crie uma função chamada menorNumero que recebe três números como parâmetros e retorna o menor deles.

function menorNumero(num1, num2, num3) {
    if (num1 <= num2 && num1 <= num3) {
        return num1;
    } else if (num2 <= num1 && num2 <= num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log(menorNumero(10, 5, 8)); 