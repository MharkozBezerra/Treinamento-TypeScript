// => Variáveis [Type Annotations]
let nome:string = "Mharkoz Bezerra";
console.log(nome);

// => Arrays [Type Annotations]
let animais:string[] = ['Gato','Cachorro','Piriquito','Papagaio'];
console.log(animais);

// => Objetos [Type Annotations]
let carro:{
    nome:string,
    ano:number,
    preco:number
};
carro = {nome: 'Gol',ano:2018,preco:45.00};
console.log(carro);

// => Funcoes [Type Annotations]
function cachorroOuGato(animalComoCachorro:boolean){
    if(animalComoCachorro === true){
        console.log("Esse animal é um carrocho");
        return;
    }
    console.log("Esse animal não é um cachorro");
}
cachorroOuGato(false);