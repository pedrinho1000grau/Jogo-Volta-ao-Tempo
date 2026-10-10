
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
const botaoContinuar = document.querySelector("#botao-continuar");

const TOTAL = 20;

const perguntas = [
    {
        epoca: "PRESENTE — 2026",
        titulo: "A falha temporal",
        enunciado: "Você está no presente quando recebe um alerta da máquina Cronos. Qual é a principal função de uma fonte histórica?",
        alternativas: [
            {
                texto: "Ajudar a compreender o passado",
                correta: true,
                explicacao: "Documentos, objetos, imagens e relatos ajudam os historiadores a investigar o passado."
            },
            {
                texto: "Prever exatamente tudo o que acontecerá",
                correta: false,
                explicacao: "Fontes históricas ajudam a compreender o passado, mas não permitem prever exatamente o futuro."
            }
        ]
    },
    {
        epoca: "FUTURO — 2150",
        titulo: "O alerta das máquinas",
        enunciado: "Nesse futuro fictício, sistemas automatizados controlam boa parte das cidades. Qual é um risco real de usá-los sem supervisão adequada?",
        alternativas: [
            {
                texto: "Decisões injustas e falhas difíceis de detectar",
                correta: true,
                explicacao: "Sistemas automatizados podem reproduzir vieses ou cometer erros. Supervisão humana é importante."
            },
            {
                texto: "Todas as máquinas deixam de precisar de energia",
                correta: false,
                explicacao: "Máquinas continuam dependendo de energia e manutenção."
            }
        ]
    },
    {
        epoca: "BRASIL — 1964",
        titulo: "Um período de tensão",
        enunciado: "Você chega ao início da ditadura militar brasileira. Em que ano ocorreu o golpe que instaurou o regime?",
        alternativas: [
            {
                texto: "1964",
                correta: true,
                explicacao: "O golpe de 1964 depôs o presidente João Goulart e deu início à ditadura militar brasileira."
            },
            {
                texto: "1988",
                correta: false,
                explicacao: "Em 1988 foi promulgada a Constituição brasileira atual. O golpe ocorreu em 1964."
            }
        ]
    },
    {
        epoca: "GRÉCIA ANTIGA",
        titulo: "O nascimento de uma ideia",
        enunciado: "Você atravessa um portal e chega a Atenas. Qual cidade é especialmente associada ao desenvolvimento da democracia antiga?",
        alternativas: [
            {
                texto: "Atenas",
                correta: true,
                explicacao: "Atenas desenvolveu uma forma de democracia direta, mas muitos habitantes não tinham direitos políticos."
            },
            {
                texto: "Esparta",
                correta: false,
                explicacao: "Esparta tinha uma organização política diferente, com forte influência militar."
            }
        ]
    },
    {
        epoca: "REVOLUÇÃO INDUSTRIAL",
        titulo: "O poder das máquinas",
        enunciado: "A Cronos salta para a Inglaterra do século XVIII. Qual transformação marcou a Revolução Industrial?",
        alternativas: [
            {
                texto: "A expansão da produção mecanizada",
                correta: true,
                explicacao: "A mecanização transformou a produção, as relações de trabalho e o crescimento das cidades."
            },
            {
                texto: "O desaparecimento de todas as cidades",
                correta: false,
                explicacao: "A industrialização contribuiu para o crescimento de muitas cidades."
            }
        ]
    },
    {
        epoca: "FUTURO — 2150",
        titulo: "O código perdido",
        enunciado: "Uma máquina bloqueia seu caminho. Qual medida ajuda a tornar sistemas automatizados mais responsáveis?",
        alternativas: [
            {
                texto: "Testes, supervisão e possibilidade de contestar decisões",
                correta: true,
                explicacao: "Auditorias e supervisão ajudam a identificar erros e responsabilizar os envolvidos."
            },
            {
                texto: "Permitir qualquer decisão sem controle",
                correta: false,
                explicacao: "A ausência de supervisão pode ampliar riscos e dificultar a correção de decisões prejudiciais."
            }
        ]
    },
    {
        epoca: "EGITO ANTIGO",
        titulo: "O enigma das pirâmides",
        enunciado: "Você volta milhares de anos. Qual era uma das principais funções das grandes pirâmides egípcias?",
        alternativas: [
            {
                texto: "Servir como túmulos reais",
                correta: true,
                explicacao: "As pirâmides estavam ligadas às práticas funerárias dos faraós e às crenças sobre a vida após a morte."
            },
            {
                texto: "Servir como fábricas modernas",
                correta: false,
                explicacao: "As pirâmides tinham funções funerárias e religiosas, não industriais."
            }
        ]
    },
    {
        epoca: "BRASIL — ANOS 1970",
        titulo: "A voz sob censura",
        enunciado: "Durante a ditadura militar, qual prática restringia a liberdade de expressão?",
        alternativas: [
            {
                texto: "A censura a publicações, músicas e manifestações",
                correta: true,
                explicacao: "A censura atingiu artistas, jornalistas, intelectuais e opositores durante a ditadura."
            },
            {
                texto: "A liberdade irrestrita de criticar o governo",
                correta: false,
                explicacao: "A liberdade de expressão foi severamente restringida durante o regime."
            }
        ]
    },
    {
        epoca: "PRÉ-HISTÓRIA",
        titulo: "Muito antes da escrita",
        enunciado: "Como os pesquisadores estudam sociedades pré-históricas?",
        alternativas: [
            {
                texto: "Analisando fósseis, ferramentas e pinturas rupestres",
                correta: true,
                explicacao: "Vestígios materiais ajudam a investigar a vida humana antes do desenvolvimento da escrita."
            },
            {
                texto: "Usando exclusivamente jornais da época",
                correta: false,
                explicacao: "Não existiam jornais na Pré-História. Pesquisadores analisam vestígios arqueológicos."
            }
        ]
    },
    {
        epoca: "PRESENTE — 2026",
        titulo: "O rastro da história",
        enunciado: "Você volta ao presente e precisa distinguir uma informação confiável de um boato. Qual atitude é mais adequada?",
        alternativas: [
            {
                texto: "Verificar a fonte e comparar informações",
                correta: true,
                explicacao: "Comparar fontes confiáveis ajuda a identificar informações falsas ou fora de contexto."
            },
            {
                texto: "Compartilhar a primeira mensagem que receber",
                correta: false,
                explicacao: "Uma mensagem pode estar errada ou manipulada. Verifique antes de compartilhar."
            }
        ]
    },
    {
        epoca: "ROMA ANTIGA",
        titulo: "O império e suas leis",
        enunciado: "Você chega à Roma Antiga. Qual língua teve papel central na administração romana do Ocidente?",
        alternativas: [
            {
                texto: "Latim",
                correta: true,
                explicacao: "O latim influenciou várias línguas, entre elas o português, o espanhol, o francês e o italiano."
            },
            {
                texto: "Português",
                correta: false,
                explicacao: "O português se desenvolveu muitos séculos depois, a partir da evolução do latim falado."
            }
        ]
    },
    {
        epoca: "FUTURO — 2150",
        titulo: "A cidade autônoma",
        enunciado: "Uma cidade futurista precisa decidir como usar robôs no trabalho. Qual abordagem considera melhor os impactos sociais?",
        alternativas: [
            {
                texto: "Avaliar riscos, proteger direitos e preparar trabalhadores",
                correta: true,
                explicacao: "Educação, proteção social e planejamento ajudam a lidar com as mudanças causadas pela automação."
            },
            {
                texto: "Ignorar os efeitos sobre a população",
                correta: false,
                explicacao: "Mudanças tecnológicas também têm efeitos econômicos e sociais que precisam ser considerados."
            }
        ]
    },
    {
        epoca: "IDADE MÉDIA",
        titulo: "Entre castelos e feudos",
        enunciado: "Em partes da Europa medieval, qual sistema organizava relações sociais ligadas à terra e a obrigações entre grupos?",
        alternativas: [
            {
                texto: "Feudalismo",
                correta: true,
                explicacao: "O feudalismo caracterizou partes da Europa medieval, embora as sociedades variassem entre regiões."
            },
            {
                texto: "Capitalismo industrial",
                correta: false,
                explicacao: "O capitalismo industrial se desenvolveu muito depois, com a industrialização."
            }
        ]
    },
    {
        epoca: "BRASIL — ANOS 1980",
        titulo: "O caminho da democracia",
        enunciado: "A Cronos chega ao período de redemocratização. Em que ano foi promulgada a atual Constituição brasileira?",
        alternativas: [
            {
                texto: "1988",
                correta: true,
                explicacao: "A Constituição de 1988 ampliou direitos e se tornou um marco da redemocratização brasileira."
            },
            {
                texto: "1964",
                correta: false,
                explicacao: "1964 marca o golpe que instaurou a ditadura militar. A Constituição atual foi promulgada em 1988."
            }
        ]
    },
    {
        epoca: "RENASCIMENTO",
        titulo: "A redescoberta do conhecimento",
        enunciado: "Você chega à Europa do Renascimento. Qual característica marcou esse movimento cultural?",
        alternativas: [
            {
                texto: "Valorização das artes, da ciência e da cultura clássica",
                correta: true,
                explicacao: "O Renascimento valorizou referências greco-romanas e impulsionou transformações artísticas e intelectuais."
            },
            {
                texto: "Abandono completo da produção artística",
                correta: false,
                explicacao: "O período ficou conhecido justamente por importantes inovações nas artes e no pensamento."
            }
        ]
    },
    {
        epoca: "ERA DAS NAVEGAÇÕES",
        titulo: "Além dos horizontes",
        enunciado: "Nos séculos XV e XVI, qual era um dos objetivos das navegações europeias?",
        alternativas: [
            {
                texto: "Buscar rotas comerciais e expandir territórios",
                correta: true,
                explicacao: "Interesses comerciais, políticos e religiosos contribuíram para as navegações, ligadas também à colonização."
            },
            {
                texto: "Construir ferrovias entre continentes",
                correta: false,
                explicacao: "As ferrovias surgiram muito depois e não eram um objetivo das navegações desse período."
            }
        ]
    },
    {
        epoca: "SÉCULO XX",
        titulo: "Uma mensagem pelo tempo",
        enunciado: "Qual tecnologia transformou profundamente a comunicação global a partir do final do século XX?",
        alternativas: [
            {
                texto: "A internet",
                correta: true,
                explicacao: "A expansão da internet mudou a comunicação, o acesso à informação e as relações sociais."
            },
            {
                texto: "A máquina a vapor",
                correta: false,
                explicacao: "A máquina a vapor foi fundamental para a industrialização, mas surgiu muito antes da internet."
            }
        ]
    },
    {
        epoca: "FUTURO — 2150",
        titulo: "O dilema final",
        enunciado: "As máquinas oferecem uma solução rápida para um problema, mas os dados podem estar incompletos. O que você faz?",
        alternativas: [
            {
                texto: "Verifico as evidências e avalio as consequências antes de decidir",
                correta: true,
                explicacao: "Decisões responsáveis exigem avaliar evidências, limitações e possíveis consequências."
            },
            {
                texto: "Aceito a resposta automaticamente porque veio de uma máquina",
                correta: false,
                explicacao: "Uma resposta automatizada também pode estar errada. A tecnologia não elimina a necessidade de pensamento crítico."
            }
        ]
    },
    {
        epoca: "PRESENTE — 2026",
        titulo: "O ponto de retorno",
        enunciado: "Você encontra o último fragmento temporal. Por que estudar História é importante para a sociedade?",
        alternativas: [
            {
                texto: "Para compreender mudanças, permanências e escolhas humanas",
                correta: true,
                explicacao: "A História ajuda a compreender como as sociedades se transformaram e a refletir sobre problemas atuais."
            },
            {
                texto: "Porque o passado determina inevitavelmente tudo o que virá",
                correta: false,
                explicacao: "O passado influencia o presente, mas as decisões humanas também contribuem para construir o futuro."
            }
        ]
    },
    {
        epoca: "FUTURO — 2189",
        titulo: "O destino da linha temporal",
        enunciado: "Você finalmente chega ao ano em que a missão começou. Qual é a melhor forma de impedir que os mesmos erros históricos se repitam?",
        alternativas: [
            {
                texto: "Aprender com o passado, avaliar evidências e agir com responsabilidade",
                correta: true,
                explicacao: "Conhecimento histórico, pensamento crítico e responsabilidade ajudam a tomar decisões melhores."
            },
            {
                texto: "Apagar todos os registros do passado",
                correta: false,
                explicacao: "Apagar a memória histórica não resolve os problemas. Compreender o passado permite aprender com experiências anteriores."
            }
        ]
    }
];

let atual = 0;
let pontuacao = 0;
let respondeu = false;
let energia = 100;
let maiorNivel = 0;
let erros = 0;
let destinoDepoisDoFeedback = null;

let alternativasEmbaralhadasAtuais = [];

function mostrarTela(telaEscolhida) {
    document.querySelectorAll(".tela").forEach(tela => {
        tela.classList.remove("ativa");
    });

    telaEscolhida.classList.add("ativa");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function criarTelaMissao() {
    let telaMissao = document.querySelector("#tela-missao");

    if (telaMissao) return telaMissao;

    telaMissao = document.createElement("section");
    telaMissao.id = "tela-missao";
    telaMissao.className = "tela";

    telaMissao.innerHTML = `
        <p class="etiqueta">ARQUIVO TEMPORAL Nº 001</p>
        <div class="ampulheta" aria-hidden="true">⌛</div>
        <h2>Uma missão além do tempo</h2>

        <p class="descricao">
            Ano 2189. Uma falha misteriosa desestabilizou a linha temporal.
            Acontecimentos históricos estão desaparecendo e o futuro tornou-se
            imprevisível.
        </p>

        <p class="descricao">
            Você foi convocado para pilotar a Cronos, uma máquina experimental
            capaz de atravessar épocas. Sua missão é recuperar os fragmentos
            temporais e restaurar o equilíbrio entre passado, presente e futuro.
        </p>

        <p class="descricao">
            Mas cuidado: cada resposta errada pode lançar você ainda mais longe
            no tempo. O futuro depende do que você descobrir pelo caminho.
        </p>

        <h3>O passado guarda as respostas. O futuro depende de você.</h3>

        <button id="botao-aceitar-missao" class="botao botao-principal">
            ACEITAR MISSÃO →
        </button>

        <button id="botao-cancelar-missao" class="botao botao-secundario">
            VOLTAR AO MENU
        </button>
    `;

    telaInicial.parentNode.insertBefore(telaMissao, telaInicial.nextSibling);

    telaMissao.querySelector("#botao-aceitar-missao")
        .addEventListener("click", iniciarJogo);

    telaMissao.querySelector("#botao-cancelar-missao")
        .addEventListener("click", () => mostrarTela(telaInicial));

    return telaMissao;
}

function configurarHistoriaRecolhivel() {
    if (document.querySelector("#historia-recolhivel")) return;

    const historia = document.createElement("details");
    historia.id = "historia-recolhivel";
    historia.className = "historia-recolhivel";

    historia.innerHTML = `
        <summary>📜 História da missão</summary>

        <div class="texto-historia">
            <p>
                Estamos no ano de 2189. Uma falha misteriosa
                desestabilizou a linha temporal.
            </p>

            <p>
                Acontecimentos históricos estão desaparecendo,
                e o futuro tornou-se imprevisível.
            </p>

            <p>
                Você foi convocado para pilotar a Cronos, uma máquina
                experimental capaz de atravessar épocas. Sua missão é
                recuperar os fragmentos temporais e restaurar o equilíbrio
                entre passado, presente e futuro.
            </p>

            <p class="frase-historia">
                O passado guarda as respostas. O futuro depende de você.
            </p>
        </div>
    `;

    const cabecalho = telaJogo.querySelector(".cabecalho-jogo");

    if (cabecalho) {
        telaJogo.insertBefore(historia, cabecalho);
    } else {
        telaJogo.prepend(historia);
    }

    if (!document.querySelector("#estilo-historia-recolhivel")) {
        const estilo = document.createElement("style");
        estilo.id = "estilo-historia-recolhivel";

        estilo.textContent = `
            .historia-recolhivel {
                margin: 0 0 20px;
                border: 1px solid var(--dourado, #FFC857);
                border-radius: 8px;
                background: rgba(8, 18, 37, 0.95);
                overflow: hidden;
                text-align: left;
            }

            .historia-recolhivel summary {
                padding: 14px 18px;
                color: var(--ciano, #5CE1E6);
                cursor: pointer;
                font-weight: bold;
                letter-spacing: 1px;
                list-style: none;
            }

            .historia-recolhivel summary::-webkit-details-marker {
                display: none;
            }

            .historia-recolhivel summary::after {
                content: "+";
                float: right;
                color: var(--dourado, #FFC857);
                font-size: 20px;
            }

            .historia-recolhivel[open] summary::after {
                content: "−";
            }

            .historia-recolhivel .texto-historia {
                padding: 0 18px 12px;
                border-top: 1px solid rgba(255, 200, 87, 0.25);
                color: var(--branco, #F4F1E8);
                line-height: 1.6;
            }

            .historia-recolhivel .texto-historia p {
                margin: 12px 0;
            }

            .historia-recolhivel .frase-historia {
                color: var(--ciano, #5CE1E6);
                font-weight: bold;
            }
        `;

        document.head.appendChild(estilo);
    }
}

function iniciarJogo() {
    atual = 0;
    pontuacao = 0;
    respondeu = false;
    energia = 100;
    maiorNivel = 0;
    erros = 0;
    destinoDepoisDoFeedback = null;
    alternativasEmbaralhadasAtuais = [];

    configurarHistoriaRecolhivel();
    mostrarTela(telaJogo);
    atualizarEnergia();
    mostrarPergunta();
}

function atualizarEnergia() {
    let indicador = document.querySelector("#energia-temporal");

    if (!indicador) {
        indicador = document.createElement("p");
        indicador.id = "energia-temporal";
        indicador.className = "etiqueta";

        const progresso = document.querySelector(".progresso");

        if (progresso) {
            progresso.after(indicador);
        } else {
            telaJogo.prepend(indicador);
        }
    }

    indicador.textContent = `ENERGIA TEMPORAL: ${energia}%`;
}

function embaralharAlternativas(alternativas) {
    const lista = [...alternativas];

    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [lista[i], lista[j]] = [lista[j], lista[i]];
    }

    return lista;
}

function atualizarImagemNivel(numeroNivel) {
    const imagem = document.querySelector("#imagem-historia");
    const legenda = document.querySelector("#legenda-imagem");

    if (!imagem) return;

    const nomes = {
        1: "Mundo dos dinossauros",
        2: "Vulcões pré-históricos",
        3: "Tiranossauro rex",
        4: "Primeiros seres humanos",
        5: "Pinturas rupestres",
        6: "Cidade futurista",
        7: "Robôs inteligentes",
        8: "Inteligência artificial",
        9: "Viagem espacial",
        10: "Mundo tecnológico",
        11: "Europa em 1939",
        12: "Início da guerra",
        13: "Resistência europeia",
        14: "Dia D",
        15: "Fim da guerra",
        16: "Brasil em 1964",
        17: "Censura e imprensa",
        18: "Movimento estudantil",
        19: "Diretas Já",
        20: "Redemocratização"
    };

    const nome = nomes[numeroNivel];

    if (!nome) return;

    imagem.src = `imagens/nivel${numeroNivel}.jpg`;
    imagem.alt = nome;

    if (legenda) {
        legenda.textContent = nome;
    }
}

function mostrarPergunta() {
    if (maiorNivel >= TOTAL) {
        mostrarResultado();
        return;
    }

    respondeu = false;

    const pergunta = perguntas[atual];

    epoca.textContent = pergunta.epoca;
    tituloEpoca.textContent = pergunta.titulo;
    numeroPergunta.textContent = `DESAFIO ${maiorNivel + 1} DE ${TOTAL}`;
    contador.textContent = `SALTO ${String(maiorNivel + 1).padStart(2, "0")}`;

    barraProgresso.style.width = `${(maiorNivel / TOTAL) * 100}%`;

    caixaPerguntas.textContent = pergunta.enunciado;
    caixaAlternativas.replaceChildren();
    caixaFeedback.hidden = true;

    alternativasEmbaralhadasAtuais = embaralharAlternativas(
        pergunta.alternativas
    );

    atualizarImagemNivel(atual + 1);

    alternativasEmbaralhadasAtuais.forEach(alternativa => {
        const botao = document.createElement("button");

        botao.type = "button";
        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            selecionarResposta(alternativa, botao);
        });

        caixaAlternativas.appendChild(botao);
    });

    atualizarEnergia();
}

function selecionarResposta(alternativaEscolhida, botaoEscolhido) {
    if (respondeu) return;

    respondeu = true;

    const botoes = caixaAlternativas.querySelectorAll("button");

    botoes.forEach(botao => {
        botao.disabled = true;
    });

    alternativasEmbaralhadasAtuais.forEach((alternativa, indice) => {
        if (alternativa.correta) {
            botoes[indice].classList.add("correta");
        }
    });

    if (alternativaEscolhida.correta) {
        pontuacao++;
        energia = Math.min(100, energia + 10);
        maiorNivel++;

        tituloFeedback.textContent = "Coordenadas estabilizadas! ✦";

        botaoEscolhido.classList.add("correta");

        if (maiorNivel >= TOTAL) {
            destinoDepoisDoFeedback = "final";

            textoFeedback.textContent =
                alternativaEscolhida.explicacao +
                " Todos os fragmentos foram recuperados. A linha temporal está estável!";
        } else {
            destinoDepoisDoFeedback = escolherProximoDestino(atual);

            textoFeedback.textContent =
                alternativaEscolhida.explicacao +
                " A máquina recuperou energia. Preparando um novo salto temporal...";
        }
    } else {
        erros++;
        energia = Math.max(0, energia - 20);

        tituloFeedback.textContent = "Falha temporal! Recuando...";

        botaoEscolhido.classList.add("errada");

        destinoDepoisDoFeedback = Math.max(0, atual - 1);

        textoFeedback.textContent =
            alternativaEscolhida.explicacao +
            " A Cronos perdeu estabilidade e está recuando para uma época anterior. " +
            "Você precisa superar um desafio temporal antes de continuar.";
    }

    atualizarEnergia();
    caixaFeedback.hidden = false;

    botaoContinuar.textContent =
        destinoDepoisDoFeedback === "final"
            ? "RESTAURAR A LINHA TEMPORAL →"
            : alternativaEscolhida.correta
                ? "INICIAR PRÓXIMO SALTO →"
                : "TENTAR RECUPERAR A ROTA →";
}

function escolherProximoDestino(indiceAtual) {
    const rotas = {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        11: 12,
        12: 13,
        13: 14,
        14: 15,
        15: 16,
        16: 17,
        17: 18,
        18: 19
    };

    return rotas[indiceAtual] ?? 0;
}

function continuarViagem() {
    if (destinoDepoisDoFeedback === "final") {
        mostrarResultado();
        return;
    }

    if (destinoDepoisDoFeedback !== null) {
        atual = destinoDepoisDoFeedback;
    }

    destinoDepoisDoFeedback = null;
    mostrarPergunta();
}

function mostrarResultado() {
    mostrarTela(telaFinal);
    barraProgresso.style.width = "100%";

    document.querySelector("#pontuacao-final").textContent =
        `${pontuacao}/${TOTAL}`;

    const percentual = (pontuacao / (TOTAL + erros)) * 100;

    let mensagem;
    let titulo;

    if (erros === 0) {
        titulo = "Guardião do tempo!";
        mensagem =
            "Impressionante! Você restaurou a linha temporal sem cometer erros. " +
            "Seu conhecimento ajudou a salvar passado, presente e futuro.";
    } else if (percentual >= 70) {
        titulo = "Explorador temporal!";
        mensagem =
            "Você enfrentou falhas e recuos, mas conseguiu restaurar a linha temporal. " +
            "Cada desafio trouxe uma nova descoberta.";
    } else if (percentual >= 40) {
        titulo = "Sobrevivente do tempo!";
        mensagem =
            "Sua viagem foi cheia de desvios. Continue estudando as épocas históricas " +
            "para dominar a Cronos na próxima missão.";
    } else {
        titulo = "A linha temporal continua instável...";
        mensagem =
            "Você chegou ao fim da missão, mas ainda há muito para aprender. " +
            "Volte a explorar as épocas e tente restaurar o futuro novamente.";
    }

    document.querySelector("#titulo-final").textContent = titulo;
    document.querySelector("#mensagem-final").textContent = mensagem;

    // CRÉDITOS DOS CRIADORES
    let creditos = document.querySelector("#creditos-final");

    if (!creditos) {
        creditos = document.createElement("p");
        creditos.id = "creditos-final";
        creditos.className = "creditos-final";

        document.querySelector("#mensagem-final").after(creditos);
    }

    creditos.textContent = "Desenvolvido por Pedro Henrique e Hellen Dias";

    creditos.style.textAlign = "center";
    creditos.style.marginTop = "25px";
    creditos.style.fontWeight = "bold";
    creditos.style.color = "#5CE1E6";
    creditos.style.fontSize = "16px";
    creditos.style.letterSpacing = "1px";

    let resumo = document.querySelector("#resumo-temporal");

    if (!resumo) {
        resumo = document.createElement("p");
        resumo.id = "resumo-temporal";
        resumo.className = "descricao";

        document.querySelector("#pontuacao-final").parentNode.after(resumo);
    }

    resumo.textContent = `Erros temporais: ${erros} | Energia final: ${energia}%`;
}

document.querySelector("#botao-iniciar")
    .addEventListener("click", () => {
        mostrarTela(criarTelaMissao());
    });

document.querySelector("#botao-como-jogar")
    .addEventListener("click", () => mostrarTela(telaInstrucoes));

document.querySelector("#botao-voltar")
    .addEventListener("click", () => mostrarTela(telaInicial));

botaoContinuar.addEventListener("click", continuarViagem);

document.querySelector("#botao-reiniciar")
    .addEventListener("click", iniciarJogo);

document.querySelector("#botao-inicio-final")
    .addEventListener("click", () => mostrarTela(telaInicial));
