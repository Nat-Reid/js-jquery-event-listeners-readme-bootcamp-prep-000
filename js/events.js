//define functions here

$(document).ready(function(){

// call functions here

});
function getIt(){
  $('p').on('click', function(e){
    alert("Hey!");
  });
}
function frameIt(){
  $('img').on("load", function(e){
    this.class = "tasty";
  });
}

