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

  $(".card").click(function(){
      $(this).removeClass("card");
  });

}); //end of ready function


function countDownTimer() {
  
  $("#timer").removeClass("yellow-timer");
  $("#timer").removeClass("red-timer");

  time = localStorage.getItem("time");
  
  timerreturn = setInterval(function(){$("#timer").html(time + " SECONDS LEFT"); time--;  
  if(time < 12) {$("#timer").addClass("yellow-timer"); }
  if(time < 6) {$("#timer").addClass("red-timer"); }
  if(time < 0) {$("#timer").hide(); }
  }, 1000);
 
};

function generateRandomClass () {
  
  let cardclasses = ["bell","bell-copy","snowglobe","snowglobe-copy","toy","toy-copy","pinetree", "pinetree-copy"
  ,"pinetree-snow","pinetree-snow-copy","present","present-copy","christmaspresent","christmaspresent-copy","giftbox", "giftbox-copy"];
  let idchooser = 1;
  let copyofcardclasses = cardclasses.slice();
  let numberofcards = 16;
  let initalclasses = 16;

  for(let i = 0; i < initalclasses; i++) {
    let currentclass = copyofcardclasses[Math.floor(Math.random() * (numberofcards))];
    $("#" + idchooser).addClass(currentclass);  
    $("#" + idchooser).addClass("card-backside");  
    copyofcardclasses.splice(copyofcardclasses.indexOf(currentclass),1);
    console.log(currentclass);
    idchooser++;
    numberofcards --;
  }
}
generateRandomClass();

countDownTimer();

