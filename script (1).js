// Variáveis globais para armazenar as notas e o resultado
let notas = [];

// Função para adicionar uma nota
function adicionarNota() {
    const notaInput = document.getElementById("nota");
    const nota = parseFloat(notaInput.value);

    // Verifica se a nota é válida (entre 0 e 10)
    if (!isNaN(nota) && nota >= 0 && nota <= 10) {
        notas.push(nota);
        notaInput.value = ""; // Limpa o campo de entrada
        exibirNotas();
    } else {
        alert("Por favor, insira uma nota válida entre 0 e 10.");
    }
}

// Função para calcular a média das notas
function calcularMedia() {
    if (notas.length === 0) {
        alert("Nenhuma nota foi adicionada!");
        return;
    }

    // Soma todas as notas e calcula a média
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    const media = soma / notas.length;

    // Exibe o resultado
    exibirResultado(media);
}

// Função para exibir as notas adicionadas
function exibirNotas() {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p>Notas: ${notas.join(", ")}</p>`;
}

// Função para exibir o resultado da média
function exibirResultado(media) {
    const resultadoDiv = document.getElementById("resultado");

    // Verifica se a média é suficiente
    let mensagem = media >= 7 ? "Aprovado!" : "Reprovado!";
    resultadoDiv.innerHTML += `<p>Média: ${media.toFixed(2)} - ${mensagem}</p>`;
}
