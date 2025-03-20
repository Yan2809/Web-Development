var nome = "Yan Breno";
var sobrenome = "Barutti";
var anoAtual = 2025;
var idadeAniver = 19;

var nomeCompleto = nome + " " + sobrenome;
var dataNascimento = anoAtual - idadeAniver;



//Iniciando a aula 03

var nomeInserido = prompt("Digite o seu nome:");
console.log(nomeInserido);
alert("Nome registrado com sucesso!");
alert("Bem-vindo, " + nomeInserido + "!");

var idadeInserida = prompt("Digite a sua idade: ")
var idadeCorrigida = parseInt(idadeInserida)
alert("Legal, você tem " + idadeCorrigida + " anos")

if (idadeCorrigida >= 18) {
    alert("Você é maior de idade")
} else {
    alert("Você é menor de idade")
}