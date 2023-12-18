// Função para abrir a caixa de diálogo
function openDialog() {
  // Obtém o elemento da caixa de diálogo pelo ID e define o estilo de exibição como "block"
  document.getElementById("dialog").style.display = "block";
}

// Função para fechar a caixa de diálogo
function closeDialog() {
  // Obtém o elemento da caixa de diálogo pelo ID e define o estilo de exibição como "none"
  document.getElementById("dialog").style.display = "none";
}


function addTask() {
  // Obter valores da caixa de diálogo
  var taskName = document.getElementById("taskName").value;
  var taskColor = document.getElementById("taskColor").value;

  if (taskName !== "") {
    // Criar um novo botão para representar a tarefa
    var newTaskDiv = document.createElement("button");
    newTaskDiv.className = "item";
    newTaskDiv.draggable = "true";
    newTaskDiv.draggable = true;
    newTaskDiv.setAttribute('onclick', 'containerCard(this)');

    // Adicionar o parágrafo com o nome da tarefa
    var taskText = document.createElement("p");
    taskText.className = "tasktext";
    taskText.textContent = taskName;

    // Adicionar o círculo com a cor escolhida
    var taskCircle = document.createElement("div");
    taskCircle.className = "taskCircle";
    taskCircle.style.backgroundColor = taskColor;

    // Adicionar o parágrafo e o círculo à nova div
    newTaskDiv.appendChild(taskText);
    newTaskDiv.appendChild(taskCircle);

    // Adicionar a nova div à coluna BACKLOG
    var backlogColumn = document.getElementById("todo-lane");
    backlogColumn.appendChild(newTaskDiv);

    // Adicionar ouvintes de arrastar à nova tarefa
    newTaskDiv.addEventListener("dragstart", () => {
        newTaskDiv.classList.add("is-dragging");
    });

    newTaskDiv.addEventListener("dragend", () => {
        newTaskDiv.classList.remove("is-dragging");
    });

    // Fechar o diálogo após a confirmação
    closeDialog();
  } else {
    // Exibe uma mensagem ou feedback informando que o nome da tarefa não pode estar vazio
    alert("O nome da tarefa não pode estar vazio.");
  }
}
