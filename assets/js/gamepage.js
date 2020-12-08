 localStorage.setItem("time", "20")

 let timerreturn;
 
 $(document).ready(function() {
 
 if(sessionStorage.getItem("sound")=="on") {
      $("#sound").html("<audio autoplay loop><source></source></audio>");
      $("#sound audio source").attr("src", "assets/sounds/ticking.mp3");

  }
//placeholder method for restarting the timer
  $("#timer").click(function(){
     clearInterval(timerreturn);
     countDownTimer();
  });

}); //end of ready function


function countDownTimer() {
  
  $("#timer").removeClass("yellow-timer");
  $("#timer").removeClass("red-timer");

  time = localStorage.getItem("time");
  
  timerreturn = setInterval(function(){$("#timer").html(time + " SECONDS LEFT"); time--;  
  if(time < 12) {$("#timer").addClass("yellow-timer"); }
  if(time < 6) {$("#timer").addClass("red-timer"); }
  if(time < 0){$("#timer").hide(); } 
  }, 1000);
 
};

countDownTimer();

