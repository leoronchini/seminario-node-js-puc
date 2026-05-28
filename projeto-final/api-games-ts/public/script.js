const gamesContainer = document.getElementById(
    "gamesContainer"
);

const loadGamesButton = document.getElementById(
    "loadGamesButton"
);

/*
========================================
Busca jogos da API
========================================
*/
const loadGames = async () => {

    gamesContainer.innerHTML = `
        <p class="loading">
            Carregando jogos...
        </p>
    `;

    try {

        // Chamada HTTP para backend
        const response = await fetch(
            "/games"
        );

        // Converte JSON
        const games = await response.json();

        // Limpa container
        gamesContainer.innerHTML = "";

        // Percorre array de jogos
        games.forEach((game) => {

            const gameElement = document.createElement(
                "div"
            );

            gameElement.classList.add(
                "game-card"
            );

            gameElement.innerHTML = `
                <h4>${game.nome}</h4>

                <p>
                    Categoria:
                    ${game.categoria}
                </p>

                <p>
                    Nota:
                    ${game.nota}
                </p>
            `;

            gamesContainer.appendChild(
                gameElement
            );
        });

    } catch (error) {

        gamesContainer.innerHTML = `
            <p class="loading">
                Erro ao carregar jogos.
            </p>
        `;

        console.error(error);
    }
};

/*
========================================
Evento botão
========================================
*/
loadGamesButton.addEventListener(
    "click",
    loadGames
);

// Carrega automaticamente ao abrir
loadGames();

