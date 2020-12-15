(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space
