console.log("=== SISTEMA DE GESTÃO DE CNH ===");

const candidatos = [
    { nome: "jose", idade: 20, pontosCNH: 2 },
    { nome: "ana", idade: 17, pontosCNH: 0 },
    { nome: "carlos", idade: 25, pontosCNH: 12 }
];

// Arrow Function => forma moderna e simplificada de criar funções
const verificarCandidato = (pessoa) => {

    if (pessoa.idade < 18) {
        return "REPROVADO - Menor de idade";
    }

    if (pessoa.pontosCNH >= 10) {
        return "EM ANÁLISE - Muitos pontos";
    }

    return "APROVADO";
};

for (const pessoa of candidatos) {

    const resultado = verificarCandidato(pessoa);

    console.log("\nCandidato:", pessoa.nome);
    console.log("Idade:", pessoa.idade);
    console.log("Pontos na CNH:", pessoa.pontosCNH);
    console.log("Resultado:", resultado);
}