<?php
session_start(); // Inicia a sessão para armazenar os dados

// Verifica se os campos foram preenchidos
if (isset($_POST['nome']) && isset($_POST['email'])) {
    $nome = $_POST['nome'];
    $email = $_POST['email'];

    // Valida o formato do e-mail
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Por favor, insira um e-mail válido.";
        exit();
    }

    // Armazena os dados na sessão com segurança
    $_SESSION['nome'] = htmlspecialchars($nome);
    $_SESSION['email'] = htmlspecialchars($email);

    // Redireciona para a página de confirmação
    header("Location: confirmacao.php");
    exit();
} else {
    echo "Por favor, preencha todos os campos.";
}
