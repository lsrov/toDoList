document.getElementById("addTarefa").addEventListener("click", function() {
    let tarefaInput = document.getElementById("tarefaInput");
    let textoTarefa = tarefaInput.value.trim();

    if (textoTarefa === "") return;

    let listaTarefas = document.getElementById("listaTarefas");

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = textoTarefa;

    let divBotoes = document.createElement("div");
    divBotoes.classList.add("botoesTarefa");

    let botaoFeito = document.createElement("button");
    botaoFeito.innerHTML = "✔";
    botaoFeito.classList.add("botaoFeito");
    botaoFeito.onclick = function() {
        span.classList.toggle("feita");
    };

    let botaoDeletar = document.createElement("button");
    botaoDeletar.innerHTML = "✖";
    botaoDeletar.classList.add("botaoDeletar");
    botaoDeletar.onclick = function() {
        li.remove();
    };

    divBotoes.appendChild(botaoFeito);
    divBotoes.appendChild(botaoDeletar);

    li.appendChild(span);
    li.appendChild(divBotoes);

    listaTarefas.appendChild(li);
    tarefaInput.value = "";
});
