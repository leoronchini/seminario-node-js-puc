console.log("=== SISTEMA DE GESTÃO DE CNH ===");

const nome = "jose";
const idade = 20;

// Variáveis 'let' podem ter seu valor alterado
let statusCadastro = "Em análise";

console.log("Candidato:", nome);
console.log("Idade:", idade);
console.log("Status inicial:", statusCadastro);

if (idade >= 18) {

    statusCadastro = "Aprovado para iniciar processo";

    console.log(nome + " pode iniciar o processo de CNH.");

} else {

    statusCadastro = "Bloqueado por idade";

    console.log(nome + " não possui idade mínima.");
}

console.log("Status final:", statusCadastro);