/*
Descricao: Página Login
nome_exercicio: AulaHTML12
nome_aluno: Matheus Henrique Batista Raimundo
email_aluno: matheus.raimundo3@aluno.cps.sp.gov.br
turma: WEBI-ISW028-A
*/

const formulario = document.getElementById("formLogin");
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");
const erroEmail = document.getElementById("erroEmail");
const erroSenha = document.getElementById("erroSenha");
const mensagemSucesso = document.getElementById("mensagemSucesso");
const botaoVerSenha = document.getElementById("verSenha");


const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function mostrarErro(campo, elementoErro, mensagem) {
    elementoErro.textContent = mensagem;
    campo.classList.add("invalido");
}

function limparErro(campo, elementoErro) {
    elementoErro.textContent = "";
    campo.classList.remove("invalido");
}


const valor = campoEmail.value.trim();

if (valor === "") {
    mostrarErro(campoEmail, erroEmail, "Digite seu email.");
    return false;
}
if (!padraoEmail.test(valor)) {
    mostrarErro(campoEmail, erroEmail, "Email inválido. Exemplo: nome@dominio.com");
    return false;
}
limparErro(campoEmail, erroEmail);
return true;
}

function validarSenha() {
    const valor = campoSenha.value;

    if (valor === "") {
        mostrarErro(campoSenha, erroSenha, "Digite sua senha.");
        return false;
    }
    if (valor.length < 6) {
        mostrarErro(campoSenha, erroSenha, "A senha precisa ter pelo menos 6 caracteres.");
        return false;
    }
    limparErro(campoSenha, erroSenha);
    return true;
}


formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();
    mensagemSucesso.textContent = "";


    const emailOk = validarEmail();
    const senhaOk = validarSenha();

    if (emailOk && senhaOk) {
        mensagemSucesso.textContent = "Login válido! Dados prontos para envio.";
    }
});


campoEmail.addEventListener("input", function () {
    limparErro(campoEmail, erroEmail);
});

campoSenha.addEventListener("input", function () {
    limparErro(campoSenha, erroSenha);
});


botaoVerSenha.addEventListener("click", function () {
    const estaOculta = campoSenha.type === "password";
    campoSenha.type = estaOculta ? "text" : "password";
    botaoVerSenha.textContent = estaOculta ? "Ocultar" : "Mostrar";
});