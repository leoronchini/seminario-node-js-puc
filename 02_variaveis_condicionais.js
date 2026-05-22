// 1 e 2 - Variáveis e Condicionais
// Reutiliza o Código 1 e adiciona variáveis e regras de decisão para um candidato à CNH.

console.log("=== SISTEMA DE GESTÃO DE CNH ===");
console.log("Bem-vindo ao sistema do Departamento de Trânsito!");

// Declaração de variáveis do candidato
const nomeCandidato = "Leonardo";
const idadeCandidato = 20;
let passouNoExameTeorico = true;
let passouNoExamePratico = false;

console.log(`\nAnalisando o candidato: ${nomeCandidato}`);

// Estrutura condicional para avaliar a elegibilidade e status
if (idadeCandidato < 18) {
    console.log("Status: REPROVADO. Motivo: Menor de idade.");
} else if (!passouNoExameTeorico) {
    console.log("Status: EM ANDAMENTO. Motivo: Precisa passar no exame teórico.");
} else if (!passouNoExamePratico) {
    console.log("Status: EM ANDAMENTO. Motivo: Precisa passar no exame prático.");
} else {
    console.log("Status: APROVADO! CNH pronta para emissão.");
}
