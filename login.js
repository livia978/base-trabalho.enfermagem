function selecionarProfissao(botao) {

document.querySelectorAll(".profession").forEach(item => item.classList.remove("selected"));

        botao.classList.add("selected");
    }

function entrar() {

    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

    if (nome === "" || senha === "") {alert("Preencha seu nome e sua senha!");
        return;
    }

    alert("Login realizado com sucesso!");
        }