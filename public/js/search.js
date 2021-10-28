function testUrl(string) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  if(!pattern.test(string)){
    console.log("invalid");
    return "";
  }
  let protocalIndex = string.indexOf('://');
  if (protocalIndex === -1) {
      string = `http://${string}`;
  };
  return string;
}

$( document ).ready(function() {
    $( "#searchterm" ).focus();
    $("#search").submit(function(e){
      e.preventDefault();
      let searchTerm = $("#searchterm").val();
      let url = testUrl(searchTerm);
      if(url !== ""){
        window.location.replace(url);
      }
      else{
        searchTerm = searchTerm.replace(" ", "+");
        window.location.replace(`https://www.google.com/search?q=${searchTerm}`);
      }
    });
    document.addEventListener('keypress', function(event) {
      let input = document.getElementById("searchterm");
      if(document.activeElement !== input){
        $('#searchterm').val($('#searchterm').val()+String.fromCharCode(event.which));
        input.focus();
    }
  });
});
