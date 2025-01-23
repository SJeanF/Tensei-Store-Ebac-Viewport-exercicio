let custoAtual = 0

$(document).ready(function () {

    $('#carrosel').slick({
        autoplay:true
    })

    $('.slick-slider').on('afterChange', function(event, slick, currentSlide) {
        // Atualizar acessibilidade dos slides
        $('.slick-slide').attr('aria-hidden', 'true'); // Esconde todos os slides
        $('.slick-active').attr('aria-hidden', 'false'); // Torna visível o slide ativo
    });    
    
    $('#hamburguer').on('click', function() {
        $('nav').slideToggle().css('display', 'flex');
    })

    $('.dropdown-button').on('click', function() {
        $('.dropdown-content').slideToggle().css('display', 'flex');
    })

    $('#destaques .carrinho').on('click', function() {
        const produtoImg = $(this).parent().parent().parent().find('img')
        const produtoNameElement = $(this).parent().parent().find('h3').text()
        const precoElement = parseFloat($(this).parent().find('h4').find('span').text())
        
        adicionarAOCarrinho(produtoImg, produtoNameElement, precoElement);
    })

    $('#produtos .carrinho').on('click', function() {
        const produtoImg = $(this).parent().parent().find('img')
        const produtoNameElement = $(this).parent().parent().find('h4').text()
        const precoElement = parseFloat($(this).parent().find('h3').find('span').text())

        adicionarAOCarrinho(produtoImg, produtoNameElement, precoElement);
    })

    $('body').on('click', '.apagar',function() {
        apagarDoCarrinho(this)
    })
})


function adicionarAOCarrinho(img, name, price) {
    
    alteraSubTotal(price)

    const listaProdutos = $('.dropdown-lista-produtos')

    const carProductImg = $(`<img src="${img.attr('src')}" alt="${img.attr('alt')}">`)
    const carProductName = $(`<h5 style="text-align:center;">${name}</h5>`)
    const carPreco = $(`<p>R$<span>${price}</span></p>`)
    const botaoDeApagar = $('<button class="apagar"><i class="fas fa-trash"></i></button>')

    const novoProduto = $(`<li></li>`)
    
    carProductImg.appendTo(novoProduto)
    carProductName.appendTo(novoProduto)
    carPreco.appendTo(novoProduto)
    botaoDeApagar.appendTo(novoProduto)

    novoProduto.appendTo(listaProdutos)
}

function apagarDoCarrinho (qual) {
    const aApagar =$(qual).parent()
    const precoAApagar = parseFloat(aApagar.find('span').text())
    alteraSubTotal(-precoAApagar)
    aApagar.remove()
    
}

function alteraSubTotal (num) {
    const subTotal = $('.dropdown-content h4 span')

    console.log(num)
    
    custoAtual += num
    console.log(custoAtual)

    subTotal.text(`${custoAtual.toFixed(2)}`)
}