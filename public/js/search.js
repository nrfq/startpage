$( document ).ready(function() {
    $( "#searchterm" ).focus();
    $("#search").submit(function(e){
      e.preventDefault();
      let searchTerm = $("#searchterm").val().replace(" ", "+");
      window.location.replace(`https://www.google.com/search?q=${searchTerm}`);
    });
});
