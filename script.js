export function aleatorio(lista) {
    if (!Array.isArray(lista) || lista.length === 0) {
        return "";
    }

    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}

export const nome = aleatorio([
    "Ana",
    "Fernanda",
    "Marcelo",
    "Amanda",
    "Gabriel"
]);
const base = [
    {
        epoca: "PRESENTE — 2026",
        titulo: "A falha temporal",
        enunciado: "Você recebe um alerta da máquina Cronos. Qual é a principal função de uma fonte histórica?",
        opcoes: ["Ajudar a compreender o passado", "Prever exatamente tudo o que acontecerá", "Apagar registros antigos"],
        correta: 0,
        explicacoes: [
            "Documentos, objetos, imagens e relatos ajudam os historiadores a investigar o passado.",
            "Fontes históricas ajudam a compreender o passado, mas não permitem prever exatamente o futuro.",
            "Apagar registros prejudicaria a preservação da memória histórica."
        ]
    },
    {
        epoca: "FUTURO — 2150",
        titulo: "O alerta das máquinas",
        enunciado: "Nesse futuro fictício, sistemas automatizados controlam boa parte das cidades. Qual é um risco real de usá-los sem supervisão adequada?",
        opcoes: ["Decisões injustas e falhas difíceis de detectar", "Todas as máquinas deixam de precisar de energia", "A tecnologia elimina todos os conflitos"],
        correta: 0,
        explicacoes: [
            "Sistemas automatizados podem reproduzir vieses ou cometer erros. Supervisão humana é importante.",
            "Máquinas continuam dependendo de energia e manutenção.",
            "A tecnologia não elimina automaticamente os conflitos sociais."
        ]
    },
    {
        epoca: "BRASIL — 1964",
        titulo: "Um período de tensão",
        enunciado: "Você chega ao início da ditadura militar brasileira. Em que ano ocorreu o golpe que instaurou o regime?",
        opcoes: ["1964", "1988", "1930"],
        correta: 0,
        explicacoes: [
            "O golpe de 1964 depôs o presidente João Goulart e deu início à ditadura militar brasileira.",
            "Em 1988 foi promulgada a Constituição brasileira atual.",
            "1930 marca outro importante processo político da história brasileira."
        ]
    },
    {
        epoca: "GRÉCIA ANTIGA",
        titulo: "O nascimento de uma ideia",
        enunciado: "Você chega a Atenas. Qual cidade é especialmente associada ao desenvolvimento da democracia antiga?",
        opcoes: ["Atenas", "Esparta", "Cartago"],
        correta: 0,
        explicacoes: [
            "Atenas desenvolveu uma forma de democracia direta, mas muitos habitantes não tinham direitos políticos.",
            "Esparta tinha uma organização política diferente, com forte influência militar.",
            "Cartago foi uma importante cidade-Estado do Mediterrâneo."
        ]
    },
    {
        epoca: "REVOLUÇÃO INDUSTRIAL",
        titulo: "O poder das máquinas",
        enunciado: "A Cronos salta para a Inglaterra do século XVIII. Qual transformação marcou a Revolução Industrial?",
        opcoes: ["A expansão da produção mecanizada", "O desaparecimento de todas as cidades", "O fim do comércio mundial"],
        correta: 0,
        explicacoes: [
            "A mecanização transformou a produção, as relações de trabalho e o crescimento das cidades.",
            "A industrialização contribuiu para o crescimento de muitas cidades.",
            "O comércio continuou existindo e se expandiu em diferentes regiões."
        ]
    },
    {
        epoca: "FUTURO — 2150",
        titulo: "O código perdido",
        enunciado: "Uma máquina bloqueia seu caminho. Qual medida ajuda a tornar sistemas automatizados mais responsáveis?",
        opcoes: ["Testes, supervisão e possibilidade de contestar decisões", "Permitir qualquer decisão sem controle", "Impedir que pessoas questionem os resultados"],
        correta: 0,
        explicacoes: [
            "Auditorias e supervisão ajudam a identificar erros e responsabilizar os envolvidos.",
            "A ausência de supervisão pode ampliar riscos.",
            "A possibilidade de questionar decisões é importante para a transparência."
        ]
    },
    {
        epoca: "EGITO ANTIGO",
        titulo: "O enigma das pirâmides",
        enunciado: "Você volta milhares de anos. Qual era uma das principais funções das grandes pirâmides egípcias?",
        opcoes: ["Servir como túmulos reais", "Servir como fábricas modernas", "Funcionarem como estações ferroviárias"],
        correta: 0,
        explicacoes: [
            "As pirâmides estavam ligadas às práticas funerárias dos faraós e às crenças sobre a vida após a morte.",
            "As pirâmides tinham funções funerárias e religiosas, não industriais.",
            "Ferrovias são tecnologias de períodos muito posteriores."
        ]
    },
    {
        epoca: "BRASIL — ANOS 1970",
        titulo: "A voz sob censura",
        enunciado: "Durante a ditadura militar, qual prática restringia a liberdade de expressão?",
        opcoes: ["A censura a publicações, músicas e manifestações", "A liberdade irrestrita de criticar o governo", "A ausência de controle sobre a imprensa"],
        correta: 0,
        explicacoes: [
            "A censura atingiu artistas, jornalistas, intelectuais e opositores durante a ditadura.",
            "A liberdade de expressão foi severamente restringida durante o regime.",
            "A imprensa sofreu diferentes formas de controle e censura."
        ]
    },
    {
        epoca: "PRÉ-HISTÓRIA",
        titulo: "Muito antes da escrita",
        enunciado: "Como os pesquisadores estudam sociedades pré-históricas?",
        opcoes: ["Analisando fósseis, ferramentas e pinturas rupestres", "Usando exclusivamente jornais da época", "Consultando gravações de televisão"],
        correta: 0,
        explicacoes: [
            "Vestígios materiais ajudam a investigar a vida humana antes do desenvolvimento da escrita.",
            "Não existiam jornais na Pré-História.",
            "A televisão surgiu milhares de anos depois da Pré-História."
        ]
    },
    {
        epoca: "PRESENTE — 2026",
        titulo: "O rastro da história",
        enunciado: "Você precisa distinguir uma informação confiável de um boato. Qual atitude é mais adequada?",
        opcoes: ["Verificar a fonte e comparar informações", "Compartilhar a primeira mensagem recebida", "Acreditar em qualquer imagem publicada"],
        correta: 0,
        explicacoes: [
            "Comparar fontes confiáveis ajuda a identificar informações falsas ou fora de contexto.",
            "Uma mensagem pode estar errada ou manipulada. Verifique antes de compartilhar.",
            "Imagens também podem ser editadas ou retiradas de contexto."
        ]
    },
    {
        epoca: "ROMA ANTIGA",
        titulo: "O império e suas leis",
        enunciado: "Você chega à Roma Antiga. Qual língua teve papel central na administração romana do Ocidente?",
        opcoes: ["Latim", "Português", "Inglês"],
        correta: 0,
        explicacoes: [
            "O latim influenciou várias línguas, entre elas o português, o espanhol, o francês e o italiano.",
            "O português se desenvolveu muitos séculos depois, a partir da evolução do latim falado.",
            "O inglês também se desenvolveu muito depois da Roma Antiga."
        ]
    },
    {
        epoca: "FUTURO — 2150",
        titulo: "A cidade autônoma",
        enunciado: "Uma cidade futurista precisa decidir como usar robôs no trabalho. Qual abordagem considera melhor os impactos sociais?",
        opcoes: ["Avaliar riscos, proteger direitos e preparar trabalhadores", "Ignorar os efeitos sobre a população", "Substituir todas as decisões humanas"],
        correta: 0,
        explicacoes: [
            "Educação, proteção social e planejamento ajudam a lidar com as mudanças causadas pela automação.",
            "Mudanças tecnológicas também têm efeitos econômicos e sociais que precisam ser considerados.",
            "Decisões importantes precisam considerar direitos e responsabilidades humanas."
        ]
    },
    {
        epoca: "IDADE MÉDIA",
        titulo: "Entre castelos e feudos",
        enunciado: "Em partes da Europa medieval, qual sistema organizava relações sociais ligadas à terra e a obrigações entre grupos?",
        opcoes: ["Feudalismo", "Capitalismo industrial", "Socialismo contemporâneo"],
        correta: 0,
        explicacoes: [
            "O feudalismo caracterizou partes da Europa medieval, embora as sociedades variassem entre regiões.",
            "O capitalismo industrial se desenvolveu muito depois, com a industrialização.",
            "O socialismo contemporâneo surgiu em outro contexto histórico."
        ]
    },
    {
        epoca: "BRASIL — ANOS 1980",
        titulo: "O caminho da democracia",
        enunciado: "A Cronos chega ao período de redemocratização. Em que ano foi promulgada a atual Constituição brasileira?",
        opcoes: ["1988", "1964", "1500"],
        correta: 0,
        explicacoes: [
            "A Constituição de 1988 ampliou direitos e se tornou um marco da redemocratização brasileira.",
            "1964 marca o golpe que instaurou a ditadura militar.",
            "1500 é associado à chegada dos portugueses ao território que hoje é o Brasil."
        ]
    },
    {
        epoca: "RENASCIMENTO",
        titulo: "A redescoberta do conhecimento",
        enunciado: "Você chega à Europa do Renascimento. Qual característica marcou esse movimento cultural?",
        opcoes: ["Valorização das artes, da ciência e da cultura clássica", "Abandono completo da produção artística", "Proibição de todo estudo científico"],
        correta: 0,
        explicacoes: [
            "O Renascimento valorizou referências greco-romanas e impulsionou transformações artísticas e intelectuais.",
            "O período ficou conhecido por importantes inovações nas artes e no pensamento.",
            "O período teve importantes transformações intelectuais e científicas."
        ]
    },
    {
        epoca: "ERA DAS NAVEGAÇÕES",
        titulo: "Além dos horizontes",
        enunciado: "Nos séculos XV e XVI, qual era um dos objetivos das navegações europeias?",
        opcoes: ["Buscar rotas comerciais e expandir territórios", "Construir ferrovias entre continentes", "Criar redes de internet"],
        correta: 0,
        explicacoes: [
            "Interesses comerciais, políticos e religiosos contribuíram para as navegações, ligadas também à colonização.",
            "As ferrovias surgiram muito depois.",
            "A internet é uma tecnologia do século XX."
        ]
    },
    {
        epoca: "SÉCULO XX",
        titulo: "Uma mensagem pelo tempo",
        enunciado: "Qual tecnologia transformou profundamente a comunicação global a partir do final do século XX?",
        opcoes: ["A internet", "A máquina a vapor", "O telégrafo óptico da Antiguidade"],
        correta: 0,
        explicacoes: [
            "A expansão da internet mudou a comunicação, o acesso à informação e as relações sociais.",
            "A máquina a vapor foi fundamental para a industrialização, mas surgiu muito antes da internet.",
            "O telégrafo óptico é muito anterior à internet."
        ]
    },
    {
        epoca: "FUTURO — 2150",
        titulo: "O dilema final",
        enunciado: "As máquinas oferecem uma solução rápida, mas os dados podem estar incompletos. O que você faz?",
        opcoes: ["Verifico as evidências e avalio as consequências", "Aceito a resposta automaticamente", "Ignoro todas as informações disponíveis"],
        correta: 0,
        explicacoes: [
            "Decisões responsáveis exigem avaliar evidências, limitações e possíveis consequências.",
            "Uma resposta automatizada também pode estar errada.",
            "Ignorar informações impede uma avaliação responsável."
        ]
    },
    {
        epoca: "PRESENTE — 2026",
        titulo: "O ponto de retorno",
        enunciado: "Você encontra o último fragmento temporal. Por que estudar História é importante para a sociedade?",
        opcoes: ["Para compreender mudanças, permanências e escolhas humanas", "Porque o passado determina inevitavelmente tudo", "Para impedir qualquer transformação social"],
        correta: 0,
        explicacoes: [
            "A História ajuda a compreender como as sociedades se transformaram e a refletir sobre problemas atuais.",
            "O passado influencia o presente, mas as decisões humanas também constroem o futuro.",
            "O estudo da História permite compreender transformações, não impedi-las."
        ]
    },
    {
        epoca: "FUTURO — 2189",
        titulo: "O destino da linha temporal",
        enunciado: "Você chega ao ano em que a missão começou. Qual é a melhor forma de impedir que erros históricos se repitam?",
        opcoes: ["Aprender com o passado, avaliar evidências e agir com responsabilidade", "Apagar todos os registros do passado", "Ignorar as experiências de outras sociedades"],
        correta: 0,
        explicacoes: [
            "Conhecimento histórico, pensamento crítico e responsabilidade ajudam a tomar decisões melhores.",
            "Apagar a memória histórica não resolve os problemas.",
            "Compreender experiências anteriores ajuda a refletir sobre o presente."
        ]
    }
];

/*
 * Cada pergunta possui três alternativas.
 * Cada rota contém: tipo, destino e mensagem de Game Over, quando houver.
 * Os números são posições fixas da lista.
 */
const rotas = [
    {
        caminho: "INICIO",
        opcoes: [
            ["entrada", 1],
            ["entrada", 2],
            ["entrada", 4]
        ]
    },
    {
        caminho: "A",
        opcoes: [
            ["avancar", 3],
            ["salto", 4],
            ["trocar", 2]
        ]
    },
    {
        caminho: "B",
        opcoes: [
            ["avancar", 7],
            ["salto", 8],
            ["trocar", 1]
        ]
    },
    {
        caminho: "A",
        opcoes: [
            ["avancar", 4],
            ["salto", 1],
            ["gameover", null, "A decisão comprometeu a missão temporal. Você ignorou informações importantes e a Cronos perdeu sua estabilidade."]
        ]
    },
    {
        caminho: "A",
        opcoes: [
            ["avancar", 5],
            ["salto", 6],
            ["trocar", 8]
        ]
    },
    {
        caminho: "A",
        opcoes: [
            ["avancar", 6],
            ["salto", 3],
            ["gameover", null, "Uma decisão precipitada comprometeu a segurança da missão. A Cronos não conseguiu continuar."]
        ]
    },
    {
        caminho: "A",
        opcoes: [
            ["avancar", 11],
            ["salto", 5],
            ["trocar", 10]
        ]
    },
    {
        caminho: "B",
        opcoes: [
            ["avancar", 8],
            ["salto", 2],
            ["gameover", null, "A missão foi comprometida por uma escolha sem análise das informações disponíveis."]
        ]
    },
    {
        caminho: "B",
        opcoes: [
            ["avancar", 9],
            ["salto", 10],
            ["trocar", 4]
        ]
    },
    {
        caminho: "B",
        opcoes: [
            ["avancar", 10],
            ["salto", 7],
            ["gameover", null, "A Cronos perdeu estabilidade. A escolha feita comprometeu a continuidade da viagem."]
        ]
    },
    {
        caminho: "B",
        opcoes: [
            ["avancar", 12],
            ["salto", 9],
            ["trocar", 6]
        ]
    },
    {
        caminho: "A",
        opcoes: [
            ["avancar", 13],
            ["salto", 6],
            ["gameover", null, "A missão foi interrompida por uma decisão que colocou os registros históricos em risco."]
        ]
    },
    {
        caminho: "B",
        opcoes: [
            ["avancar", 14],
            ["salto", 10],
            ["gameover", null, "A viagem foi interrompida. A decisão comprometeu a confiança necessária para concluir a missão."]
        ]
    },
    {
        caminho: "A",
        opcoes: [
            ["avancar", 15],
            ["salto", 11],
            ["trocar", 14]
        ]
    },
    {
        caminho: "B",
        opcoes: [
            ["avancar", 16],
            ["salto", 12],
            ["gameover", null, "A Cronos não conseguiu estabilizar essa escolha. A missão foi encerrada."]
        ]
    },
    {
        caminho: "A",
        opcoes: [
            ["avancar", 17],
            ["salto", 13],
            ["trocar", 16]
        ]
    },
    {
        caminho: "B",
        opcoes: [
            ["avancar", 18],
            ["salto", 14],
            ["gameover", null, "A linha temporal ficou instável e a Cronos precisou encerrar a missão."]
        ]
    },
    {
        caminho: "A",
        opcoes: [
            ["avancar", 19],
            ["salto", 15],
            ["trocar", 18]
        ]
    },
    {
        caminho: "B",
        opcoes: [
            ["avancar", 19],
            ["salto", 16],
            ["trocar", 17]
        ]
    },
    {
        caminho: "A",
        opcoes: [
            ["avancar", 20],
            ["salto", 21],
            ["gameover", null, "O último fragmento foi perdido. A linha temporal continua instável."]
        ]
    }
];

export const perguntas = base.map((pergunta, indice) => ({
    ...pergunta,
    caminho: rotas[indice].caminho,
    alternativas: pergunta.opcoes.map((texto, posicao) => {
        const [tipo, proxima, mensagem] = rotas[indice].opcoes[posicao];

        return {
            texto,
            correta: posicao === pergunta.correta,
            explicacao: pergunta.explicacoes[posicao],
            afirmacao: `Você escolheu: ${texto}.`,
            tipo,
            proxima,
            mensagem,
            disponivel: true
        };
    })
}));

// Os dois finais ficam depois das 20 perguntas.
perguntas.push(
    {
        caminho: "FINAL",
        final: "vitoria",
        titulo: "O futuro restaurado",
        enunciado: "Você recuperou os fragmentos e conseguiu estabilizar a linha temporal.",
        mensagem: "Você aprendeu com diferentes épocas, compreendeu as transformações históricas e restaurou o equilíbrio entre passado, presente e futuro. A missão foi concluída com sucesso. Você venceu!"
    },
    {
        caminho: "FINAL",
        final: "vitoria",
        titulo: "Uma nova linha temporal",
        enunciado: "Sua viagem encontrou outro caminho para restaurar o futuro.",
        mensagem: "Suas escolhas conectaram diferentes momentos da História. A Cronos recuperou sua estabilidade e uma nova linha temporal foi criada. A missão foi concluída com sucesso. Você venceu!"
    }
);
