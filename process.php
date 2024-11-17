<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Captura os dados do formulário
    $nome = $_POST["name"] ?? '';
    $data = $_POST["date"] ?? '';
    $email = $_POST["email"] ?? '';
    $mensagem = $_POST["mensagem"] ?? '';

    // Prepara os dados para salvar
    $conteudo = "Name: $nome\nData de Aniversário: $data\nE-mail: $email\nMensagem: $mensagem\n\n";

<<<<<<< HEAD
    // Caminho do arquivo local
    $arquivo = "dados.txt";
=======
    // Valida o formato do e-mail
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Por favor, insira um e-mail válido.";
        exit();
    }

    // Armazena os dados na sessão com segurança
    $_SESSION['nome'] = htmlspecialchars($nome);
    $_SESSION['email'] = htmlspecialchars($email);
>>>>>>> b46ec81 (Ajustes)

    // Salva os dados no arquivo
    file_put_contents($arquivo, $conteudo, FILE_APPEND);

    echo "Dados salvos com sucesso!";
} else {
<<<<<<< HEAD
    echo "Método de envio inválido.";
=======
    echo "Por favor, preencha todos os campos.";
>>>>>>> b46ec81 (Ajustes)
}
