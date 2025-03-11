document.getElementById("addTarefa").addEventListener("click", function(){
    let tarefaInput = document.getElementById("tarefaInput");
    let textoTarefa = tarefaInput.value.trim();

    if (textoTarefa === "") return;

    let listaTarefas = document.getElementById("listaTarefas");

    let li = document.createElement("li");
    li.innerHTML = `${textoTarefa} <button onclick="deletaTarefa(this)">X</button>`;

    listaTarefas.appendChild(li);
    tarefaInput.value = "";
});

function deletaTarefa(button){
    button.parentElement.remove();
}