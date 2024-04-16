"use strict";
function calcularNumero(numeroOne, numeroTwo) {
    return numeroOne * numeroTwo;
}
console.log(calcularNumero(35, 70));
class Saudacao {
    constructor(nome) {
        this.nome = nome;
    }
    helloWorld() {
        return `${this.nome} diz Hello, world!`;
    }
}
const saudacao = new Saudacao("João");
console.log(saudacao.helloWorld());
