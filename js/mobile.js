$(document).ready(function(){
  var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70   
  });

  document.querySelector('#panel').addEventListener('click', function(event) {
  if (slideout.isOpen()) {
    event.preventDefault();
    slideout.close();
  }
});

   // Toggle button
  document.querySelector('#menu-btn').addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    slideout.toggle();
  });

  $('.text-input').wrap('<div class="text-input-div"></div>');
  $( ".text-input" ).on("focus", function() {
     $(this).parent().addClass("text-input-focus");
  });
  $( ".text-input" ).on("focusout", function() {
     $(this).parent().removeClass("text-input-focus");
  });

  $(".second-menu-link" ).on("click", function() {
    $("#second-menu > li").removeClass('tabselected');
    $(this).parent().addClass('tabselected')
  });

        
        
        
});