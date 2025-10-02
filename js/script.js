"use strict";

const botao = document.getElementById("startBtn");

botao.addEventListener("click", () => {
    // TODO: peça ao usuário seu nome usando prompt()
    let nomeUsuario = prompt("nome:" );

    // TODO: peça o ano de nascimento e armazene em anoNascimento
    let dataNasicmentotexto = prompt("ano nascimento: ");

    // Use uma variável para o ano atual
    let anoatual = 2025;

    // TODO: converta o ano de nascimento para número (parseInt)
    let anoNascimento = parseInt(dataNasicmentotexto);

    // TODO: exiba com alert() uma frase: "Olá, NOME! Você tem X anos."
    let idade = anoatual - anoNascimento;
    alert("ola, " +nomeUsuario+ " voce tem " +idade+ " anos");

    // TODO: use confirm() para perguntar se a idade está correta
    let resposta = confirm("esta certo?");

    // Exiba no console a escolha do usuário (console.log ou console.warn)
    console.log("idade: " +idade);
    console.log("nome: " +nome);
    console.log("data nascimento: "+ anoNascimento);
    // Melhore o programa adicionando outros recursos

});
