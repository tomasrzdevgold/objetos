/*
exercicio 1
no console vai aparecer

Matheus Nachtergaele
Virginia Cavendish
canal: "Globo"
horario: "14h"


exercicio 2

a)
{nome: 'Juca', idade: 3, raca: 'SRD'}
{nome: 'Juba', idade: 3, raca: 'SRD'}
{nome: 'Jubo', idade: 3, raca: 'SRD'}

b)
os tres pontos... fazem uma cópia de um objeto,
para assim manipular o objeto sem alterar o original,
caso que precisemos dele no futuro


exercicio 3

a)
false
undefined

b)
no primeiro console.log a gente chamou a função e passou o objeto
pessoa e o string backender, e quando a gente fez o return o comando
objeto[propiedade] ele procurou dentro do nosso objeto a palavra backender
e achou, e botou o tipo ou conteúdo que era false.
Já no segundo console.log, o programa fez o mesmo que no primeiro console.log
mas não achou "altura", então deu um undefined porque não existi

*/










//exercicio 1 codigo

const pessoa = {
    nome: "tomas",
    apelidos: ["tom","tomy","tomaseltrem"]
}

function saida (objeto) {
    const texto = `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou  ${objeto.apelidos[2]}`
    console.log(texto)
}
saida(pessoa)


const novaPessoa = {
    ...pessoa,
    apelidos: ["cabezaetaco","miguelangel","mbappe"]
}

saida(novaPessoa)









//exercicio 2 codigo


const pessoa1 = {
    nome: "tomas" ,
    idade: 19 ,
    profissao: "Auxiliar"
}

const pessoa2 = {
    nome: "mary",
    idade: 29,
    profissao: "Contadora"
}


function array (objeto1) {
    const resultado = [objeto1.nome,objeto1.nome.length,objeto1.idade,objeto1.profissao,objeto1.profissao.length]
    return resultado
}

console.log(array(pessoa1))
console.log(array(pessoa2))












//exercicio 3 codigo

const carrinho = []

const fruta = {
    nome: "maça verde",
    disponibilidade: true
}

const fruta2 = {
    nome:"abacaxi",
    disponibilidade: true
}

const fruta3 = {
    nome: "guayaba",
    disponibilidade: true
}

function Frutas (objfrutas) {
    carrinho.push(fruta,fruta2,fruta3)
}

Frutas(carrinho)


console.log(carrinho)