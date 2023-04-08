"use strict";
// => Variáveis [Type Annotations]
let nome = "Mharkoz Bezerra";
console.log(nome);
// => Arrays [Type Annotations]
let animais = ['Gato', 'Cachorro', 'Piriquito', 'Papagaio'];
console.log(animais);
// => Objetos [Type Annotations]
let carro;
carro = { nome: 'Gol', ano: 2018, preco: 45.00 };
console.log(carro);
// => Funcoes [Type Annotations]
function cachorroOuGato(animalComoCachorro) {
    if (animalComoCachorro === true) {
        console.log("Esse animal é um carrocho");
        return;
    }
    console.log("Esse animal não é um cachorro");
}
cachorroOuGato(false);
