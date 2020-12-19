function addScores(score) {
    let tempArray = [];

    for(let i = 1; i<6; i++) {
        tempArray[i] = localStorage.getItem("score" + i)
    }
    tempArray.shift();
// This part was taken from an answer given by user "dy_" rergarding how to sort an array with bigger numbers https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
let numArray = new Int32Array(tempArray);
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
    
    let tempArray = [];

    for(let i = 1, j =0; i<6; i++, j++) {
        tempArray[j] = localStorage.getItem("score" + i)
    }

    let numArray = new Int32Array(tempArray);
    numArray = numArray.sort();
    numArray = numArray.reverse();
    
    for(let i = 1, j=0; i <= numArray.length; i++, j++) {
        if(!(numArray[j] === 0))
        $("#score"+i).html(numArray[j]);
    }
}

printScore();