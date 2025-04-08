// //DECLARAÇÕES E VARIAVEIS
// var nome ="fiap";
// console.log(nome)

// let idade =18;
// console.log(idade);

// const sobrenome ="Basta";
// console.log(sobrenome)

// let aula
// console.log(aula)

// let valor=null;
// console.log(valor)

// let exemplo={};

// let exemplo2= [];

// // tipos variaveis
// let exemplo3=10;
// console.log(typeof exemplo3)

// let exemplo4="aula";
// console.log(typeof exemplo4)

// let exemplo5=true
// console.log(typeof exemplo5)

// let exemplo6=["um", "dois", "tres"];
// console.log(typeof exemplo6)

// //conversões
// // float > inteiro
// let numfloat=123.456
// console.log(parseInt(numfloat));

// // string > Float

// let numsting ="546.654"
// console.log(parseFloat(numsting))

// // float > string

// let numfloat1=554.564
// console.log(numfloat1.toString());

// let numint=100;
// console.log(numint.toString())

// // metodos -parte 1

// // length -verifica o tamanho da string

// let frase = "corinthians maior do mundo"
// console.log(frase.length)

// // indexOf -retorna o trecho de um texto

// let texto = "programação sustentavel"
// console.log(texto.indexOf("ão"))

// // slice -retorna parte de um texto o inicio e o final

// let info="analise aprofundada";
// console.log(info.slice(0,4))

// // operadores aritimeticos

// const num1 =10;
// const num2 =20;
// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)

// operadores logicos

// const num3 = 20;
// const num4 =30;
// console.log(num3 < num4)
// console.log(num3 > num4 && num4 < 50)
// console.log(num3 > num4 || num3 <num4)
// console.log(num3 == num4 || num3 <= num4)

let valor = 101;

if (valor == 100){
console.log("é verdadeiro")
}

//IF /ELSE

let valor1 = 100;

if(valor1 ==100){
console.log("valor está correto")
}else{
    console.log("valor errado")
}

//if/else - encadeado ou aniado

// let idade =13;
// if(idade <= 14){
// console.log("Não pode entrar na balada.")
// }else if(idade > 14 && idade <= 18){
// console.log("Pode entrar e curtir!")
// }
// else if(idade > 30){
// console.log("Vai casa jack!")
// }
// else{
//     console.log("Fica em casa jogando roblox paizão.")
// }

//condição terraria

// let valor2 = 100;

// let resultado = valor2 == 300 ? "certo": "errado";
// console.log(resultado)

//Switch case

// let time= "Corinthians"

// switch(time){
//     case "Corinthians":
//         console.log("Melhor time")
//         break;
//     case "São Paulo":
//         console.log("Não é time")
//         break;
//     case "Palmeiras":
//         console.log("Não tem mundial, torcida de interclasse")
//         break;
//     default:
//         console.log("nenhuma das opções")

// }

// //estrutura de laço de repitição

// for(let i=0; i<=10; i++){
//     console.log("Sport Club Corinthians Paulista")
//     console.log("O valor de I é :", i)
// }

//while

// let w=0;

// while (w<= 10){
//     console.log("o valor de w é: ",w)
//     w++;
// }

// //do while

// let z= 10;

// do{
//     console.log("do while é",z)
//     z++;
// }while(z <= 100)

//Funções

function saudacao(nome){
    // console.log("Seja bem vindo, ", nome)
    console.log(`Seja bem vindo ${nome}`)
}
saudacao("Fiap")

function semaforo(){
    let sinal ="amarelo";
    console.log(`o semaforo está ${sinal}`)
}
semaforo();