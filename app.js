// Adiciona um evento ao botão "addTarefa" para escutar cliques
document.getElementById("addTarefa").addEventListener("click", function() { 

    // Captura o campo de entrada onde o usuário digita a tarefa
    let tarefaInput = document.getElementById("tarefaInput");

    // Obtém o valor digitado no input e remove espaços extras
    let textoTarefa = tarefaInput.value.trim();

    // Verifica se o campo está vazio, se estiver, não adiciona nada
    if (textoTarefa === "") return;

    // Obtém a lista de tarefas
    let listaTarefas = document.getElementById("listaTarefas");

    // Cria um novo elemento <li> para representar a tarefa
    let li = document.createElement("li");

    // Cria um <span> para armazenar o texto da tarefa
    let span = document.createElement("span");
    span.textContent = textoTarefa;

    // Cria uma div para os botões de ação
    let divBotoes = document.createElement("div");
    divBotoes.classList.add("botoesTarefa");

    // Cria o botão de "feito" (✔)
    let botaoFeito = document.createElement("button");
    botaoFeito.innerHTML = "✔"; // Define o ícone do botão
    botaoFeito.classList.add("botaoFeito"); // Adiciona a classe CSS correspondente
    botaoFeito.onclick = function() {
        span.classList.toggle("feita"); // Alterna a classe "feita" para riscar o texto
    };

    // Cria o botão de "deletar" (✖)
    let botaoDeletar = document.createElement("button");
    botaoDeletar.innerHTML = "✖"; // Define o ícone do botão
    botaoDeletar.classList.add("botaoDeletar"); // Adiciona a classe CSS correspondente
    botaoDeletar.onclick = function() {
        li.remove(); // Remove a tarefa da lista
    };

    // Adiciona os botões à div
    divBotoes.appendChild(botaoFeito);
    divBotoes.appendChild(botaoDeletar);

    // Adiciona o <span> e a div de botões ao <li>
    li.appendChild(span);
    li.appendChild(divBotoes);

    // Adiciona o <li> à lista de tarefas
    listaTarefas.appendChild(li);

    // Limpa o campo de entrada após adicionar a tarefa
    tarefaInput.value = "";
});
