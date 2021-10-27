$( document ).ready(function() {
    $( "#searchterm" ).focus();
    $("#search").submit(function(e){
      e.preventDefault();
      let searchTerm = $("#searchterm").val().replace(" ", "+");
      window.location.replace(`https://www.google.com/search?q=${searchTerm}`);
    });
    document.addEventListener('keypress', function(event) {
      let input = document.getElementById("searchterm");
      if(document.activeElement !== input){
        $('#searchterm').val($('#searchterm').val()+String.fromCharCode(event.which));
        input.focus();
    }
  });
});
