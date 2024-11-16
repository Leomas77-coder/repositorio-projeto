    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');

    // Contador para as imagens
    let counter = 0;
    const size = images[0].clientWidth; 

    // Função para mover o carrossel
    function moveCarousel() {
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    // Botões de navegação
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Botão próximo
    nextBtn.addEventListener('click', () => {
        if (counter >= images.length - 1) return; 
        counter++;
        moveCarousel();
    });

    // Botão anterior
    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return; 
        counter--;
        moveCarousel();
    });

    // Movimento automático 
    setInterval(() => {
        if (counter >= images.length - 1) {
            counter = -1; 
        }
        counter++;
        moveCarousel();
    }, 3000); // Troca de imagem a cada 3 segundos

    // Barra de Pesquisa
    // Função para carregar produtos de Produtos.html dinamicamente
function loadProdutos() {
    const produtos = [];
    const produtoElements = document.querySelectorAll(".product-card"); // Seleciona todos os produtos

    produtoElements.forEach(produtoElement => {
        const nome = produtoElement.querySelector(".product-title").textContent; // Pega o nome do produto
        const link = produtoElement.querySelector("a") ? produtoElement.querySelector("a").getAttribute("href") : "#"; // Pega o link, se houver (ou # caso não tenha)
        produtos.push({ nome, link });
    });

    return produtos;
}

// Função para exibir sugestões
function showSuggestions(query) {
    const suggestionsList = document.getElementById("suggestions");
    suggestionsList.innerHTML = ""; // Limpa as sugestões anteriores
    const filtro = query.toLowerCase();

    const produtos = loadProdutos(); // Carrega os produtos de Produtos.html

    // Filtra os produtos que incluem o texto da pesquisa
    const sugestoes = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(filtro)
    );

    // Limite o número de sugestões exibidas (opcional)
    const limiteSugestoes = 5;
    sugestoes.slice(0, limiteSugestoes).forEach(produto => {
        const listItem = document.createElement("li");
        listItem.classList.add("suggestion-item");
        listItem.innerHTML = `<a href="${produto.link}">${produto.nome}</a>;`
        suggestionsList.appendChild(listItem);
    });

    // Exibe a lista apenas se houver sugestões e se o campo de pesquisa não estiver vazio
    suggestionsList.style.display = query ? "block" : "none";
}
searchBar.addEventListener("input", (e)=> {
    const query = e.target.value;
    showSuggestions (query);
});

// Para a barra de pesquisa dos produtos
document.getElementById('search-bar').addEventListener('input', function () {
    const searchText = this.value.toLowerCase(); // Texto digitado na barra de busca
    const products = document.querySelectorAll('.product-card'); // Todos os produtos

    products.forEach(product => {
        const title = product.querySelector('.product-title').textContent.toLowerCase(); // Título do produto
        if (title.includes(searchText)) {
            product.style.display = ''; // Exibe o produto (usa o estilo padrão do CSS)
        } else {
            product.style.display = 'none'; // Oculta o produto
        }
    });
});


  