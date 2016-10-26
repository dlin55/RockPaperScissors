var chosenOne
//function: randomPick
var randomInt;
var randomChoose;
function randomPick(){
 randomInt = Math.random();
 if(randomInt < 0.34){
  randomChoose = "Rock";
    document.getElementById("computerChoice").innerHTML = randomChoose;
 }
 else if(randomInt > 0.34 && randomInt < 0.67){
  randomChoose = "Paper";
  document.getElementById("computerChoice").innerHTML = randomChoose;
 }
 else{
  randomChoose = "Scissors";
  document.getElementById("computerChoice").innerHTML = randomChoose;
 }
}
//function: winCheck
 var winCheck = function(chosenOne,randomChoose) {
            if (chosenOne === randomChoose) {
                return "Draw!";
            }
            if (chosenOne === "Rock") {
                if (randomChoose === "Scissors") {
                    // rock wins
                    return "Win";
                } else {
                    // paper wins
                    return "Lose";
                }
            }
            if (chosenOne === "Paper") {
                if (randomChoose === "Rock") {
                    // paper wins
                    return "Win";
                } else {
                    // scissors wins
                    return "Lose";
                }
            }
            if (chosenOne === "Scissors") {
                if (randomChoose === "Rock") {
                    // rock wins
                    return "Lose";
                } else {
                    // scissors wins
                    return "Win";
                }
            }
        };
//function: gameCount
var winCount = 0;
var loseCount = 0;
var drawCount = 0;
function gameCount(){
 if (winCheck(chosenOne,randomChoose) == "Win"){
  winCount += 1;
  document.getElementById("winCount").innerHTML = winCount;
  }
  else if(winCheck(chosenOne,randomChoose) == "Lose"){
 loseCount += 1;
 document.getElementById("loseCount").innerHTML = loseCount;
  }
  else{
   drawCount +=1;
   document.getElementById("drawCount").innerHTML = drawCount;
  }
}


//function: throwPaper
function throwPaper(){
chosenOne = "Paper";
randomPick();
gameCount();
}
//function: throwScissors
function throwScissors(){
chosenOne = "Scissors";
randomPick();
gameCount();
}
//function: throwRock
function throwRock(){
chosenOne = "Rock";
randomPick();
gameCount();
}

document.getElementById("paperButton").addEventListener("click",throwPaper);
document.getElementById("scissorButton").addEventListener("click",throwScissors);
document.getElementById("rockButton").addEventListener("click",throwRock);