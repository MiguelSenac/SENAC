const prompt = require("prompt-sync")();

let livros = ["a", "f", "d", "i"];

function menu() {
  console.log("===========================================");
  console.log("1. Inserir Livro");
  console.log("2. Excluir Livro");
  console.log("3. Ordenar a lista de livros");
  console.log("4. Exibir todos os livros cadastrados");
  console.log("5. Pesquisar Livro");
  console.log("6. Sair");
}

function inserirLivro() {
  const novoLivro = prompt("Digite o nome do livro que deseja adicionar: ");
  if (livros.includes(novoLivro)) {
    console.log("[ERRO] O livro já está na lista.");
  } else {
    livros.push(novoLivro);
    console.log("Livro adicionado com sucesso.");
  }
}

function excluirLivro() {
  const deletarLivro = prompt("Digite o nome do livro que deseja deletar: ");
  const confirmacao = prompt("Você tem certeza que deseja excluir o livro " + deletarLivro + "? [1] Sim [2] Não: ");
  if (confirmacao === "1" && livros.includes(deletarLivro)) {
    livros = livros.filter(livro => livro !== deletarLivro);
    console.log("Livro excluído com sucesso.");
  } else if (confirmacao === "2") {
    console.log("Você optou por não excluir nenhum livro.");
  } else {
    console.log("[ERRO] Opção inválida ou livro não encontrado.");
  }
}

function ordenarLivros() {
  console.log("1. Ordem alfabética");
  console.log("2. Ordem alfabética invertida");
  const escolha = prompt("Digite a sua escolha: ");
  if (escolha === "1") {
    livros.sort();
    console.log("Livros ordenados em ordem alfabética.");
  } else if (escolha === "2") {
    livros.sort().reverse();
    console.log("Livros ordenados em ordem alfabética invertida.");
  } else {
    console.log("Opção inválida.");
  }
}

function exibirLivros() {
  livros.forEach((livro, indice) => {
    console.log(`Nome: ${livro} | Índice: ${indice + 1}`);
  });
  console.log(`Quantidade total de livros: ${livros.length}`);
}

function pesquisarLivro() {
  const item = prompt("Digite o nome do livro: ");
  const index = livros.indexOf(item);
  if (index !== -1) {
    console.log(`Livro "${item}" encontrado.`);
  } else {
    console.log("Livro não encontrado.");
  }
}

function main() {
  let opcao = "";
  while (opcao !== "6") {
    menu();
    opcao = prompt("Digite a opção desejada: ");
    switch (opcao) {
      case "1":
        inserirLivro();
        break;
      case "2":
        excluirLivro();
        break;
      case "3":
        ordenarLivros();
        break;
      case "4":
        exibirLivros();
        break;
      case "5":
        pesquisarLivro();
        break;
      case "6":
        console.log("Você saiu.");
        break;
      default:
        console.log("Você escolheu uma opção inválida.");
    }
  }
}

main();
