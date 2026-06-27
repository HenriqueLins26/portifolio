// ==========================================================
// 1. INÍCIO DO MENU RESPONSIVO
// ==========================================================
const botaoMenu = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

botaoMenu.addEventListener("click", function(){
    menu.classList.toggle("ativo");
});
// Fim do Menu responsivo


// ==========================================================
// 2. INÍCIO DA LÓGICA DE TROCA DE TEMA (DARK MODE)
// ==========================================================
const botaoTema = document.querySelector("#tema");
const body = document.body;

// Passo A: Verifica se o usuário já tinha escolhido o tema escuro antes
const temaSalvo = localStorage.getItem("tema-escolhido");

// Se estiver salvo como "escuro", ativa o modo escuro logo de cara
if (temaSalvo === "escuro") {
    body.classList.add("dark-theme");
}

// Passo B: Escuta o clique no botão "Mudar tema"
botaoTema.addEventListener("click", function() {
    // O toggle adiciona a classe se ela não existir, e remove se ela já existir
    body.classList.toggle("dark-theme");
    
    // Passo C: Salva a escolha atual do usuário para a próxima página lembrar
    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("tema-escolhido", "escuro");
    } else {
        localStorage.setItem("tema-escolhido", "claro");
    }
});
// Fim da lógica de tema

// ==========================================================
// 3. VALIDAÇÃO DO FORMULÁRIO E SIMULAÇÃO DE ENVIO
// ==========================================================
const formulario = document.querySelector("#meuFormulario");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        // Impede o formulário de recarregar a página antes da validação
        event.preventDefault();

        // Pega os elementos e valores digitados
        const nome = document.querySelector("#inome").value.trim();
        const email = document.querySelector("#iemail").value.trim();
        const mensagem = document.querySelector("#imsg").value.trim();

        // 3.1. Validação: Verifica se algum campo está vazio
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return; // Interrompe a execução
        }

        // 3.2. Validação avançada de formato do e-mail (RegEx)
        // Expressão regular que valida o padrão: usuario@dominio.com
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            alert("Por favor, insira um e-mail com formato válido (exemplo: usuario@dominio.com).");
            return; // Interrompe a execução
        }

        // 3.3. Simulação de envio com sucesso
        alert("Mensagem enviada com sucesso!");

        // 3.4. Limpa os campos após o envio
        formulario.reset();
    });
}