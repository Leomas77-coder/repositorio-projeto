document.addEventListener('DOMContentLoaded', function () {
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
    // Função para obter os parâmetros da URL
    function getProductFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        return produtos.find(produto => produto.id === productId);
    }

    const product = getProductFromUrl();

    // Se o produto não for encontrado, exiba uma mensagem
    if (product) {
        document.getElementById('product-image').src = product.imagem;
        document.getElementById('product-name').textContent = product.nome;
        document.getElementById('product-description').textContent = product.descricao;
        document.getElementById('product-price').textContent = product.preco;
    } else {
        document.body.innerHTML = "<h1>Produto não encontrado</h1>";
    }
});
