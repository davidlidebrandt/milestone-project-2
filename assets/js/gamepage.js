
let counterTime;
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
    let id = this.id;
    
    points--;
    localStorage.setItem("points", points);
    $(this).off();

    //executed if no other card is shown
    if (localStorage.getItem("clicks") === "0") {
        localStorage.setItem("clicks", "1");
        let arrayOfClasses = this.className.split(" ");
        let accountForCopy = arrayOfClasses[0].split("-");
        localStorage.setItem("lastCard", accountForCopy[0]);
        $(this).removeClass("card");
    } else if (localStorage.getItem("clicks") === "1") {  //executed if another card is already shown
        $(".card").off();
        $(this).removeClass("card");
        localStorage.setItem("clicks", "0");
        let arrayOfClasses2 = this.className.split(" ");
        let currentClass = arrayOfClasses2[0].split("-");
        let findMatch = currentClass[0];

        // executed if match is found
        if (findMatch === localStorage.getItem("lastCard")) {
            let currentValue = parseInt(localStorage.getItem("pairsLeft"));
            currentValue--;
            if (currentValue === 0) {
                $(".game-finished-modal").show();
                addFinalScore();
                blockTimer();
                addScores(parseInt(localStorage.getItem("points")));
            } else {
                localStorage.setItem("pairsLeft", currentValue);
                resetTimer();
                localStorage.setItem("lastCard", " ");
                $(".card").on("click", clickedCard);
            }
        } else { //executed if no match is found
            resetCard = setTimeout(function () {
                $(`#${id}`).addClass("card");
                $(`.${localStorage.getItem("lastCard")}`).addClass("card");
                $(`.${localStorage.getItem("lastCard")}-copy`).addClass("card");
                $(".card").on("click", clickedCard);
                localStorage.setItem("lastCard", " ");
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
    let idChooser = 1;
    let copyOfCardClasses = cardclasses.slice();
    let numberOfCards = 16;
    const initalClasses = 16;

    for (let i = 0; i < initalClasses; i++) {
        let currentClass = copyOfCardClasses[Math.floor(Math.random() * (numberOfCards))];
        $(`#${idChooser}`).addClass(currentClass);
        $(`#${idChooser}`).addClass("card-flipped");
        copyOfCardClasses.splice(copyOfCardClasses.indexOf(currentClass), 1);
        idChooser++;
        numberOfCards--;
    }
}

function addGeneralClass() {
    const initalClasses = 16;
    for (let i = 1; i <= initalClasses; i++) {
        $(`#${i}`).addClass("card");
    }
}

function removeOldClasses() {
    const initalClasses = 16;
    for (let i = 1; i <= initalClasses; i++) {
        $(`#${i}`).removeClass();
    }
}

function generateNewGame() {
    const setLevelTime = sessionStorage.getItem("levelTime");
    const setLevelPoints = sessionStorage.getItem("levelPoints");
    
    if (setLevelTime === null && setLevelPoints === null) {
        sessionStorage.setItem("time", "40");
        localStorage.setItem("points", "300");
    } else { 
        sessionStorage.setItem("time", setLevelTime); localStorage.setItem("points", setLevelPoints); }

    localStorage.setItem("clicks", "0");
    localStorage.setItem("pairsLeft", "8");
    localStorage.setItem("lastCard", " ");
    generateRandomClass();
    addGeneralClass();
    resetTimer();
}

function addFinalScore() {
    $(".game-finished-modal>h5").html(`You finished the game with ${localStorage.getItem("points")} points`);
}

//code from toastr documentation on how to center their elements
toastr.options = {
    positionClass: 'toast-top-center'
};

// basic structure came from the the emailjs documentation
function sendMail(form) {
    emailjs.send('default_service', 'template_fxoyyj6', {
        user_email: form.email.value,
        score: localStorage.getItem("points")
    })
        //notifications from toastr
        .then(function (response) {
            toastr.success("Your score was successfully sent", response.text);
        }, function (error) {
            toastr.error("An error occured", error);
        });
    return false;
}

// basic structure came from the firebase/firestore documentation
function sendScore(form) {
    db.collection("user_points").add({
        user_name: form.user.value,
        user_points: localStorage.getItem("points")
    })
        //notifications from toastr
        .then(function (docRef) {
            toastr.success("Your score was successfully sent", docRef.id);
        })
        .catch(function (error) {
            toastr.error("An error occured", error);
        });
    return false;
}
