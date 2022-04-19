let nome = "Felipe";
let idade = 9;

let mensagem;


if (idade >= 60){
    mensagem = "É idoso";
}else if(idade >= 18){
    mensagem = "é adulto, mas não idoso(a)";
}else{
    //mensagem = "é menor de idade";
    if (idade >= 12 && idade < 18){
        mensagem = "É adolecente ";
    }else{
        mensagem = "É baby shark";
    }
}


console.log(nome,"você é,",mensagem)



console.log("______________")



let nota_um = 5;
let nota_dois = 10;
let media = (nota_um + nota_dois)/2;
let mensagem_aprovacao;


if(media >= 7){
    mensagem_aprovacao = "Você foi aprovado";
}else{
    mensagem_aprovacao = "Você foi reprovado";
}

console.log(mensagem_aprovacao);

console.log("______________")


let opcao = 4;
let texto_opcao;


switch(opcao){
    case 1:
        texto_opcao ="Legal, o que deseja saber?";
        break;
    case 2:
        texto_opcao ="que pena, o que aconteceu?";
        break;
    case 3:
        texto_opcao ="Certo, qual sua duvida?";
        break;
    default: 
        texto_opcao ="Hum, não entendi... Vou te transferir";
        break;
}


console.log(texto_opcao)
console.log(`Você escolheu a a opção: ${opcao}.`)

console.log("______________")



//operadores de operação

let a = 10;
let b = "10";

console.log(a == b)