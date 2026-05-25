console.log("=== SISTEMA DE GESTÃO DE CNH ===");

// Array de objetos representando candidatos
const candidatos = [
    {
        nome: "jose",
        idade: 20,
        pontosCNH: 2,
        cursoTeorico: true
    },
    {
        nome: "ana",
        idade: 17,
        pontosCNH: 0,
        cursoTeorico: true
    },
    {
        nome: "carlos",
        idade: 25,
        pontosCNH: 12,
        cursoTeorico: true
    },
    {
        nome: "maria",
        idade: 22,
        pontosCNH: 1,
        cursoTeorico: false
    }
];

// Arrow Function => forma moderna de criar funções
const verificarElegibilidade = (pessoa) => {

    // Condicional simples
    if (pessoa.idade < 18) {
        return {
            aprovado: false,
            motivo: "Menor de idade"
        };
    }

    // Verificando quantidade de pontos
    if (pessoa.pontosCNH >= 10) {
        return {
            aprovado: false,
            motivo: "Excesso de pontos"
        };
    }

    // Verificando curso obrigatório
    if (!pessoa.cursoTeorico) {
        return {
            aprovado: false,
            motivo: "Curso teórico pendente"
        };
    }

    return {
        aprovado: true,
        motivo: "Apto para continuar"
    };
};

// Promise representa uma operação futura
const consultarDetran = (nome) => {

    return new Promise((resolve) => {

        console.log(`Consultando sistema externo para ${nome}...`);

        // Simula tempo de resposta da API
        setTimeout(() => {

            // Math.random() gera comportamento aleatório
            const possuiPendencia = Math.random() < 0.3;

            if (possuiPendencia) {

                resolve({
                    liberado: false,
                    mensagem: "Pendência financeira encontrada"
                });

            } else {

                resolve({
                    liberado: true,
                    mensagem: "Nada consta"
                });
            }

        }, 1500);
    });
};

// async permite usar await
async function executarSistema() {

    console.log("\nIniciando análise dos candidatos...\n");

    // Contadores
    let aprovados = 0;
    let bloqueados = 0;

    // for...of percorre cada item do array
    for (const pessoa of candidatos) {

        console.log("=================================");
        console.log("Candidato:", pessoa.nome);

        // Desestruturação de objeto
        const { idade, pontosCNH, cursoTeorico } = pessoa;

        console.log("Idade:", idade);
        console.log("Pontos na CNH:", pontosCNH);
        console.log("Curso teórico concluído:", cursoTeorico);

        // Executa regra local
        const analiseLocal = verificarElegibilidade(pessoa);

        console.log("Resultado da análise local:", analiseLocal.motivo);

        // Se já falhou localmente, nem consulta API
        if (!analiseLocal.aprovado) {

            console.log("Status final: CNH BLOQUEADA");
            bloqueados++;

            continue;
        }

        // await pausa apenas essa execução
        const retornoDetran = await consultarDetran(pessoa.nome);

        console.log("Retorno Detran:", retornoDetran.mensagem);

        // Operador ternário
        const statusFinal = retornoDetran.liberado
            ? "CNH LIBERADA"
            : "CNH BLOQUEADA";

        console.log("Status final:", statusFinal);

        // Incrementando contadores
        retornoDetran.liberado
            ? aprovados++
            : bloqueados++;
    }

    // Resultado final
    console.log("\n=================================");
    console.log("RESUMO FINAL");
    console.log("Aprovados:", aprovados);
    console.log("Bloqueados:", bloqueados);
}

// Executa sistema
executarSistema();