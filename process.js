document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Impede o envio do formulário padrão

    // Coleta os dados do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;

    // Verifica se os campos não estão vazios
    if (nome === "" || email === "" || idade === "") {
        alert("Todos os campos devem ser preenchidos!");
        return;
    }

    // Validação da idade (deve ser maior que 0)
    if (parseInt(idade) <= 0) {
        alert("Idade inválida! Digite um número maior que 0.");
        return;
    }

    // Armazena os dados no LocalStorage
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("idade", idade);

    // Redireciona para a página de confirmação
    window.location.href = "confirmation.html";
});
