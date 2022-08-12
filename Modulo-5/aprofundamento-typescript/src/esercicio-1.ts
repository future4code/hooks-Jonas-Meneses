// Exercicio1
//a
const minhaString: string = "2"
// qdo coloc um numero aarece um sinal de erro, pois declaramos q a variavel é do tipo string e passamos um number. Mas, se o numero estiver entre aspas o Ts aceita.

//b
const meuNumero: number | string = 2
//para ele aceitar varios tipos de variavel podemos usar 

//c
 type pessoa = {
    nome:string,
    idade: number,
    corFavorita: ARCOIRIS
 }

 enum ARCOIRIS {
    VERMELHO = "vermelho",
    AZUL = "Azul",
    VERDE = "verde",
    ROSA = "Rosa"
 }

 const pessoa1 : pessoa = {
     nome: "Jonas",
     idade: 31,
     corFavorita: ARCOIRIS.VERDE
 }

 const pessoa2 : pessoa = {
    nome: "Jessy",
    idade: 37,
    corFavorita: ARCOIRIS.ROSA
}

const pessoa3 : pessoa = {
    nome: "Ana Esther",
    idade: 7,
    corFavorita: ARCOIRIS.VERDE
}