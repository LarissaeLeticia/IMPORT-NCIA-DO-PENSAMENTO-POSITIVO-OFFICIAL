const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acredita que manter uma atitude otimista ajuda a superar desafios?",
        alternativas: [
            {
                texto: "Sim, acho que o pensamento positivo faz toda a diferença.",
                afirmacao: "Manter uma atitude otimista realmente pode ajudar a enfrentar dificuldades com mais esperança e resiliência."
            },
            {
                texto: "Não, acho que a realidade é mais importante do que o otimismo.",
                afirmacao: "Entendo seu ponto de vista. É importante também reconhecer os fatos, mas uma atitude positiva pode complementar a compreensão da realidade e ajudar a encontrar soluções."
            }
        ]
    },
    {
        enunciado: "Quando enfrenta uma situação difícil, você tende a focar nas soluções ou nos problemas?",
        alternativas: [
            {
                texto: " Nas soluções, sempre tento pensar de forma positiva.",
                afirmacao: "Focar nas soluções ajuda a manter a motivação e a encontrar caminhos para superar os obstáculos."
            },
            {
                texto: "Nos problemas, às vezes fico preso ao lado negativo.",
                afirmacao: "Isso é normal. Reconhecer os problemas é importante, mas tentar direcionar seu foco para as soluções pode fazer uma grande diferença na resolução de desafios."
            }
        ]
    },
    {
        enunciado: "Você costuma usar afirmações positivas para melhorar seu humor ou motivação?",
        alternativas: [
            {
                texto: "Sim, elas me ajudam a manter uma visão mais esperançosa.",
                afirmacao: "Afirmações positivas podem fortalecer sua autoestima e manter uma perspectiva mais otimista."
            },
            {
                texto: "Não, prefiro não usar esse tipo de estratégia.",
                afirmacao: "Tudo bem! Cada pessoa tem suas próprias formas de se motivar. Se desejar, pode experimentar afirmações para ver como elas funcionam para você."
            }
        ]
    },
    {
        enunciado: "Você acha que o pensamento positivo influencia suas relações com as pessoas?",
        alternativas: [
            {
                texto: "Com certeza, uma atitude positiva atrai boas energias.",
                afirmacao: "Uma postura otimista costuma criar um ambiente mais agradável e atrair boas conexões."
            },
            {
                texto: "Não tenho certeza, acho que as pessoas percebem mais a minha sinceridade.",
                afirmacao: "Ser sincero é fundamental, e uma atitude positiva também pode ajudar a fortalecer suas relações."
            }
        ]
    },
    {
        enunciado: "Ao pensar no meu futuro, eu:",
        alternativas: [
            {
                texto: " Acredito que coisas boas podem acontecer se eu mantiver uma atitude positiva.",
                afirmacao: "Acreditar no potencial de coisas boas acontecerem é uma atitude que pode abrir portas e motivar você a seguir em frente."
            },
            {
                texto: "Tenho dúvidas de que minhas ações possam fazer diferença.",
                afirmacao: "É compreensível ter dúvidas, mas lembre-se de que suas ações realmente podem fazer a diferença. Manter uma atitude positiva pode ajudar a transformar suas possibilidades em realidades."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];mostraPergunta();
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}


function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}
mostraPergunta();