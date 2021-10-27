$( document ).ready(function() {
    $( "#searchterm" ).focus();
    $("#search").submit(function(e){
      e.preventDefault();
      let searchTerm = $("#searchterm").val().replace(" ", "+");
      window.location.replace(`https://www.google.com/search?q=${searchTerm}`);
    });
    document.addEventListener('keydown', function(event) {
      let input = document.getElementById("searchterm");
      if(document.activeElement !== input){
        input.focus();
    }
  });
});
