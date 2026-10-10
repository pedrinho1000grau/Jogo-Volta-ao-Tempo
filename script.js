
const telas = document.querySelectorAll(".tela");

const telaInicial = document.querySelector("#tela-inicial");
const telaInstrucoes = document.querySelector("#tela-instrucoes");
const telaJogo = document.querySelector("#tela-jogo");
const telaFinal = document.querySelector("#tela-final");

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");

const epoca = document.querySelector("#epoca");
const tituloEpoca = document.querySelector("#titulo-epoca");
const numeroPergunta = document.querySelector("#numero-pergunta");
const contador = document.querySelector("#contador");
const barraProgresso = document.querySelector("#barra-progresso");

const caixaFeedback = document.querySelector("#caixa-feedback");
const tituloFeedback = document.querySelector("#titulo-feedback");
const textoFeedback = document.querySelector("#texto-feedback");

const perguntas = [
    {
        epoca: "PRÉ-HISTÓRIA",
        titulo: "A era dos gigantes",
        enunciado: "Qual grupo de animais dominou muitos ambientes terrestres durante a Era Mesozoica?",
        alternativas: [
            { texto: "Dinossauros", correta: true, explicacao: "Isso mesmo! Os dinossauros dominaram muitos ambientes terrestres durante a Era Mesozoica, que terminou há cerca de 66 milhões de anos." },
            { texto: "Mamutes", correta: false, explicacao: "Os mamutes viveram muito depois do desaparecimento dos dinossauros não avianos." }
        ]
    },
    {
        epoca: "EGITO ANTIGO",
        titulo: "O mistério das pirâmides",
        enunciado: "Qual era uma das principais funções das grandes pirâmides do Egito Antigo?",
        alternativas: [
            { texto: "Servir como túmulos para faraós", correta: true, explicacao: "Correto! As pirâmides estavam ligadas às práticas funerárias reais e às crenças egípcias sobre a vida após a morte." },
            { texto: "Funcionarem como fábricas de ferramentas", correta: false, explicacao: "As pirâmides tinham principalmente uma função funerária e religiosa, não industrial." }
        ]
    },
    {
        epoca: "GRÉCIA ANTIGA",
        titulo: "O berço das ideias",
        enunciado: "Qual cidade grega é especialmente associada ao desenvolvimento da democracia antiga?",
        alternativas: [
            { texto: "Atenas", correta: true, explicacao: "Muito bem! Atenas desenvolveu uma forma de democracia direta, embora a participação política fosse restrita a parte da população." },
            { texto: "Esparta", correta: false, explicacao: "Esparta tinha uma organização política e social diferente, com forte influência militar." }
        ]
    },
    {
        epoca: "ROMA ANTIGA",
        titulo: "O poder de Roma",
        enunciado: "Qual língua teve papel central na administração do Império Romano do Ocidente?",
        alternativas: [
            { texto: "Latim", correta: true, explicacao: "Correto! O latim foi fundamental na administração romana e influenciou diversas línguas, incluindo o português." },
            { texto: "Português", correta: false, explicacao: "O português surgiu muitos séculos depois, a partir da evolução do latim falado." }
        ]
    },
    {
        epoca: "IDADE MÉDIA",
        titulo: "Entre castelos e reinos",
        enunciado: "Qual sistema social e político esteve presente em partes da Europa medieval?",
        alternativas: [
            { texto: "Feudalismo", correta: true, explicacao: "Isso mesmo! Em várias regiões da Europa, relações de dependência, posse da terra e obrigações marcaram a sociedade feudal." },
            { texto: "Globalização industrial", correta: false, explicacao: "A globalização industrial está relacionada a transformações muito posteriores, sobretudo à industrialização e à expansão das conexões mundiais." }
        ]
    },
    {
        epoca: "RENASCIMENTO",
        titulo: "Uma nova visão do mundo",
        enunciado: "Qual característica marcou o Renascimento europeu?",
        alternativas: [
            { texto: "Valorização das artes, das ciências e da cultura clássica", correta: true, explicacao: "Correto! O Renascimento valorizou referências greco-romanas e impulsionou novas experiências artísticas e intelectuais." },
            { texto: "Abandono completo das artes e da ciência", correta: false, explicacao: "O período foi marcado justamente por importantes transformações artísticas, científicas e culturais." }
        ]
    },
    {
        epoca: "ERA DAS NAVEGAÇÕES",
        titulo: "Além dos horizontes",
        enunciado: "Qual era um dos objetivos das navegações europeias dos séculos XV e XVI?",
        alternativas: [
            { texto: "Encontrar novas rotas comerciais marítimas", correta: true, explicacao: "Muito bem! A busca por rotas comerciais, riquezas e expansão territorial foi um dos fatores dessas navegações." },
            { texto: "Construir ferrovias intercontinentais", correta: false, explicacao: "As ferrovias surgiram muito depois e não foram um objetivo das navegações desse período." }
        ]
    },
    {
        epoca: "REVOLUÇÃO INDUSTRIAL",
        titulo: "O mundo das máquinas",
        enunciado: "Qual mudança foi marcante na Revolução Industrial?",
        alternativas: [
            { texto: "Crescimento da produção mecanizada nas fábricas", correta: true, explicacao: "Correto! A mecanização transformou a produção, o trabalho e a organização das cidades." },
            { texto: "Fim imediato de todas as atividades agrícolas", correta: false, explicacao: "A agricultura continuou existindo, embora também tenha passado por transformações." }
        ]
    },
    {
        epoca: "SÉCULO XX",
        titulo: "Uma mensagem pelo tempo",
        enunciado: "Qual invenção transformou profundamente a comunicação global no final do século XX?",
        alternativas: [
            { texto: "A internet", correta: true, explicacao: "Isso mesmo! A expansão da internet mudou a comunicação, o acesso à informação e as relações sociais." },
            { texto: "A máquina a vapor", correta: false, explicacao: "A máquina a vapor foi fundamental para a industrialização, mas surgiu muito antes da internet." }
        ]
    },
    {
        epoca: "FUTURO",
        titulo: "O amanhã começa hoje",
        enunciado: "Qual atitude ajuda a preservar o patrimônio histórico para as próximas gerações?",
        alternativas: [
            { texto: "Conservar os locais históricos e valorizar a memória cultural", correta: true, explicacao: "Excelente! Preservar o patrimônio ajuda a proteger a memória, a cultura e o conhecimento construído pelas sociedades." },
            { texto: "Destruir construções antigas para apagar o passado", correta: false, explicacao: "A destruição de patrimônios históricos pode eliminar registros importantes da memória e da cultura." }
        ]
    }
];

let atual = 0;
let pontuacao = 0;
let respondeu = false;

function mostrarTela(telaEscolhida) {
    telas.forEach(tela => tela.classList.remove("ativa"));
    telaEscolhida.classList.add("ativa");
}

function iniciarJogo() {
    atual = 0;
    pontuacao = 0;
    respondeu = false;

    mostrarTela(telaJogo);
    mostrarPergunta();
}

function mostrarPergunta() {
    if (atual >= perguntas.length) {
        mostrarResultado();
        return;
    }

    respondeu = false;

    const pergunta = perguntas[atual];

    epoca.textContent = pergunta.epoca;
    tituloEpoca.textContent = pergunta.titulo;
    numeroPergunta.textContent =
        `DESAFIO ${atual + 1} DE ${perguntas.length}`;

    contador.textContent =
        `VIAGEM ${String(atual + 1).padStart(2, "0")}`;

    barraProgresso.style.width =
        `${(atual / perguntas.length) * 100}%`;

    caixaPerguntas.textContent = pergunta.enunciado;
    caixaAlternativas.replaceChildren();

    caixaFeedback.hidden = true;

    pergunta.alternativas.forEach(alternativa => {
        const botao = document.createElement("button");
        botao.type = "button";
        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            selecionarResposta(alternativa, botao);
        });

        caixaAlternativas.appendChild(botao);
    });
}

function selecionarResposta(alternativaEscolhida, botaoEscolhido) {
    if (respondeu) return;

    respondeu = true;

    const pergunta = perguntas[atual];
    const botoes = caixaAlternativas.querySelectorAll("button");

    botoes.forEach(botao => {
        botao.disabled = true;
    });

    if (alternativaEscolhida.correta) {
        pontuacao++;
        tituloFeedback.textContent = "Resposta correta! ✦";
        botaoEscolhido.classList.add("correta");
    } else {
        tituloFeedback.textContent = "Nem toda viagem sai como esperado...";
        botaoEscolhido.classList.add("errada");
    }

    textoFeedback.textContent = alternativaEscolhida.explicacao;

    pergunta.alternativas.forEach((alternativa, indice) => {
        if (alternativa.correta) {
            botoes[indice].classList.add("correta");
        }
    });

    caixaFeedback.hidden = false;

    const botaoContinuar = document.querySelector("#botao-continuar");
    botaoContinuar.textContent =
        atual === perguntas.length - 1
            ? "VER RESULTADO →"
            : "CONTINUAR VIAGEM →";
}

function continuarViagem() {
    atual++;
    mostrarPergunta();
}

function mostrarResultado() {
    mostrarTela(telaFinal);

    barraProgresso.style.width = "100%";

    document.querySelector("#pontuacao-final").textContent =
        `${pontuacao}/${perguntas.length}`;

    const percentual = (pontuacao / perguntas.length) * 100;
    let mensagem;

    if (percentual === 100) {
        document.querySelector("#titulo-final").textContent =
            "Guardião do tempo!";
        mensagem =
            "Incrível! Você demonstrou grande conhecimento e completou a jornada com maestria.";
    } else if (percentual >= 70) {
        document.querySelector("#titulo-final").textContent =
            "Grande explorador!";
        mensagem =
            "Sua viagem foi um sucesso! Você conhece muito da história e está pronto para novas descobertas.";
    } else if (percentual >= 40) {
        document.querySelector("#titulo-final").textContent =
            "Viajante em treinamento!";
        mensagem =
            "Você avançou por várias épocas. Continue explorando e aprendendo para sua próxima viagem.";
    } else {
        document.querySelector("#titulo-final").textContent =
            "A jornada está só começando!";
        mensagem =
            "Toda viagem ensina alguma coisa. Explore novamente as épocas e descubra novas curiosidades.";
    }

    document.querySelector("#mensagem-final").textContent = mensagem;
}

document.querySelector("#botao-iniciar")
    .addEventListener("click", iniciarJogo);

document.querySelector("#botao-como-jogar")
    .addEventListener("click", () => mostrarTela(telaInstrucoes));

document.querySelector("#botao-voltar")
    .addEventListener("click", () => mostrarTela(telaInicial));

document.querySelector("#botao-continuar")
    .addEventListener("click", continuarViagem);

document.querySelector("#botao-reiniciar")
    .addEventListener("click", iniciarJogo);

document.querySelector("#botao-inicio-final")
    .addEventListener("click", () => mostrarTela(telaInicial));
