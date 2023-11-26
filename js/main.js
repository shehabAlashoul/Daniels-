let sectionTop = $('#about').offset().top
console.log(sectionTop);
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop()
    if (scrollTop >= sectionTop) {
        $('.navbar').css('background-color','teal')
        $('.iconUp').fadeIn(3000)
    }else{
        $('.navbar').css('background-color','white')
        $('.iconUp').fadeOut(3000)
    }
})
$('iconUp').click(function(){
    $('body,html').animate({scrollTop:0 }, 3000)
})
