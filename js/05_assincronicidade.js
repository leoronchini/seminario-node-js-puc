console.log("=== SISTEMA DE GESTÃO DE CNH ===");

const candidatos = [
    { nome: "jose", idade: 20, pontosCNH: 2 },
    { nome: "ana", idade: 17, pontosCNH: 0 },
    { nome: "carlos", idade: 25, pontosCNH: 12 }
];

// Reaproveitando a função do código anterior
const verificarCandidato = (pessoa) => {

    if (pessoa.idade < 18) {
        return "REPROVADO - Menor de idade";
    }

    if (pessoa.pontosCNH >= 10) {
        return "EM ANÁLISE - Muitos pontos";
    }

    return "APROVADO";
};

// Promise representa uma operação futura
const consultarDetran = (nome) => {

    return new Promise((resolve) => {

        console.log("Consultando sistema externo para:", nome);

        // Simula demora da API
        setTimeout(() => {

            resolve("Nada consta");

        }, 1500);
    });
};

// async permite usar await
async function executarSistema() {

    for (const pessoa of candidatos) {

        console.log("\n====================");

        const resultado = verificarCandidato(pessoa);

        console.log("Candidato:", pessoa.nome);
        console.log("Resultado inicial:", resultado);

        // await pausa a função até a Promise finalizar
        const retornoDetran = await consultarDetran(pessoa.nome);

        console.log("Retorno Detran:", retornoDetran);

        if (resultado === "APROVADO" && retornoDetran === "Nada consta") {

            console.log("Status final: CNH LIBERADA");

        } else {

            console.log("Status final: CNH BLOQUEADA");
        }
    }
}

executarSistema();