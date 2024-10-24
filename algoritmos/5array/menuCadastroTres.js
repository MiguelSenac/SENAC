const prompt = require("prompt-sync")();
const fs = require('fs');

let livros = [
  { nome: "a", categoria: "Ficção" },
  { nome: "f", categoria: "Aventura" },
  { nome: "d", categoria: "Romance" },
  { nome: "i", categoria: "Terror" }
];

function menu() {
  console.log("===========================================");
  console.log("1. Inserir Livro");
  console.log("2. Excluir Livro");
  console.log("3. Editar Livro");
  console.log("4. Ordenar a lista de livros");
  console.log("5. Exibir todos os livros cadastrados");
  console.log("6. Pesquisar Livro");
  console.log("7. Salvar lista de livros");
  console.log("8. Carregar lista de livros");
  console.log("9. Sair");
}

function inserirLivro() {
  const nome = prompt("Digite o nome do livro: ");
  const categoria = prompt("Digite a categoria do livro: ");
  const novoLivro = { nome, categoria };

  if (livros.some(livro => livro.nome === nome)) {
    console.log("[ERRO] O livro já está na lista.");
  } else {
    livros.push(novoLivro);
    console.log("Livro adicionado com sucesso.");
  }
}

function excluirLivro() {
  const nome = prompt("Digite o nome do livro que deseja deletar: ");
  const confirmacao = prompt(`Você tem certeza que deseja excluir o livro "${nome}"? [1] Sim [2] Não: `);
  if (confirmacao === "1" && livros.some(livro => livro.nome === nome)) {
    livros = livros.filter(livro => livro.nome !== nome);
    console.log("Livro excluído com sucesso.");
  } else {
    console.log(confirmacao === "2" ? "Você optou por não excluir nenhum livro." : "[ERRO] Livro não encontrado.");
  }
}

function editarLivro() {
  const nome = prompt("Digite o nome do livro que deseja editar: ");
  const livro = livros.find(livro => livro.nome === nome);
  if (livro) {
    livro.nome = prompt("Digite o novo nome do livro: ", livro.nome);
    livro.categoria = prompt("Digite a nova categoria do livro: ", livro.categoria);
    console.log("Livro editado com sucesso.");
  } else {
    console.log("[ERRO] Livro não encontrado.");
  }
}

function ordenarLivros() {
  console.log("1. Ordem alfabética");
  console.log("2. Ordem alfabética invertida");
  const escolha = prompt("Digite a sua escolha: ");
  if (escolha === "1") {
    livros.sort((a, b) => a.nome.localeCompare(b.nome));
    console.log("Livros ordenados em ordem alfabética.");
  } else if (escolha === "2") {
    livros.sort((a, b) => b.nome.localeCompare(a.nome));
    console.log("Livros ordenados em ordem alfabética invertida.");
  } else {
    console.log("Opção inválida.");
  }
}

function exibirLivros() {
  livros.forEach((livro, indice) => {
    console.log(`Nome: ${livro.nome} | Categoria: ${livro.categoria} | Índice: ${indice + 1}`);
  });
  console.log(`Quantidade total de livros: ${livros.length}`);
}

function pesquisarLivro() {
  const nome = prompt("Digite o nome do livro: ");
  const livro = livros.find(livro => livro.nome === nome);
  if (livro) {
    console.log(`Livro "${livro.nome}" encontrado na categoria "${livro.categoria}".`);
  } else {
    console.log("Livro não encontrado.");
  }
}

function salvarLivros() {
  const json = JSON.stringify(livros, null, 2);
  fs.writeFileSync('livros.json', json);
  console.log("Lista de livros salva com sucesso.");
}

function carregarLivros() {
  if (fs.existsSync('livros.json')) {
    const data = fs.readFileSync('livros.json');
    livros = JSON.parse(data);
    console.log("Lista de livros carregada com sucesso.");
  } else {
    console.log("[ERRO] Nenhum arquivo encontrado.");
  }
}

function main() {
  let opcao = "";
  while (opcao !== "9") {
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
        editarLivro();
        break;
      case "4":
        ordenarLivros();
        break;
      case "5":
        exibirLivros();
        break;
      case "6":
        pesquisarLivro();
        break;
      case "7":
        salvarLivros();
        break;
      case "8":
        carregarLivros();
        break;
      case "9":
        console.log("Você saiu.");
        break;
      default:
        console.log("Você escolheu uma opção inválida.");
    }
  }
}

main();
