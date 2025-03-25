document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os elementos do HTML
    const botao = document.querySelector(".botao");
    const numeroConselho = document.getElementById("numConselho");
    const conselhoTexto = document.getElementById("resultado");

    // Função para buscar conselho da API
    async function buscarConselho() {
        try {
            const resposta = await fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`);
            if (!resposta.ok) throw new Error("Erro ao buscar conselho");

            const dados = await resposta.json();
            numeroConselho.textContent = `CONSELHOS #${dados.slip.id}`;
            conselhoTexto.textContent = `"${dados.slip.advice}"`;
        } catch (erro) {
            console.error("Erro ao buscar conselho:", erro);
            conselhoTexto.textContent = "Erro ao carregar conselho. Tente novamente.";
        }
    }

    // Adiciona evento de clique no botão
    botao.addEventListener("click", buscarConselho);

    // Carrega um conselho ao iniciar a página
    buscarConselho();
});
