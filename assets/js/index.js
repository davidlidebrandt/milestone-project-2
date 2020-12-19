
sessionStorage.setItem("sound", "off");

$(document).ready(function() {

  $("#btn-easy").click(function(){
  localStorage.setItem("level", "60");
  });  

   $("#btn-medium").click(function(){
  localStorage.setItem("level", "40");
  });  

   $("#btn-hard").click(function(){
  localStorage.setItem("level", "20");
  });  

  $("#high-scores").click(function () {
     $(".hs-modal").show(500);
  }); 

   $("#how-to").click(function () {
     $(".ht-modal").show(500);
  }); 

  $(".close-btn").click(function(){
    $(".hs-modal").hide(500);
    $(".ht-modal").hide(500);
  });

  $("#sound-btn").click(function() {
     
    if($(this).hasClass("off-btn")) {
         $(this).addClass("on-btn");
         $(this).removeClass("off-btn");
         $(".circle-off").addClass("circle-on");
         $(".circle-on").removeClass("circle-off");
         sessionStorage.setItem("sound", "on");
         console.log(sessionStorage.getItem("sound"));
     }

      else if($(this).hasClass("on-btn")) {
         $(this).addClass("off-btn");
         $(this).removeClass("on-btn");
         $(".circle-on").addClass("circle-off");
         $(".circle-off").removeClass("circle-on");
         sessionStorage.setItem("sound", "off");
         console.log(sessionStorage.getItem("sound"));
     }
  });
}); //end of ready function

 
    

 





