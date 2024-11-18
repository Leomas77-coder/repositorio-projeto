<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Captura os dados do formulário
    $nome = $_POST["name"] ?? '';
    $data = $_POST["date"] ?? '';
    $email = $_POST["email"] ?? '';
    $mensagem = $_POST["mensagem"] ?? '';

    // Prepara os dados para salvar
    $conteudo = "Name: $nome\nData de Aniversário: $data\nE-mail: $email\nMensagem: $mensagem\n\n";

    // Caminho do arquivo local
    $arquivo = "dados.txt";

    // Salva os dados no arquivo
    file_put_contents($arquivo, $conteudo, FILE_APPEND);

    echo "Dados salvos com sucesso!";
} else {
    echo "Método de envio inválido.";
}
?>