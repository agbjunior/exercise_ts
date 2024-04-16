function calcularNumero(numeroOne: number, numeroTwo: number): number{
    return numeroOne * numeroTwo;
}

console.log(calcularNumero(35, 70));

class Saudacao{
    nome: string
    constructor(nome: string){
        this.nome = nome
    }

    helloWorld(): string{
        return `${this.nome} diz Hello, world!`
    }
}

const saudacao = new Saudacao("João");
console.log(saudacao.helloWorld())




