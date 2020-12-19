
 let counterTime;
 let blockTime;
 let resetCard;

 if(sessionStorage.getItem("sound")==="on") {
      $("#sound").html("<audio autoplay loop><source></source></audio>");
      $("#sound audio source").attr("src", "assets/sounds/ticking.mp3");
  }

  generateNewGame();

 $(document).ready(function() {
  $(".card").on("click", clickedCard);
  
  $(".nav-btn-newgame").on("click", resetGame);

  $(".restart-btn").on("click", resetGame);

   function resetGame() {
    clearInterval(resetCard);
    $(".card").off();
    removeOldClasses();
    generateNewGame();
    $(".game-over-modal").hide();
    $(".game-finished-modal").hide();
    $(".card").on("click", clickedCard);
    
}


}); //end of ready function

function clickedCard(){
      let points = parseInt(localStorage.getItem("points"));
      points--;
      localStorage.setItem("points", points);
      let id = this.id;
      $(this).off();
      
      //executed if no other card is flipped
      if(localStorage.getItem("clicks")==="0") {
          localStorage.setItem("clicks", "1");
          let arrayofclasses = this.className.split(" ");
          let accountforcopy = arrayofclasses[0].split("-");
          localStorage.setItem("lastcard", accountforcopy[0]);
          $(this).removeClass("card");
      } else if(localStorage.getItem("clicks")==="1") {  //executed if another card is already flipped
          $(".card").off();
          $(this).removeClass("card");
          localStorage.setItem("clicks", "0");
          let arrayofclasses2 = this.className.split(" ");
          let currentclass = arrayofclasses2[0].split("-");
          let findmatch = currentclass[0];
         
          // executed if match is found
          if(findmatch === localStorage.getItem("lastcard")) {
          let currentvalue = parseInt(localStorage.getItem("pairsleft"));
          currentvalue--;
          if(currentvalue === 0){
          $(".game-finished-modal").show();
          addFinalScore();
          blockTimer();
          addScores(parseInt(localStorage.getItem("points")));
          }
          localStorage.setItem("pairsleft", currentvalue);
          resetTimer();
          localStorage.setItem("lastcard", " ");
           $(".card").on("click", clickedCard);
          } else { //executed if no match is found
          resetCard = setTimeout(function() {
          $("#" + id).addClass("card");
          $("." + localStorage.getItem("lastcard")).addClass("card");  
          $("." + localStorage.getItem("lastcard")+"-copy").addClass("card");
          $(".card").on("click", clickedCard);
          localStorage.setItem("lastcard", " "); 
          }, 2000);
          }
      }
  }

function countDownTimer() {
  
  $("#timer").removeClass("yellow-timer");
  $("#timer").removeClass("red-timer");

  time = localStorage.getItem("time");

  counterTime = setInterval(function(){$("#timer").html(time + " SECONDS LEFT"); time--;  
  if(time < 12) {$("#timer").addClass("yellow-timer"); }
  if(time < 6) {$("#timer").addClass("red-timer"); }
  if(time <= 0) {$("#timer").hide(); $(".game-over-modal").show(); }
  }, 1000);
 
};

function resetTimer () {
    clearInterval(counterTime);
    countDownTimer();
}

function generateRandomClass () {
  let cardclasses = ["bell","bell-copy","snowglobe","snowglobe-copy","toy","toy-copy","pinetree", "pinetree-copy"
  ,"pinetreesnow","pinetreesnow-copy","present","present-copy","christmaspresent","christmaspresent-copy","giftbox", "giftbox-copy"];
  let idchooser = 1;
  let copyofcardclasses = cardclasses.slice();
  let numberofcards = 16;
  const initalclasses = 16;

  for(let i = 0; i < initalclasses; i++) {
    let currentclass = copyofcardclasses[Math.floor(Math.random() * (numberofcards))];
    $("#" + idchooser).addClass(currentclass);  
    $("#" + idchooser).addClass("card-flipped");  
    copyofcardclasses.splice(copyofcardclasses.indexOf(currentclass),1);
    idchooser++;
    numberofcards --;
  }
}

function addGeneralClass () {
    const initalclasses = 16;
    for(let i = 1; i <= initalclasses; i++) {
        $("#" + i).addClass("card");
    }
}

function removeOldClasses () {
    const initalclasses = 16;
    for(let i = 1; i <= initalclasses; i++) {
        $("#" + i).removeClass();
    }
}

function generateNewGame () {
 let setLevel = localStorage.getItem("level");
 setLevel === null ? localStorage.setItem("time", "40") : localStorage.setItem("time", setLevel)
 localStorage.setItem("clicks", "0");
 localStorage.setItem("pairsleft", "8");
 localStorage.setItem("lastcard", " ");
 localStorage.setItem("points", "100");
 generateRandomClass();
 addGeneralClass();
 clearInterval (blockTime);
 resetTimer();
 $("#timer").show();
}

function addFinalScore () {
    $(".game-finished-modal>h5").html("You finished the game with " + localStorage.getItem("points") + " points");
}

function blockTimer() {
 blockTime = setInterval(function(){
    resetTimer();
    }, 1000)
}



// code from the the emailjs documentation
function sendMail(form) {
     console.log("send mail")
     emailjs.send('default_service', 'template_fxoyyj6', {
       user_email: form.email.value,
       score: localStorage.getItem("points")
   })
    .then(function(response) {
       alert("You succesfully sent your score");
    }, function(error) {
       alert("An error occured");
    });
    return false;
  };


