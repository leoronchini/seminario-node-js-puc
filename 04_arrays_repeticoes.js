// 1, 2 e 4 - Arrays e Repetições
// Expande o exemplo para gerenciar múltiplos candidatos guardados em uma lista (Array) usando laços de repetição (Loops).

console.log("=== SISTEMA DE GESTÃO DE CNH ===");
console.log("Bem-vindo ao sistema do Departamento de Trânsito!");

// Criação de um Array (lista) de objetos contendo múltiplos candidatos
const candidatos = [
    { nome: "Leonardo", idade: 20, passouTeorico: true, passouPratico: true },
    { nome: "Mariana", idade: 17, passouTeorico: false, passouPratico: false },
    { nome: "Carlos", idade: 25, passouTeorico: true, passouPratico: false },
    { nome: "Beatriz", idade: 31, passouTeorico: false, passouPratico: false }
];

console.log(`\nIniciando a varredura de ${candidatos.length} candidatos cadastrados...\n`);

// Laço de repetição tradicional (for) para percorrer o Array
for (let i = 0; i < candidatos.length; i++) {
    const candidato = candidatos[i];
    console.log(`[ID ${i + 1}] Verificando candidato: ${candidato.nome}`);
    
    // Condicionais reaproveitadas do exemplo anterior aplicadas a cada item do array
    if (candidato.idade < 18) {
        console.log(` -> Resultado: Impedido (Menor de idade: ${candidato.idade} anos).\n`);
    } else if (candidato.passouTeorico && candidato.passouPratico) {
        console.log(" -> Resultado: APROVADO! CNH Pronta para emissão.\n");
    } else {
        console.log(" -> Resultado: Processo pendente (Exames incompletos).\n");
    }
}
