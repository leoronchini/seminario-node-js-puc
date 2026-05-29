const API_URL = '/games'; // Assumindo que o frontend está sendo servido pelo próprio express.static na porta 3000

const form = document.getElementById('gameForm');
const tableBody = document.querySelector('#gamesTable tbody');
let currentEditId = null;
let gameToDeleteId = null;

document.addEventListener('DOMContentLoaded', loadGames);

// Controle de Modais
function openGameModal(id = null) {
    currentEditId = id;
    const modal = document.getElementById('gameModal');
    const modalTitle = document.getElementById('modalTitle');
    
    if (!id) {
        // Modo Cadastro
        form.reset();
        modalTitle.textContent = 'Cadastrar Novo Jogo';
    }
    
    modal.style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Submissão do Formulário (Criar / Editar)
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const categoria = document.getElementById('categoria').value;
    const nota = parseInt(document.getElementById('nota').value);

    const payload = { nome, categoria, nota };

    try {
        if (currentEditId) {
            // PUT - Edição
            await fetch(`${API_URL}/${currentEditId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
        } else {
            // POST - Criação
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
        }

        closeModal('gameModal');
        await loadGames();
    } catch (error) {
        console.error('Erro ao salvar:', error);
        alert('Erro ao processar a requisição.');
    }
});

// Listar Jogos (GET)
async function loadGames() {
    try {
        const response = await fetch(API_URL);
        const games = await response.json();
        renderTable(games);
    } catch (error) {
        console.error('Erro ao carregar jogos:', error);
        tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: #ef4444; padding: 30px;">Falha ao conectar com a API. O backend está rodando?</td></tr>`;
    }
}

// Renderizar Tabela
function renderTable(games) {
    tableBody.innerHTML = '';

    if (!games || games.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 30px; color: #64748b;">Ainda não há jogos cadastrados no GameVault.</td></tr>`;
        return;
    }

    games.forEach(game => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>#${game.id}</td>
            <td><strong>${game.nome}</strong></td>
            <td><span style="background: #e2e8f0; padding: 4px 10px; border-radius: 20px; font-size: 0.85rem;">${game.categoria}</span></td>
            <td>⭐ ${game.nota}/10</td>
            <td class="actions-cell">
                <button class="btn btn-primary btn-sm" onclick="editGame(${game.id})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="openDeleteModal(${game.id})">Excluir</button>
            </td>
        `;
        
        tableBody.appendChild(tr);
    });
}

// Preparar Edição (GET por ID)
async function editGame(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const game = await response.json();

        if (game.erro) {
            alert(game.erro);
            return;
        }

        document.getElementById('nome').value = game.nome;
        document.getElementById('categoria').value = game.categoria;
        document.getElementById('nota').value = game.nota;
        
        document.getElementById('modalTitle').textContent = 'Editar Jogo';
        openGameModal(id);
    } catch (error) {
        console.error('Erro ao buscar jogo:', error);
    }
}

// Abrir Modal de Exclusão
function openDeleteModal(id) {
    gameToDeleteId = id;
    document.getElementById('deleteModal').style.display = 'flex';
}

// Confirmar Exclusão (DELETE)
async function confirmDelete() {
    if (!gameToDeleteId) return;

    try {
        await fetch(`${API_URL}/${gameToDeleteId}`, {
            method: 'DELETE'
        });
        
        closeModal('deleteModal');
        await loadGames();
    } catch (error) {
        console.error('Erro ao deletar:', error);
        alert('Erro ao tentar excluir o jogo.');
    } finally {
        gameToDeleteId = null;
    }
}