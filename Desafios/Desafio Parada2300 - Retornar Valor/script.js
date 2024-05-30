const produtos = [
    {
        nome: 'Headset',
        imagem: 'https://static.cdnlive.com.br/uploads/602/etc/16667121427652.png',
        preco: '345,78'
    },
    {
        nome: 'Computador',
        imagem: 'https://cdn.dooca.store/180/products/s3hkkvdqnuo0f2qzdxnru1dn1ncsxnlyd0o6.png?v=1663097357',
        preco: '1568,78'
    },
    {
        nome: 'Celular',
        imagem: 'https://imgs.casasbahia.com.br/1565699242/1xg.jpg',
        preco: '1987,58'
    },
    {
        nome: 'Ar Condicionado',
        imagem: 'https://casadoarcondicionado.net.br/wp-content/uploads/sites/19/2023/10/ar-condicionado-tcl-inverter.png',
        preco: '1999,99'
    },
    {
        nome: 'Televisão',
        imagem: 'https://www.grundig.com/content/dam/rainbow-grundig-portugal-pt-aem/rainbow-grundig-portugal-pt-aemProductCatalog/product-images/DCS000-55-GGU-8960/DCS000-BULK-LO1-20211204-162540.png',
        preco: '2568,99'
    },
    {
        nome: 'Notebook',
        imagem: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/category-pages/inspiron-5330-categorypage-rf-800x620.png?fmt=png-alpha&wid=800&hei=620',
        preco: '3789,99'
    },
    {
        nome: 'Geladeira',
        imagem: 'https://images.samsung.com/is/image/samsung/br-ref-fdsr-rf22r7351sraz-rf22r7351sr-az-frontsilver-185294247?$650_519_PNG$',
        preco: '5899,99'
    }

];



const produto = document.getElementById('produto');

function atualizarValor() {
    const indice = produto.value;
    document.getElementById('img-produto').src = produtos[indice].imagem;
    document.getElementById('nome-produto').textContent = produtos[indice].nome;
    document.getElementById('preco-produto').textContent = `R$ ${produtos[indice].preco}`;
}

produto.addEventListener('input', atualizarValor);