function gerarSenha(tamanho) {
    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*()_+{}|:<>?-=[]."
    var senha = "";
    for (var i = 0; i < tamanho; i++) {
        var randomIndex = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[randomIndex];
    }
    return senha;
}

function exibirSenha() {
    var tamanho = document.getElementById("tamanho"). value;
    if (tamanho < 1) {
        alert ("Por favor, informe um tamanho válido para a senha.");
        return;
    }

    var senha = gerarSenha(tamanho);
    document.getElementById("senha").innerHTML = senha;
}
