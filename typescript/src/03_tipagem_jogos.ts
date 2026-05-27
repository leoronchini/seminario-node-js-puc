interface Game {
    nome: string;
    categoria: string;
    nota: number;
}

const jogo: Game = {
    nome: "Minecraft",
    categoria: "Sandbox",
    nota: 10
};

console.log(jogo);