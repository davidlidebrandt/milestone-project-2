
let counterTime;
let blockTime;
let resetCard;

generateNewGame();

$(document).ready(function () {

    $("#timer").html(time + " SECONDS LEFT");

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
        $("#timer").html(time + " SECONDS LEFT");
    }

}); //end of ready function

function clickedCard() {
    if (sessionStorage.getItem("sound") === "on") {
        $("#click-sound").html("<audio autoplay><source></source></audio>");
        $("#click-sound audio source").attr("src", "assets/sounds/clicking.mp3");
    }

    let points = parseInt(localStorage.getItem("points"));
    points--;
    localStorage.setItem("points", points);
    let id = this.id;
    $(this).off();

    //executed if no other card is shown
    if (localStorage.getItem("clicks") === "0") {
        localStorage.setItem("clicks", "1");
        let arrayofclasses = this.className.split(" ");
        let accountforcopy = arrayofclasses[0].split("-");
        localStorage.setItem("lastcard", accountforcopy[0]);
        $(this).removeClass("card");
    } else if (localStorage.getItem("clicks") === "1") {  //executed if another card is already shown
        $(".card").off();
        $(this).removeClass("card");
        localStorage.setItem("clicks", "0");
        let arrayofclasses2 = this.className.split(" ");
        let currentclass = arrayofclasses2[0].split("-");
        let findmatch = currentclass[0];

        // executed if match is found
        if (findmatch === localStorage.getItem("lastcard")) {
            let currentvalue = parseInt(localStorage.getItem("pairsleft"));
            currentvalue--;
            if (currentvalue === 0) {
                $(".game-finished-modal").show();
                addFinalScore();
                blockTimer();
                addScores(parseInt(localStorage.getItem("points")));
            } else {
                localStorage.setItem("pairsleft", currentvalue);
                resetTimer();
                localStorage.setItem("lastcard", " ");
                $(".card").on("click", clickedCard);
            }
        } else { //executed if no match is found
            resetCard = setTimeout(function () {
                $(`#${id}`).addClass("card");
                $(`.${localStorage.getItem("lastcard")}`).addClass("card");
                $(`.${localStorage.getItem("lastcard")}-copy`).addClass("card");
                $(".card").on("click", clickedCard);
                localStorage.setItem("lastcard", " ");
            }, 2000);
        }
    }
}

function countDownTimer() {

    $("#timer").removeClass("yellow-timer");
    $("#timer").removeClass("red-timer");
    time = sessionStorage.getItem("time");

    counterTime = setInterval(function () {
        $("#timer").html(time + " SECONDS LEFT"); time--;
        if (time < 12 && time >= 6) { $("#timer").addClass("yellow-timer"); }
        if (time < 6) { $("#timer").addClass("red-timer"); }
        if (time < 0) { $(".game-over-modal").show(); blockTimer(); }
    }, 1000);

}

function resetTimer() {
    clearInterval(counterTime);
    countDownTimer();
}

function blockTimer() {
    clearInterval(counterTime);
}

function generateRandomClass() {
    let cardclasses = ["bell", "bell-copy", "snowglobe", "snowglobe-copy", "toy", "toy-copy", "pinetree", "pinetree-copy",
         "pinetreesnow", "pinetreesnow-copy", "present", "present-copy", "christmaspresent", "christmaspresent-copy", "giftbox", "giftbox-copy"];
    let idchooser = 1;
    let copyofcardclasses = cardclasses.slice();
    let numberofcards = 16;
    const initalclasses = 16;

    for (let i = 0; i < initalclasses; i++) {
        let currentclass = copyofcardclasses[Math.floor(Math.random() * (numberofcards))];
        $(`#${idchooser}`).addClass(currentclass);
        $(`#${idchooser}`).addClass("card-flipped");
        copyofcardclasses.splice(copyofcardclasses.indexOf(currentclass), 1);
        idchooser++;
        numberofcards--;
    }
}

function addGeneralClass() {
    const initalclasses = 16;
    for (let i = 1; i <= initalclasses; i++) {
        $(`#${i}`).addClass("card");
    }
}

function removeOldClasses() {
    const initalclasses = 16;
    for (let i = 1; i <= initalclasses; i++) {
        $(`#${i}`).removeClass();
    }
}

function generateNewGame() {
    let setLevelTime = sessionStorage.getItem("levelTime");
    let setLevelPoints = sessionStorage.getItem("levelPoints");
    let timeOp = setLevelTime === null ? sessionStorage.setItem("time", "40") : sessionStorage.setItem("time", setLevelTime);
    let pointOp = setLevelPoints === null ? localStorage.setItem("points", "300") : localStorage.setItem("points", setLevelPoints);
    localStorage.setItem("clicks", "0");
    localStorage.setItem("pairsleft", "8");
    localStorage.setItem("lastcard", " ");
    generateRandomClass();
    addGeneralClass();
    resetTimer();
}

function addFinalScore() {
    $(".game-finished-modal>h5").html(`You finished the game with ${localStorage.getItem("points")} points`);
}

// code from the the emailjs documentation
function sendMail(form) {
    emailjs.send('default_service', 'template_fxoyyj6', {
        user_email: form.email.value,
        score: localStorage.getItem("points")
    })
        .then(function (response) {
            alert("You succesfully sent your score ", response.text);
        }, function (error) {
            alert("An error occured", error);
        });
    return false;
}

function sendScore(form) {
    // from the firebase/firestore documentation on how to write data to the database
    db.collection("user_points").add({
        user_name: form.user.value,
        user_points: localStorage.getItem("points")
    })
        .then(function (docRef) {
            alert("Your score was sent", docRef.id);
        })
        .catch(function (error) {
            alert("Error sending your score: ", error);
        });
    return false;
}


