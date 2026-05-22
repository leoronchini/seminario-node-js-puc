// 1, 2, 4 e 5 - Funções: Blocos de Ação
// Isola a lógica de validação do exemplo anterior dentro de funções limpas e reutilizáveis.

console.log("=== SISTEMA DE GESTÃO DE CNH ===");
console.log("Bem-vindo ao sistema do Departamento de Trânsito!");

const candidatos = [
    { nome: "Leonardo", idade: 20, passouTeorico: true, passouPratico: true },
    { nome: "Mariana", idade: 17, passouTeorico: false, passouPratico: false },
    { nome: "Carlos", idade: 25, passouTeorico: true, passouPratico: false }
];

// Função tradicional para validar a maioridade legal
function verificarMaioridade(idade) {
    return idade >= 18;
}

// Arrow function (função de seta) para avaliar e retornar o status final do processo
const avaliarStatusCandidato = (candidato) => {
    if (!verificarMaioridade(candidato.idade)) {
        return "REPROVADO (Menor de idade)";
    }
    if (candidato.passouTeorico && candidato.passouPratico) {
        return "APROVADO (Emitir CNH)";
    }
    return "PENDENTE (Exames incompletos)";
};

console.log("\nProcessando candidatos utilizando funções modularizadas:");

// Usando outro tipo de loop (for...of) para percorrer o array e executar as funções
for (const candidato of candidatos) {
    const resultado = avaliarStatusCandidato(candidato);
    console.log(`Candidato: ${candidato.nome} | Status Final: ${resultado}`);
}
