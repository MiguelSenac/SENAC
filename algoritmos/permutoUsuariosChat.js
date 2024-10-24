const prompt = require("prompt-sync")();

const usuarios = [
    { id: 1, nome: "João Silva", email: "joao@example.com", senha: "senha123", tipoUsuario: "fisica", descricao: "Desenvolvedor", habilidades: ["JavaScript", "Python"] },
    { id: 2, nome: "Maria Oliveira", email: "maria@example.com", senha: "senha456", tipoUsuario: "juridica", descricao: "Empresa de Tecnologia", habilidades: ["Gestão", "Inovação"] }
];

function mostrarDados() {
    console.table(usuarios);
}

function inserirUsuario(nome, email, senha, tipoUsuario, descricao, habilidades) {
    const id = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
    usuarios.push({ id, nome, email, senha, tipoUsuario, descricao, habilidades });
}

function deletarUsuario(id) {
    const indice = encontrarUsuario(id);
    if (indice !== -1) {
        usuarios.splice(indice, 1);
    } else {
        console.log("O usuário que você digitou não foi encontrado");
    }
}

function encontrarUsuario(id) {
    return usuarios.findIndex(usuario => usuario.id === id);
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
            let tipoUsuario = prompt("Digite o tipo de usuário (fisica/juridica): ");
            let descricao = prompt("Digite a descrição do usuário: ");
            let habilidades = prompt("Digite as habilidades do usuário (separadas por vírgula): ").split(",").map(h => h.trim());
            inserirUsuario(nome, email, senha, tipoUsuario, descricao, habilidades);
            break;

        case "3":
            let idParaDeletar = parseInt(prompt("Digite o ID do usuário: "));
            deletarUsuario(idParaDeletar);
            break;

        case "4":
            let idParaEncontrar = parseInt(prompt("Digite o ID do usuário: "));
            let indice = encontrarUsuario(idParaEncontrar);
            if (indice === -1) {
                console.log("Usuário não encontrado");
            } else {
                console.log("Usuário encontrado:", usuarios[indice]);
            }
            break;

        case "5":
            console.log("Você saiu");
            opcao = false;
            break;

        default:
            console.log("[ERRO] Digite uma opção válida");
    }
}
