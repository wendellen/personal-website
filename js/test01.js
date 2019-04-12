$(function(){

  var questions = ['What are you doing on your best day?,', 'What are you most passionate about?', 'Tell me about yourself.', 'Why are you looking for a new opportunity now?']

  var currentIndex = 0

  $('.questions').mousedown(function(){





  }).mouseup(function(){

    var textEl = $(this).find('div')
    textEl.text( questions[currentIndex % poem.length] )
    currentWordIndex++

  })

})
