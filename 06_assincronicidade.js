// 1, 2, 4, 5 e 6 - Assincronicidade
// Insere o conceito de Promises e async/await simulando uma consulta externa demorada (ex: checar antecedentes criminais no banco do governo).

console.log("=== SISTEMA DE GESTÃO DE CNH ===");
console.log("Bem-vindo ao sistema do Departamento de Trânsito!");

// Função que retorna uma Promise simula uma consulta de API que demora 1.5 segundos
function consultarHistoricoSeguranca(nome) {
    return new Promise((resolve) => {
        console.log(`\n[API Externa] Consultando histórico de segurança para: ${nome}...`);
        setTimeout(() => {
            // Retorna um resultado simulado informando se a ficha está limpa
            resolve({ fichaLimpa: true });
        }, 1500);
    });
}

// Função assíncrona responsável por gerenciar a espera da resposta da API
async function executarVerificacaoAssincrona() {
    const nomeCandidato = "Leonardo";
    
    // O 'await' pausa a execução aqui até a Promise terminar de rodar
    const checagem = await consultarHistoricoSeguranca(nomeCandidato);
    
    console.log("[Resultado Recebido] Avaliando liberação...");
    if (checagem.fichaLimpa) {
        console.log(`Status de ${nomeCandidato}: Ficha limpa! Liberado no sistema.`);
    } else {
        console.log(`Status de ${nomeCandidato}: Cadastro BLOQUEADO por pendências.`);
    }
}

executarVerificacaoAssincrona();
