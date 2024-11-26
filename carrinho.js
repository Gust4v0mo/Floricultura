// carrinho.js
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function adicionarAoCarrinho(nome, preco, imagem) {
    const item = { nome, preco, imagem };
    carrinho.push(item);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(nome + " foi adicionado ao carrinho");
}

function atualizarCarrinho() {
    const itensCarrinho = document.getElementById('itensCarrinho');
    const totalValue = document.getElementById('totalValue');
    itensCarrinho.innerHTML = ''; // Limpa o carrinho

    let total = 0;

    carrinho.forEach((item, index) => {
        const divItem = document.createElement('div');
        divItem.classList.add('item');
        divItem.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" width="100">
            <div class="descricao">
                <h3>${item.nome}</h3>
                <p>Preço: R$ ${item.preco}</p>
                <button onclick="removerDoCarrinho(${index})">Remover</button>
                
            </div>
        `;
        itensCarrinho.appendChild(divItem);
        total += parseFloat(item.preco);
    });

    totalValue.innerText = total.toFixed(2);
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
}

// Atualiza o carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarCarrinho);