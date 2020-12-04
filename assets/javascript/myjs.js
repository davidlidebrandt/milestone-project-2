
$( document ).ready(function() {
  $("#high-scores").click(function () {
     $(".hs-modal").show(500);
  }); 

   $("#how-to").click(function () {
     $(".hs-modal").show(500);
  }); 

  $(".close-btn").click(function(){
    $(this).parent().hide(500);
  });


}); //end of ready function