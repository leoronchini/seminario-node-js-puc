// 7 - Código com Tudo Junto
// Unifica absolutamente todos os passos anteriores em um único fluxo de processamento em lote completo.

console.log("=== SISTEMA DE GESTÃO DE CNH ===");
console.log("Inicializando processamento em lote com integração de API externa...\n");

// [Arrays] Banco de dados de candidatos
const candidatos = [
    { nome: "Leonardo", idade: 20, passouTeorico: true, passouPratico: true },
    { nome: "Mariana", idade: 17, passouTeorico: false, passouPratico: false },
    { nome: "Carlos", idade: 25, passouTeorico: true, passouPratico: false },
    { nome: "Beatriz", idade: 31, passouTeorico: true, passouPratico: true }
];

// [Assincronicidade] Simulação de requisição para API externa do governo
function consultarHistoricoSeguranca(nome) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Simulação simples: Todos possuem ficha limpa neste teste
            resolve({ fichaLimpa: true });
        }, 1000); 
    });
}

// [Funções] Blocos isolados de ação e validação
function verificarElegibilidadeExames(candidato) {
    return candidato.idade >= 18 && candidato.passouTeorico && candidato.passouPratico;
}

// Função principal assíncrona que orquestra todo o sistema
async function rodarSistemaCompleto(listaCandidatos) {
    
    // [Repetição] Percorrendo cada candidato da lista
    for (const candidato of listaCandidatos) {
        console.log(`--------------------------------------------------`);
        console.log(`Solicitando análise de segurança para: ${candidato.nome}`);
        
        // Esperando a resposta assíncrona da API externa
        const checagem = await consultarHistoricoSeguranca(candidato.nome);
        
        // [Condicionais] Verificando múltiplos critérios e regras de negócio
        if (!checagem.fichaLimpa) {
            console.log(` -> Bloqueio de Segurança Encontrado para ${candidato.nome}. Processo retido.`);
        } else if (verificarElegibilidadeExames(candidato)) {
            console.log(` -> SUCESSO: ${candidato.nome} cumpre todos os requisitos. CNH EMITIDA!`);
        } else {
            // Tratamento de pendências específicas
            if (candidato.idade < 18) {
                console.log(` -> RETIDO: ${candidato.nome} não possui a idade mínima legal de 18 anos.`);
            } else {
                console.log(` -> INCOMPLETO: ${candidato.nome} possui exames teóricos/práticos pendentes.`);
            }
        }
    }
    
    console.log(`\n--------------------------------------------------`);
    console.log("Processamento de lote finalizado com sucesso!");
}

// Execução do ecossistema completo integrado
rodarSistemaCompleto(candidatos);
