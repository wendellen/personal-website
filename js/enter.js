$(function(){

  $('.mybutton').mouseover(function(){
    $(this).find('img').css({ transform: 'rotate(720deg)' })
  }).mouseout(function(){
    $(this).find('img').css({ transform: 'rotate(0deg)' })
  })

})
