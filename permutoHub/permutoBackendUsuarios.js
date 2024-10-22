const usuarios = [
    { nome: "João Silva", email: "joao@example.com", senha: "senha123", descricao: "DEV Backend" },
    { nome: "Maria Oliveira", email: "maria@example.com", senha: "senha456", descricao: "Design" },
];

function mostrarDados() {
    console.table(usuarios);
}

function inserirUsuario(nome, email, senha, descricao) {
    if(!nome || !email || !senha || !descricao){
        console.log("É necessario preencher todos os campos")
    }
    else{
        if (encontrarUsuario(email) >= 0) {
            console.log("O usuário com email " + email + " já está cadastrado.");
        } else {
            usuarios.push({ nome, email, senha, descricao });
        }
    }
}

function deletarUsuario(email) {
    const indice = encontrarUsuario(email);
    if (indice != -1) {
        usuarios.splice(indice, 1);
        console.log("Usuário deletado com sucesso.");
    } else {
        console.log("O usuário que você digitou não foi encontrado.");
    }
}

function encontrarUsuario(email) {
    return usuarios.findIndex(usuario => usuario.email === email);
}



module.exports = { mostrarDados, inserirUsuario, deletarUsuario, encontrarUsuario }