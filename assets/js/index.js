

sessionStorage.setItem("sound", "off");

printScore();

$(document).ready(function() {

  $("#high-scores").click(function () {
     $(".hs-modal").show(500);
  }); 

   $("#how-to").click(function () {
     $(".ht-modal").show(500);
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

 
    

 





function addScores(score) {
    let temparray = [];

    for(let i = 1; i<6; i++) {
        temparray[i] = localStorage.getItem("score" + i)
        console.log(temparray[i]);

    }
    temparray.shift();
    console.log(temparray);
// This part was taken from an answer given by user "dy_" rergarding how to sort an array with bigger numbers https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
let numArray = new Int32Array(temparray);
numArray.sort();
numArray.reverse();
console.log(numArray);
console.log(numArray[0]);

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

printScore();

