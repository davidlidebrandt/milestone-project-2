let score = 100;

sessionStorage.setItem("sound", "off");

$(document).ready(function() {

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

 
    

 

function sendMail(form) {
     console.log("send mail")
     emailjs.send('service_ek6w4ip', 'template_fxoyyj6', {
       user_email: form.email.value,
       score: score,
   })
    .then(function(response) {
       alert("You succesfully sent your score");
    }, function(error) {
       alert("An error occured");
    });
    return false;
  
  };