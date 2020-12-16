
 let timerreturn;
 let blocktime;

 if(sessionStorage.getItem("sound")=="on") {
      $("#sound").html("<audio autoplay loop><source></source></audio>");
      $("#sound audio source").attr("src", "assets/sounds/ticking.mp3");
  }

  generateNewGame();

 $(document).ready(function() {

  $(".nav-btn-newgame").on("click", resetGame);

  $(".restart-btn").on("click", resetGame);

}); //end of ready function

function clickedCard(){
      let points = parseInt(localStorage.getItem("points"));
      points--;
      localStorage.setItem("points", points);
      let id = this.id;
      $(this).off();
      
      //executed if no other card is flipped
      if(localStorage.getItem("clicks")=="0") {
          localStorage.setItem("clicks", "1");
          let arrayofclasses = this.className.split(" ");
          let accountforcopy = arrayofclasses[0].split("-");
          localStorage.setItem("lastcard", accountforcopy[0]);
          $(this).removeClass("card");
          


      }
      //executed if another card is already flipped
      else if(localStorage.getItem("clicks")=="1") {
          $(".card").off();
          $(this).removeClass("card");
          localStorage.setItem("clicks", "0");
          let arrayofclasses2 = this.className.split(" ");
          let currentclass = arrayofclasses2[0].split("-");
          let findmatch = currentclass[0];
         
          // executed if match is found
          if(findmatch == localStorage.getItem("lastcard")) {
          let currentvalue = parseInt(localStorage.getItem("pairsleft"));
          currentvalue--;
          if(currentvalue == 0){
          $(".game-finished-modal").show();
          addFinalScore();
          blockTimer();
          addScores(parseInt(localStorage.getItem("points")));
          }
          localStorage.setItem("pairsleft", currentvalue);
          resetTimer();
          localStorage.setItem("lastcard", " ");
           $(".card").on("click", clickedCard);
          }
          //executed if no match is found
          else {
          setTimeout(function() {
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

  timerreturn = setInterval(function(){$("#timer").html(time + " SECONDS LEFT"); time--;  
  if(time < 12) {$("#timer").addClass("yellow-timer"); }
  if(time < 6) {$("#timer").addClass("red-timer"); }
  if(time < 0) {$("#timer").hide(); $(".game-over-modal").show(); }
  }, 1000);
 
};

function resetTimer () {
    clearInterval(timerreturn);
    countDownTimer();
}

function generateRandomClass () {
  let cardclasses = ["bell","bell-copy","snowglobe","snowglobe-copy","toy","toy-copy","pinetree", "pinetree-copy"
  ,"pinetreesnow","pinetreesnow-copy","present","present-copy","christmaspresent","christmaspresent-copy","giftbox", "giftbox-copy"];
  let idchooser = 1;
  let copyofcardclasses = cardclasses.slice();
  let numberofcards = 16;
  let initalclasses = 16;

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
    let initalclasses = 16;
    for(let i = 1; i <= initalclasses; i++) {
        $("#" + i).addClass("card");
    }
    $(".card").off();
}

function removeOldClasses () {
    let initalclasses = 16;
    for(let i = 1; i <= initalclasses; i++) {
        $("#" + i).removeClass();
    }
}

function generateNewGame () {
 localStorage.setItem("time", "40");
 localStorage.setItem("clicks", "0");
 localStorage.setItem("pairsleft", "8");
 localStorage.setItem("lastcard", " ");
 localStorage.setItem("points", "100");
 generateRandomClass();
 addGeneralClass();
 clearInterval(blocktime);
 resetTimer();
 $("#timer").show();
 $(".card").on("click", clickedCard);
}

function addFinalScore () {
    $(".game-finished-modal>h5").html("You finished the game with " + localStorage.getItem("points") + "points");
}

function blockTimer() {
    blocktime = setInterval(function(){
    resetTimer();
    }, 1000)
}

function sendMail(form) {
     console.log("send mail")
     emailjs.send('service_ek6w4ip', 'template_fxoyyj6', {
       user_email: form.email.value,
       score: localStorage.getItem("points")
   })
    .then(function(response) {
       alert("You succesfully sent your score" + response);
    }, function(error) {
       alert("An error occured" + error);
    });
    return false;
  
  };

  function addScores(score) {
    let temparray = [];

    for(let i = 1; i<6; i++) {
        temparray[i] = localStorage.getItem("score" + i)
    }
    temparray.shift();
// This part was taken from an answer given by user "dy_" rergarding how to sort an array with bigger numbers https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
let numArray = new Int32Array(temparray);
numArray.sort();
numArray.reverse();

if(score > numArray[4]) {
    numArray[4] = score;
    numArray.sort();
    numArray.reverse();
    console.log(numArray);
}

for(let i = 1, j = 0; i < 6; i++, j++) {
    localStorage.setItem("score" + i, numArray[j]);
    console.log(localStorage.getItem("score" + i));
}

printScore();

}

function printScore() {
    
    let temparray = [];

    for(let i = 1, j =0; i<6; i++, j++) {
        temparray[j] = localStorage.getItem("score" + i)
        console.log(temparray[j]);

    }

    let numArray = new Int32Array(temparray);
    numArray = numArray.sort();
    numArray = numArray.reverse();
    
    for(let i = 1, j=0; i <= numArray.length; i++, j++) {
        $("#score"+i).html(numArray[j]);
    }
}

function resetGame() {
  removeOldClasses();
  generateNewGame();
  $(".game-over-modal").hide();
  $(".game-finished-modal").hide();
}
