$(document).ready(function () {
    console.log('funcionou')

    $('#carrosel').slick({
        autoplay:false
    })

    $('#hamburguer').on('click', function() {
        $('nav').slideToggle().css('display', 'flex');
    })

    $('.dropdown-button').on('click', function() {
        $('.dropdown-content').slideToggle().css('display', 'flex');
    })
})