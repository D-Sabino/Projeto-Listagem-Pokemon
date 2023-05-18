// Passo 01: Pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// Passo 02: Pegar no JS o elemento HTML correspondente ao body
const body = document.querySelector("body");

// (Passo 05)
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

// Passo 03: Identificar o clique do usuario no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {
  // Passo 06: Verificar se a classe ja tem a classe modo-escuro
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  /*
    Para substituir as linhas:
    body.classList.remove("modo-escuro");
    e body.classList.add("modo-escuro");
    Utiliza-se o toggle
  */
  body.classList.toggle("modo-escuro");
  

  if(modoEscuroEstaAtivo){
    // Passo 07: Remover a classe do modo-escuro
    //body.classList.remove("modo-escuro");

    // Passo 08: Alterar a imagem do botão de alterar tema para a lua
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  }
  else{
    // Passo 04: Adicionar a classe modo-escuro no body
    //body.classList.add("modo-escuro");

    // Passo 05: Alterar a imagem do botão de alterar tema para a lua
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }

});