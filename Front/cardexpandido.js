
function containerCard(clickedElement) {
  document.getElementById("cardEx").style.display = "block";

  var textTitulo = clickedElement.querySelector(".tasktext").innerText;
  var titulo = document.createElement("h1");
  titulo.className = "tituloCard";
  titulo.id = "tituloCard";
  titulo.textContent = textTitulo;
  var local1 = document.getElementById("cardEx-content");
  local1.appendChild(titulo);
  //criando a box de comentario
  var boxComentario = document.createElement("textarea");
  boxComentario.className = "boxComentario";
  boxComentario.id = "boxComentario";
  var local2 = document.getElementById("descricao");
  local2.appendChild(boxComentario);
  var comentario = clickedElement.querySelector(".comentario");
  if(comentario!==null)
  {
    comentario = clickedElement.querySelector(".comentario").innerText;
    boxComentario.textContent = comentario;
  }
  else
  {
    comentario = document.createElement("div");
    comentario.className = "comentario";
    comentario.id = "comentario"+textTitulo;
    comentario.style.display = "none";
    clickedElement.appendChild(comentario);
  }
  //criando a box de atividade
  var boxAtiv = document.createElement("textarea");
  boxAtiv.className = "boxAtividade";
  boxAtiv.id = "boxAtiv";
  var local3 = document.getElementById("atividade");
  local3.appendChild(boxAtiv);
  var ativ = clickedElement.querySelector(".atividade");
  if(ativ!==null)
  {
    ativ = clickedElement.querySelector(".atividade").innerText;
    boxAtiv.textContent = ativ;
  }
  else
  {
    ativ = document.createElement("div");
    ativ.className = "atividade";
    ativ.id = "atividade"+textTitulo;
    ativ.style.display = "none";
    clickedElement.appendChild(ativ);
  }
  //criando a box de responsavel
  var boxResp = document.createElement("textarea");
  boxResp.className = "boxResponsavel";
  boxResp.id = "boxResponsavel";
  var local4 = document.getElementById("responsavel");
  local4.appendChild(boxResp);
  var responsavel = clickedElement.querySelector(".responsavel");
  if(responsavel!==null)
  {
    responsavel = clickedElement.querySelector(".responsavel").innerText;
    boxResp.textContent = responsavel;
  }
  else
  {
    responsavel = document.createElement("div");
    responsavel.className = "responsavel";
    responsavel.id = "responsavel"+textTitulo;
    responsavel.style.display = "none";
    clickedElement.appendChild(responsavel);
  }

  //criando input de calendario
  var inputCalendario = document.createElement("input");
  inputCalendario.className = "data";
  inputCalendario.id = "calendario";
  inputCalendario.type = "date";
  var local5 = document.getElementById("data");
  local5.appendChild(inputCalendario);
  var calendario = clickedElement.querySelector(".calendario");
  if(calendario!==null)
  {
    calendario = clickedElement.querySelector(".calendario").innerText;
    console.log(calendario);
    inputCalendario.value = calendario;
  }
  else
  {
    inputCalendario.value = "aaaa-mm-dd";
    calendario = document.createElement("div");
    calendario.className = "calendario";
    calendario.id = "calendario"+textTitulo;
    calendario.style.display = "none";
    clickedElement.appendChild(calendario);
  }

  //criando botão adm fin
  var botaoAdm = document.createElement("button");
  criarBotao(botaoAdm, "Adm Fin");
  var botaoMkt = document.createElement("button");
  criarBotao(botaoMkt, "Marketing");
  var botaoPres = document.createElement("button");
  criarBotao(botaoPres, "Presidência");
  var botaoGep = document.createElement("button");
  criarBotao(botaoGep, "GEP");
  var botaoPjt = document.createElement("button");
  criarBotao(botaoPjt, "Projetos");
  var botaoCom = document.createElement("button");
  criarBotao(botaoCom, "Comercial");
  var corTitulo = clickedElement.querySelector(".taskCircle").style.backgroundColor;
  switch(corTitulo)
  {
    case "rgb(139, 95, 164)":
      console.log("pres");
      botaoPres.style.backgroundColor = "rgb(139, 95, 164)";
      botaoPres.value = "ativado";
      break;
    case "rgb(115, 115, 115)":
      console.log("Adm");
      botaoAdm.style.backgroundColor = "rgb(115, 115, 115)";
      botaoAdm.value = "ativado";
      break;
    case "rgb(246, 165, 45)":
      console.log("Mkt");
      botaoMkt.style.backgroundColor = "rgb(246, 165, 45)";
      botaoMkt.value = "ativado";
      break;
    case "rgb(255, 49, 49)":
      console.log("GEP");
      botaoGep.style.backgroundColor = "rgb(255, 49, 49)";
      botaoGep.value = "ativado";
      break;
    case "rgb(47, 153, 61)":
      console.log("Pjt");
      botaoPjt.style.backgroundColor = "rgb(47, 153, 61)";
      botaoPjt.value = "ativado";
      break;
    case "rgb(0, 151, 178)":
      console.log("Com");
      botaoCom.style.backgroundColor = "rgb(0, 151, 178)";
      botaoCom.value = "ativado";
      break;
  }
  
}

function closeContainer() {
  // Obtém o elemento da caixa de diálogo pelo ID e define o estilo de exibição como "none"
  document.getElementById("cardEx").style.display = "none";

  var titulo = document.getElementById("tituloCard").innerText;
  document.getElementById("tituloCard").remove();

  var textComent = document.getElementById("boxComentario").value;
  document.getElementById("boxComentario").remove();
  var comentario = document.getElementById("comentario"+titulo);
  comentario.textContent = textComent;

  var textAtiv = document.getElementById("boxAtiv").value;
  document.getElementById("boxAtiv").remove();
  var atividade = document.getElementById("atividade"+titulo);
  atividade.textContent = textAtiv;

  var textResp = document.getElementById("boxResponsavel").value;
  document.getElementById("boxResponsavel").remove();
  var responsavel = document.getElementById("responsavel"+titulo);
  responsavel.textContent = textResp;

  var data = document.getElementById("calendario").value;
  document.getElementById("calendario").remove();
  var calendario = document.getElementById("calendario"+titulo);
  calendario.textContent = data;

  var lista = document.getElementsByClassName("setorButton");
  for(var i = lista.length - 1; i >= 0; i--)
  {
    lista[i].remove()
  }
}

function criarBotao(nomeBotao, name)
{
  var local = document.getElementById("setores");
  var espaco = document.createElement("br");
  espaco.className = "setorButton";
  local.appendChild(espaco);
  nomeBotao.className = "setorButton";
  //newTaskDiv.setAttribute('onclick', 'containerCard(this)');
  local.appendChild(nomeBotao);
  var buttonText = document.createElement("p");
  buttonText.className = "setortext";
  buttonText.textContent = name;
  nomeBotao.appendChild(buttonText);
}



/*inutilizado temporariamente
function mudaCor(elemento, corAtual)
{
  if(elemento.value === "ativado")
  {
    switch(elemento.className)
    {
      case "admCard":
      botaoPres.style.backgroundColor = "rgb(139, 95, 164)";
      botaoPres.value = "ativado";
      break;
      case "mktCard":
        elemento.style.backgroundImage = imagesOff[3];
      break;
      case "presCard":
        elemento.style.backgroundImage = imagesOff[5];
      break;
      case "comCard":
        elemento.style.backgroundImage = imagesOff[1];
      break;
      case "pjtCard":
        elemento.style.backgroundImage = imagesOff[4];
      break;
      case "gepCard":
        elemento.style.backgroundImage = imagesOff[2];
      break;
    }
    elemento.value = "desativado";
  }
  else
  {
    switch(elemento.className)
    {
      case "admCard":
        elemento.style.backgroundImage = imagesOn[0];
      break;
      case "mktCard":
        elemento.style.backgroundImage = imagesOn[3];
      break;
      case "presCard":
        elemento.style.backgroundImage = imagesOn[5];
      break;
      case "comCard":
        elemento.style.backgroundImage = imagesOn[1];
      break;
      case "pjtCard":
        elemento.style.backgroundImage = imagesOn[4];
      break;
      case "gepCard":
        elemento.style.backgroundImage = imagesOn[2];
      break;
    }
    elemento.value = "ativado";
  }
}*/

