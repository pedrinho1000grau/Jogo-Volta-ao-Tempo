import { perguntas } from "./perguntas.js";
import { aleatorio } from "./aleatorio.js";

// ELEMENTOS DO HTML

const telaInicial = document.querySelector("#tela-inicial");
const telaInstrucoes = document.querySelector("#tela-instrucoes");
const telaJogo = document.querySelector("#tela-jogo");
const telaFinal = document.querySelector("#tela-final");
const telaCreditos = document.querySelector("#tela-creditos");

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");

const epoca = document.querySelector("#epoca");
const tituloEpoca = document.querySelector("#titulo-epoca");
const numeroPergunta = document.querySelector("#numero-pergunta");
const contador = document.querySelector("#contador");

const barraProgresso = document.querySelector("#barra-progresso");
const barraEnergia = document.querySelector("#barra-energia");
const textoEnergia = document.querySelector("#texto-energia");

const imagemHistoria = document.querySelector("#imagem-historia");
const legendaImagem = document.querySelector("#legenda-imagem");

const caixaFeedback = document.querySelector("#caixa-feedback");
const tituloFeedback = document.querySelector("#titulo-feedback");
const textoFeedback = document.querySelector("#texto-feedback");
const botaoContinuar = document.querySelector("#botao-continuar");

const tituloResultado = document.querySelector(".titulo-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const botaoIniciar = document.querySelector("#botao-iniciar");
const botaoInstrucoes = document.querySelector("#botao-instrucoes");
const botaoVoltarMenu = document.querySelector("#botao-voltar-menu");

const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoCreditos = document.querySelector(".creditos-btn");
const botaoVoltarInicio = document.querySelector(".voltar-inicio-btn");

// VARIÁVEIS

const TOTAL = 20;

let atual = 0;
let historiaFinal = "";
let faseDaPartida = "inicio";

let energia = 100;
let pontuacao = 0;

let destinoPendente = null;
let alternativasEmbaralhadas = [];

let etapasVisitadas = new Set();

// CONTROLE DAS TELAS

function mostrarTela(telaEscolhida) {
    if (!telaEscolhida) {
        console.error("Tela não encontrada.");
        return;
    }

    document.querySelectorAll(".tela").forEach(tela => {
        tela.classList.remove("ativa");
    });

    telaEscolhida.classList.add("ativa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// EMBARALHAR

function embaralhar(lista) {
    const copia = [...lista];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}

// ENERGIA

function atualizarEnergia() {
    barraEnergia.style.width = `${energia}%`;
    textoEnergia.textContent = `${energia}%`;
}

// PROGRESSO

function atualizarProgresso() {
    const quantidade = etapasVisitadas.size;

    numeroPergunta.textContent =
        `ETAPAS VISITADAS: ${quantidade} / ${TOTAL}`;

    barraProgresso.style.width =
        `${(quantidade / TOTAL) * 100}%`;
}

// IMAGENS

function atualizarImagem(numero) {
    const caminho = `imagens/nivel${numero + 1}.jpg`;

    imagemHistoria.onerror = () => {
        imagemHistoria.style.display = "none";
        legendaImagem.textContent = "REGISTRO VISUAL NÃO DISPONÍVEL";
    };

    imagemHistoria.onload = () => {
        imagemHistoria.style.display = "block";
    };

    imagemHistoria.src = caminho;
    imagemHistoria.alt = `Registro histórico da etapa ${numero + 1}`;

    legendaImagem.textContent =
        `REGISTRO VISUAL ${String(numero + 1).padStart(2, "0")}`;
}

// INICIAR JOGO

function iniciarJogo() {
    atual = 0;
    historiaFinal = "";

    faseDaPartida = "jogando";

    energia = 100;
    pontuacao = 0;

    destinoPendente = null;
    alternativasEmbaralhadas = [];

    etapasVisitadas = new Set();

    atualizarEnergia();

    mostrarTela(telaJogo);

    mostrarPergunta();
}

// MOSTRAR PERGUNTA

function mostrarPergunta() {
    if (faseDaPartida !== "jogando") {
        return;
    }

    const pergunta = perguntas[atual];

    if (!pergunta) {
        console.error("Etapa inexistente:", atual);
        return;
    }

    if (pergunta.final === "vitoria") {
        mostrarVitoria(pergunta.mensagem);
        return;
    }

    etapasVisitadas.add(atual);

    atualizarProgresso();

    epoca.textContent = pergunta.epoca || "VIAGEM TEMPORAL";
    tituloEpoca.textContent = pergunta.titulo || "Novo desafio";

    contador.textContent =
        `SALTO ${String(atual + 1).padStart(2, "0")}`;

    caixaPerguntas.textContent = pergunta.enunciado;

    caixaAlternativas.replaceChildren();

    caixaFeedback.hidden = true;

    atualizarImagem(atual);

    alternativasEmbaralhadas = embaralhar(
        pergunta.alternativas
    );

    alternativasEmbaralhadas.forEach((alternativa, indice) => {
        const botao = document.createElement("button");

        botao.type = "button";

        botao.textContent =
            `${String.fromCharCode(65 + indice)}. ${alternativa.texto}`;

        botao.disabled = alternativa.disponivel === false;

        botao.addEventListener("click", () => {
            respostaSelecionada(alternativa, botao);
        });

        caixaAlternativas.appendChild(botao);
    });

    atualizarEnergia();
}

// PROCESSAR RESPOSTA

function respostaSelecionada(opcaoSelecionada, botaoEscolhido) {
    if (faseDaPartida !== "jogando") {
        return;
    }

    if (opcaoSelecionada.disponivel === false) {
        return;
    }

    const destino = opcaoSelecionada.proxima;

    if (opcaoSelecionada.tipo === "gameover") {
        historiaFinal += opcaoSelecionada.afirmacao + "\n";

        mostrarGameOver(opcaoSelecionada.mensagem);

        return;
    }

    if (
        !Number.isInteger(destino) ||
        perguntas[destino] === undefined
    ) {
        console.error("Destino inválido:", destino);
        return;
    }

    const origem = perguntas[atual];
    const chegada = perguntas[destino];

    const destinoEhFinal = chegada.final === "vitoria";

    const mudouDeCaminho =
        origem.caminho !== chegada.caminho;

    if (
        atual === 0 &&
        opcaoSelecionada.tipo !== "entrada"
    ) {
        console.error(
            "A primeira etapa deve usar uma alternativa de entrada."
        );

        return;
    }

    if (
        atual !== 0 &&
        !destinoEhFinal &&
        mudouDeCaminho &&
        opcaoSelecionada.tipo !== "trocar"
    ) {
        console.error(
            "Mudança de caminho sem o tipo trocar."
        );

        return;
    }

    if (
        opcaoSelecionada.tipo === "trocar" &&
        !destinoEhFinal &&
        !mudouDeCaminho
    ) {
        console.error(
            "A troca deve levar a outro caminho."
        );

        return;
    }

    if (
        opcaoSelecionada.tipo !== "trocar" &&
        opcaoSelecionada.tipo !== "entrada" &&
        !destinoEhFinal &&
        mudouDeCaminho
    ) {
        console.error(
            "Avanço ou salto não pode mudar de narrativa."
        );

        return;
    }

    if (
        opcaoSelecionada.tipo === "entrada" &&
        atual !== 0
    ) {
        console.error(
            "Entrada só pode ser usada na primeira etapa."
        );

        return;
    }

    caixaAlternativas.querySelectorAll("button").forEach(botao => {
        botao.disabled = true;
    });

    const registro = aleatorio([
        opcaoSelecionada.afirmacao,
        `Registro da escolha: ${opcaoSelecionada.texto}.`
    ]);

    historiaFinal += registro + "\n";

    if (opcaoSelecionada.correta) {
        pontuacao++;

        energia = Math.min(100, energia + 5);

        tituloFeedback.textContent =
            "COORDENADAS ESTABILIZADAS!";
    } else {
        energia = Math.max(0, energia - 10);

        tituloFeedback.textContent =
            "A CRONOS DETECTOU UMA FALHA!";
    }

    botaoEscolhido.classList.add(
        opcaoSelecionada.correta ? "correta" : "incorreta"
    );

    textoFeedback.textContent =
        opcaoSelecionada.explicacao +
        " A próxima coordenada foi definida pela sua escolha.";

    destinoPendente = destino;

    caixaFeedback.hidden = false;

    if (opcaoSelecionada.tipo === "trocar") {
        botaoContinuar.textContent =
            "ACESSAR OUTRA LINHA TEMPORAL →";
    } else if (opcaoSelecionada.tipo === "salto") {
        botaoContinuar.textContent =
            "CONFIRMAR SALTO TEMPORAL →";
    } else {
        botaoContinuar.textContent =
            "CONTINUAR VIAGEM →";
    }

    atualizarEnergia();
}

// CONTINUAR VIAGEM

function continuarViagem() {
    if (faseDaPartida !== "jogando") {
        return;
    }

    if (destinoPendente === null) {
        return;
    }

    atual = destinoPendente;

    destinoPendente = null;

    mostrarPergunta();
}

// GAME OVER

function mostrarGameOver(mensagem) {
    if (faseDaPartida !== "jogando") {
        return;
    }

    faseDaPartida = "gameover";

    destinoPendente = null;

    mostrarTela(telaFinal);

    tituloResultado.textContent = "GAME OVER";

    textoResultado.textContent =
        mensagem +
        "\n\nHISTÓRICO DA VIAGEM:\n" +
        historiaFinal;

    botaoJogarNovamente.hidden = false;

    botaoCreditos.hidden = true;
}

// VITÓRIA

function mostrarVitoria(mensagem) {
    if (faseDaPartida !== "jogando") {
        return;
    }

    faseDaPartida = "vitoria";

    destinoPendente = null;

    mostrarTela(telaFinal);

    barraProgresso.style.width = "100%";

    tituloResultado.textContent = "THE END";

    textoResultado.textContent =
        mensagem +
        "\n\nEtapas visitadas: " + etapasVisitadas.size +
        "\nRespostas corretas: " + pontuacao +
        "\nEnergia final: " + energia + "%" +
        "\n\nHISTÓRICO DA VIAGEM:\n" +
        historiaFinal;

    botaoJogarNovamente.hidden = true;

    botaoCreditos.hidden = false;
}

// CRÉDITOS

function mostrarCreditos() {
    if (faseDaPartida !== "vitoria") {
        return;
    }

    faseDaPartida = "creditos";

    mostrarTela(telaCreditos);
}

// REINICIAR

function reiniciaJogo() {
    atual = 0;

    historiaFinal = "";

    faseDaPartida = "inicio";

    energia = 100;

    pontuacao = 0;

    destinoPendente = null;

    alternativasEmbaralhadas = [];

    etapasVisitadas = new Set();

    caixaPerguntas.textContent = "";

    caixaAlternativas.replaceChildren();

    caixaFeedback.hidden = true;

    tituloResultado.textContent = "";

    textoResultado.textContent = "";

    botaoJogarNovamente.hidden = false;

    botaoCreditos.hidden = true;

    barraProgresso.style.width = "0%";

    atualizarEnergia();

    mostrarTela(telaInicial);
}

// EVENTOS DOS BOTÕES

botaoIniciar.addEventListener("click", iniciarJogo);

botaoInstrucoes.addEventListener("click", () => {
    mostrarTela(telaInstrucoes);
});

botaoVoltarMenu.addEventListener("click", () => {
    mostrarTela(telaInicial);
});

botaoContinuar.addEventListener("click", continuarViagem);

botaoJogarNovamente.addEventListener("click", reiniciaJogo);

botaoCreditos.addEventListener("click", mostrarCreditos);

botaoVoltarInicio.addEventListener("click", reiniciaJogo);

// INICIALIZAÇÃO

reiniciaJogo();