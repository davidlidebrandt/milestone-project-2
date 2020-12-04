
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

  $("#sound-btn").click(function() {
     if($(this).hasClass("off-btn")) {
         $(this).addClass("on-btn");
         $(this).removeClass("off-btn");
         $(".circle-on").addClass("circle-off");
         $(".circle-off").removeClass("circle-on");
     }

      else if($(this).hasClass("on-btn")) {
         $(this).addClass("off-btn");
         $(this).removeClass("on-btn");
         $(".circle-off").addClass("circle-on");
         $(".circle-on").removeClass("circle-off");
     }
  });


}); //end of ready function