const prompt = require("prompt-sync")();

const usuarios = [
    { nome: "João Silva", email: "joao@example.com", senha: "senha123" },
    { nome: "Maria Oliveira", email: "maria@example.com", senha: "senha456" },
];

function mostrarDados() {
    console.table(usuarios);
}

function inserirUsuario(nome, email, senha) {
    if (encontrarUsuario(email) >= 0) {
        console.log("O usuário com email " + email + " já está cadastrado.");
    } else {
        usuarios.push({ nome, email, senha });
    }
}

function deletarUsuario(email) {
    const indice = encontrarUsuario(email);
    if (indice !== -1) {
        usuarios.splice(indice, 1);
        console.log("Usuário deletado com sucesso.");
    } else {
        console.log("O usuário que você digitou não foi encontrado.");
    }
}

function encontrarUsuario(email) {
    return usuarios.findIndex(usuario => usuario.email === email);
}

function menu() {
    console.log("=============================");
    console.log("[1] EXIBIR USUÁRIOS CADASTRADOS");
    console.log("[2] INSERIR USUÁRIO");
    console.log("[3] DELETAR USUÁRIO");
    console.log("[4] ENCONTRAR USUÁRIO");
    console.log("[5] SAIR");
    console.log("");
}

let opcao = true;

while (opcao) {
    menu();

    let escolha = prompt("Digite a opção desejada: ");
    
    switch (escolha) {
        case "1":
            mostrarDados();
            break;

        case "2":
            let nome = prompt("Digite o nome do usuário: ");
            let email = prompt("Digite o email do usuário: ");
            let senha = prompt("Digite a senha do usuário: ");
            inserirUsuario(nome, email, senha);
            break;

        case "3":
            let emailParaDeletar = prompt("Digite o email do usuário: ");
            deletarUsuario(emailParaDeletar);
            break;

        case "4":
            let emailParaEncontrar = prompt("Digite o email do usuário: ");
            let indice = encontrarUsuario(emailParaEncontrar);
            if (indice === -1) {
                console.log("Usuário não encontrado.");
            } else {
                console.log("Usuário encontrado:", usuarios[indice]);
            }
            break;

        case "5":
            console.log("Você saiu.");
            opcao = false;
            break;

        default:
            console.log("[ERRO] Digite uma opção válida.");
    }
}
