console.log("=== SISTEMA DE GESTÃO DE CNH ===");

const candidatos = [
    { nome: "jose", idade: 20 },
    { nome: "ana", idade: 17 },
    { nome: "carlos", idade: 25 }
];

// O 'for...of' percorre cada item do array
for (const pessoa of candidatos) {

    let statusCadastro = "Em análise";

    console.log("\nCandidato:", pessoa.nome);
    console.log("Idade:", pessoa.idade);

    if (pessoa.idade >= 18) {

        statusCadastro = "Aprovado";

    } else {

        statusCadastro = "Reprovado";
    }

    console.log("Resultado:", statusCadastro);
}