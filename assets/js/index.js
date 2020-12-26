
sessionStorage.setItem("sound", "off");

$(document).ready(function() {

  $("#btn-easy").click(function(){
  sessionStorage.setItem("levelTime", "60");
  sessionStorage.setItem("levelPoints", "240");
  });  

   $("#btn-medium").click(function(){
  sessionStorage.setItem("levelTime", "40");
  sessionStorage.setItem("levelPoints", "300");
  });  

   $("#btn-hard").click(function(){
  sessionStorage.setItem("levelTime", "20");
  sessionStorage.setItem("levelPoints", "360");
  });  

  $("#high-scores").click(function () {
    printScore();
    $(".hs-modal").show(300);
  }); 

  $("#leader-board").click(function () {
    getAndPrintUsers();
    $(".lb-modal").show(300);
  }); 

  $("#how-to").click(function () {
     $(".ht-modal").show(300);
  }); 

  $(".close-btn").click(function(){
    $(".hs-modal").hide(300);
    $(".ht-modal").hide(300);
    $(".lb-modal").hide(300);
  });

  $("#sound-btn").click(function() {
     
    if($(this).hasClass("off-btn")) {
         $(this).addClass("on-btn");
         $(this).removeClass("off-btn");
         $(".circle-off").addClass("circle-on");
         $(".circle-on").removeClass("circle-off");
         sessionStorage.setItem("sound", "on");
     }

      else if($(this).hasClass("on-btn")) {
         $(this).addClass("off-btn");
         $(this).removeClass("on-btn");
         $(".circle-on").addClass("circle-off");
         $(".circle-off").removeClass("circle-on");
         sessionStorage.setItem("sound", "off");
     }
  });
}); //end of ready function

 
    

 





