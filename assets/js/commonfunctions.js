function addScores(score) {
    let tempArray = [];

    for(let i = 1; i<6; i++) {
        tempArray[i] = localStorage.getItem(`score${i}`)
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
    localStorage.setItem(`score${i}`, numArray[j]);
    console.log(localStorage.getItem(`score${i}`));
}

printScore();

}

function printScore() {
    
    let tempArray = [];
    let numberOfScores = 5;

    for(let i = 1, j =0; i<=numberOfScores; i++, j++) {
        tempArray[j] = localStorage.getItem(`score${i}`)
    }

    let numArray = new Int32Array(tempArray);
    numArray = numArray.sort();
    numArray = numArray.reverse();
    
    for(let i = 1, j=0; i <= numArray.length; i++, j++) {
        if(!(numArray[j] === 0))
        $(`#score${i}`).html(`${numArray[j]} points`);
    }
}

function getAndPrintUsers() {
    let showHowMany = 5;
    for(let i = 1; i <= showHowMany; i++){
        $(`#val-${i}`).html("");
    }
    let saveUser = [];
    let multiArr = [];
db.collection("user_points").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    saveUser.push(doc.data());
    });
     for(let i = 0; i < saveUser.length; i++) {
                multiArr.push([saveUser[i].user_name, saveUser[i].user_points]);
            }
    // sort function (first two lines) was taken from the post by user "Nosredna" https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
    multiArr.sort(function(a, b) {
    return a[1] - b[1]; });
    multiArr.reverse();
    let tempArr = multiArr.slice(0,5);
    console.log(multiArr);
    for(let i = 0, k = 1; i < tempArr.length; i++, k++) {   
        $(`#val-${k}`).append(`${tempArr[i][0]} with ${tempArr[i][1]} points`);}
}); }

