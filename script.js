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

    document.addEventListener('DOMContentLoaded', function () {
        const searchBar = document.querySelector('#search-bar');
        const suggestionsList = document.getElementById('suggestions');
    
        // Array com os produtos
        const produtos = [
            {
              id: 1,  
              nome: "Guitarra Elétrica",
              descricao: "Ibanez GRG 121EX BKN - Black Night",
              preco: "R$1899,99",
              imagem: "https://imgs.casasbahia.com.br/1569481602/2xg.jpg"
            },
            {
              id: 2,
              nome: "Bateria Acústica",
              descricao: "Yamaha SBP2F50 Stage Custom Drum She",
              preco: "R$ 3.199,99",
              imagem: "https://http2.mlstatic.com/bateria-yamaha-rydeen-nueva-no-dw-tama-pearl-platillos-meinl-D_NQ_NP_854118-MLM31218996907_062019-F.jpg"
            },
            {
              id: 3,
              nome: "Guitarra",
              descricao: "Guitarra elétrica Fender Player Telecaster de amieiro 3-color sunburst brilhante",
              preco: "R$ 6599,99",
              imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_730031-MLU73779223403_012024-F.webp"
            },
            {
                id:4,
              nome: "Violão Di Giorgio",
              descricao: "Di Giorgio Clássico 38E Elétrico Nylon",
              preco: "R$ 699,99",
              imagem: "https://http2.mlstatic.com/violao-acustico-digiorgio-tarrega-hendrix-D_NQ_NP_264521-MLB20784474097_062016-F.jpg"
            },
            {
                id:5,
              nome: "Acordeon",
              descricao: "Acordeon Sanfona Benson 80 Baixos Preto Sólido",
              preco: "R$ 1499,99",
              imagem: "https://th.bing.com/th/id/OIP.OUFpqJZ-iy4DhqjA4pxU_gHaHa?rs=1&pid=ImgDetMain"
            },
            {
                id:6,
              nome: "Baixo Tagima",
              descricao: "Baixo Tagima Tjb5 Classic Series Jazz Bass 5 Cordas Preto",
              preco: "R$ 899,99",
              imagem: "https://th.bing.com/th/id/OIP.OWdcQeb-_lxT6JbledxoGQHaE8?rs=1&pid=ImgDetMain"
            },
            {
                id:7,
              nome: "Teclado",
              descricao: "Teclado Musical Spring Tc-261 61 Teclas Preto",
              preco: "R$ 1499,00",
              imagem: "https://a-static.mlcdn.com.br/1500x1500/teclado-musical-arranjador-61-teclas-hk-812-profissional-sensitive-usb-suporte-pedestal-fonte-hkeyboard/newsons/e6ldty29l/c110fa322a096b76a847f8b717555b79.jpg"
            },
            {
                id:8,
              nome: "Pandeiro",
              descricao: "Pandeiro Profissional 10\" Pele Leitosa",
              preco: "R$ 599,00",
              imagem: "https://th.bing.com/th/id/OIP.6nxqD9sZJcj7uxTpO7b-HgHaEp?rs=1&pid=ImgDetMain"
            },
            {
                id:9,
              nome: "Baqueta Profissional",
              descricao: "Baqueta liverpool special grip 5a",
              preco: "R$ 399,99",
              imagem: "https://th.bing.com/th/id/R.ea5d8fefa8a64915082ea9be31f98d52?rik=plHhxyWK8XDqYg&pid=ImgRaw&r=0"
            }
        ];
    
        function showSuggestions(query) {
            suggestionsList.innerHTML = ''; // Limpa as sugestões anteriores
            const filtro = query.toLowerCase();
    
            // Filtra os produtos que incluem o texto da pesquisa
            const sugestoes = produtos.filter(produto =>
                produto.nome.toLowerCase().includes(filtro) || produto.descricao.toLowerCase().includes(filtro)
            );
    
            // Exibe as sugestões limitadas
            sugestoes.slice(0, 5).forEach(produto => {
                const listItem = document.createElement("li");
                listItem.classList.add("suggestion-item");
                listItem.innerHTML = `<a href="produto-detalhes.html?id=${produto.id}">${produto.nome}</a>`;
                suggestionsList.appendChild(listItem);
            });
    
            // Exibe ou esconde a lista com base na existência de sugestões
            suggestionsList.style.display = query ? "block" : "none";
        }
    
        // Função para filtrar os produtos conforme o texto da pesquisa
        function pesquisarProdutos() {
            const termoPesquisa = searchBar.value.toLowerCase();
            const produtosFiltrados = produtos.filter(produto => {
                return produto.nome.toLowerCase().includes(termoPesquisa) || 
                       produto.descricao.toLowerCase().includes(termoPesquisa);
            });
            // A exibição de produtos pode ser realizada aqui também
        }
    
        // Evento para a barra de pesquisa
        searchBar.addEventListener('input', (e) => {
            const query = e.target.value;
            showSuggestions(query);  // Exibe as sugestões enquanto digita
        });
    });