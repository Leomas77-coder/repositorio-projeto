<?php
session_start(); // Inicia a sessão para acessar os dados

// Verifica se os dados de nome e email estão armazenados na sessão
if (isset($_SESSION['nome']) && isset($_SESSION['email'])) {
    $nome = $_SESSION['nome'];
    $email = $_SESSION['email'];
} else {
    echo "Nenhum dado encontrado.";
    exit();
}
?> 

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Confirmação de Cadastro</title>
</head>
<body>
    <h2>Confirmação de Cadastro</h2>
    <p><strong>Nome:</strong> <?php echo htmlspecialchars($nome); ?></p>
    <p><strong>E-mail:</strong> <?php echo htmlspecialchars($email); ?></p>
    
<<<<<<< HEAD
    <a href="Contato.html">Voltar ao formulário</a>
=======
    <a href="index.php">Voltar ao formulário</a>
>>>>>>> b46ec81 (Ajustes)
</body>
</html>
