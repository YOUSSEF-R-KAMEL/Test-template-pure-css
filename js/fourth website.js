$(function(){


  $('.information .info-list li').on('click', function(){

    $(this).addClass('selected').siblings('li').removeClass('selected')
    $('.info-content div').hide();
    $( '.' + $(this).data('class')).fadeIn()
  })




// close Reload    
});