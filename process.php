<?php
session_start(); // Inicia a sessão para armazenar os dados

// Verifica se os campos foram preenchidos
if (isset($_POST['nome']) && isset($_POST['email'])) {
    $nome = $_POST['nome'];
    $email = $_POST['email'];

    // Armazena os dados na sessão
    $_SESSION['nome'] = $nome;
    $_SESSION['email'] = $email;

    // Redireciona para a página de confirmação
    header("Location: confirmacao.php");
    exit();
} else {
    echo "Por favor, preencha todos os campos.";
}
?>