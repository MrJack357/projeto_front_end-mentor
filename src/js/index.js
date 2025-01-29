// 1. Pegar o elemento de  **botão** para ser adicionado o **evento de clique** nele.


// 2. Pegar o elemento de **id do conselho** 

// 3. Pegar o elemento de **descrição do conselho**

// 4. Após conseguirmos os elementos do html, é necessário a criação da **função responsável por pegar os dados da API**. A melhor forma de se consumir a api é usando **async await**. Caso não tenha visto a aula, sugiro que assista novamente. Nas referências ficará um link com exemplos.

// 5. Importante que durante a chamada a api seja feito o tratamento dos erros usando o **try-catch,** caso não lembre pode assistir a aula novamente. 

// 6. Dentro da função, após pegarmos os dados da API, é necessário atualizar o conteúdo do id e descrição do conselho que colocamos em uma variável usando o **innertText**. A diferença entre innerText e innerHTML: 
// O innerHTML pode adicionar ou pegar elementos HTML , já com o innerText isso não é possivel, ele pode apenas atribuir um texto ou pegar o texto de determinado elemento.
// Nesse caso, queremos só atribuir um texto, por isso usamos o innerText

// 7. Por fim, basta chamar a função criada

// 8. Atribuir a função que criamos para ser executada no evento do clique do botão ou se preferir, criar o escopo da função dentro do listener.


document.addEventListener("DOMContentLoaded", () => {
    // 1️⃣ Capturar os elementos do HTML
    const botao = document.getElementById("randomAdvice");
    const numeroConselho = document.getElementById("numeroConselho");
    const conselhoTexto = document.getElementById("conselho");

    // 2️⃣ Criar a função assíncrona para buscar dados da API
    async function buscarConselho() {
        try {
            // 3️⃣ Fazer a requisição para a API
            const resposta = await fetch("https://api.adviceslip.com/advice");
            
            // 4️⃣ Verificar se a resposta da API é válida
            if (!resposta.ok) {
                throw new Error("Erro ao buscar conselho");
            }
            
            // 5️⃣ Converter os dados para JSON
            const dados = await resposta.json();
            
            // 6️⃣ Atualizar o HTML com os dados da API
            numeroConselho.innerText = `ADVICE #${dados.slip.id}`;
            conselhoTexto.innerText = `"${dados.slip.advice}"`;
        } catch (erro) {
            // 7️⃣ Lidar com erros
            console.error("Erro ao buscar conselho:", erro);
            conselhoTexto.innerText = "Erro ao carregar conselho. Tente novamente.";
        }
    }

    // 8️⃣ Criar uma função temporária para testar conselhos longos
    function testarConselhoLongo() {
        numeroConselho.innerText = "ADVICE #12";
        conselhoTexto.innerText = "Este é um conselho extremamente longo que serve para testar a responsividade do layout. Se o texto quebrar ou sair da tela, ajustes no CSS são necessários para garantir uma exibição adequada.";
    }

    // 9️⃣ Associar a função ao botão
    botao.addEventListener("click", buscarConselho);

    // 🔟 Carregar um conselho automaticamente ao iniciar a página
    //buscarConselho();
    
    // 1️⃣1️⃣ Ativar o teste de conselho longo descomentando a linha abaixo
    testarConselhoLongo();
});

