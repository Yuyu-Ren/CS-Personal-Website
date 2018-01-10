(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


function getTime() {
  var currentDate = new Date();
  document.getElementById('time').innerHTML = currentDate;
}
setInterval(getTime, 1000);



