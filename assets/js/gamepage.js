 localStorage.setItem("time", "40");
 localStorage.setItem("clicks", "0");
 localStorage.setItem("pairsleft", "8");
 localStorage.setItem("lastcard", " ");
 localStorage.setItem("points", "100");

 let timerreturn;

 if(sessionStorage.getItem("sound")=="on") {
      $("#sound").html("<audio autoplay loop><source></source></audio>");
      $("#sound audio source").attr("src", "assets/sounds/ticking.mp3");
  }

  generateNewGame();

 $(document).ready(function() {
 
  $(".card").on("click", clickedCard);

  $(".nav-btn-newgame").click(function() {
  removeOldClasses();
  generateNewGame();
  $(".game-over-modal").hide();
  });

}); //end of ready function

function clickedCard(){
      let points = parseInt(localStorage.getItem("points"));
      points--;
      localStorage.setItem("points", points);
      let id = this.id;
      $(this).off();
      
      //executed if no other card is flipped
      if(localStorage.getItem("clicks")=="0") {
          console.log(localStorage.getItem("clicks"))
          localStorage.setItem("clicks", "1");
          //console.log(this.className);
          let arrayofclasses = this.className.split(" ");
          console.log(arrayofclasses);
          let accountforcopy = arrayofclasses[0].split("-");
          console.log(accountforcopy[0]);
          localStorage.setItem("lastcard", accountforcopy[0]);
          $(this).removeClass("card");
          


      }
      //executed if another card is already flipped
      else if(localStorage.getItem("clicks")=="1") {
           $(".card").off();
        console.log("inside else if statement")
        console.log(localStorage.getItem("clicks"))
          $(this).removeClass("card");
          console.log(this.className);
          localStorage.setItem("clicks", "0");
          let arrayofclasses2 = this.className.split(" ");
          console.log(arrayofclasses2);
          let currentclass = arrayofclasses2[0].split("-");
          let findmatch = currentclass[0];
          console.log(findmatch);
          console.log(localStorage.getItem("lastcard"));
          
          // executed if match is found
          if(findmatch == localStorage.getItem("lastcard")) {
          let currentvalue = parseInt(localStorage.getItem("pairsleft"));
          currentvalue--;
          console.log(currentvalue + " pairs of cards left");
          if(currentvalue == 0){
          $(".game-finished-modal").show();
          }
          localStorage.setItem("pairsleft", currentvalue);
          console.log(localStorage.getItem("pairsleft"));
          resetTimer();
          localStorage.setItem("lastcard", " ");
          console.log(localStorage.getItem("clicks"));
          console.log(localStorage.getItem("lastcard"));
           $(".card").on("click", clickedCard);
          }
          //executed if no match is found
          else {
          console.log(this.className);
          console.log(this.id);
         
          
          setTimeout(function() {
          $("#" + id).addClass("card");
          $("." + localStorage.getItem("lastcard")).addClass("card");  
          $("." + localStorage.getItem("lastcard")+"-copy").addClass("card");
         
          $(".card").on("click", clickedCard);
          localStorage.setItem("lastcard", " "); 
          console.log(localStorage.getItem("clicks"))
          console.log(localStorage.getItem("lastcard"))

          
          
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
    //console.log(currentclass);
    idchooser++;
    numberofcards --;
  }
}

function addGeneralClass () {
    let initalclasses = 16;
    for(let i = 1; i <= initalclasses; i++) {
        $("#" + i).addClass("card");
    }
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
 resetTimer();
 $("#timer").show();
}

function sendMail(form) {
     console.log("send mail")
     emailjs.send('service_ek6w4ip', 'template_fxoyyj6', {
       user_email: form.email.value,
       score: score,
   })
    .then(function(response) {
       alert("You succesfully sent your score" + response);
    }, function(error) {
       alert("An error occured" + error);
    });
    return false;
  
  };

