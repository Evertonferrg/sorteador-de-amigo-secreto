//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//definiçâo de array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    let nomeInput = document.getElementById('amigo');
    let nome = nomeInput.value.trim();
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    atualizarListaNomes();
    nomeInput.value = "";
    if (amigos.length >= 4) {
        document.getElementById('botaoSortear').disabled = false;
    }
}

// Função para atualizar a lista de nomes exibida
function atualizarListaNomes() {
    let listaNomes = document.getElementById('listaAmigos');
    listaNomes.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaNomes.appendChild(li);
    }
}

// Função para sortear nomes
function sortearAmigo() {
    if (amigos.length < 4) {
        alert("Você precisa adicionar pelo menos 4 amigos para iniciar o sorteio.");
        return;
    }
    let sorteados = [...amigos];
    let valido = false;
    while (!valido) {
        sorteados.sort(() => Math.random() - 0.5);
        valido = true;
        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i] === sorteados[i]) {
                valido = false;
                break;
            }
        }
    }

    let resultado = [];
    for (let i = 0; i < amigos.length; i++) {
        resultado.push(`${amigos[i]} sorteou ${sorteados[i]}`);
    }

    document.getElementById('resultado').textContent = resultado.join('\n');
}

// Eventos nos botões
document.getElementById('botaoAdicionar').addEventListener('click', adicionarAmigo);
document.getElementById('botaoSortear').addEventListener('click', sortearAmigo);

// Desabilita o botão "Sortear" inicialmente
document.getElementById('botaoSortear').disabled = true;
