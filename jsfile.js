//this is the array of all the squares inside the big grid(9squares)
var arrayOfSquares = document.querySelectorAll(".square");
var theMole;

var timeRemaining;
var theInterval;
var highest_score = 0;



function bigGame() {
  var yourScore = 0;
  timeRemaining = prompt("how long you want to play");
  $("#time-left").text(timeRemaining);


  //this function wont be executed now but later inside molePerSec()
  function randomSquare() {
    arrayOfSquares.forEach(e => {
      $(e).removeClass("mole")
      // we begin by cleaning the old selected square if there was a one before
    });
    //then generate a random square and give it the class mole so that it contains mole img
    theMole = arrayOfSquares[Math.floor(Math.random() * 9)];
    $(theMole).addClass("mole");
  }




  //molePerSec creates random square every interval of time and decreases time until time =0; it removes listeners from squares saves highest score if there is a highest score
  // this function isnt executed yet also just wait a lil bit more
  function molePerSec() {
    theInterval = setInterval(
      function() {

        randomSquare();
        timeRemaining -= 0.38;
        $("#time-left").text(Math.round(timeRemaining));


        if (timeRemaining < 0) {
          if (yourScore > highest_score) {
            highest_score = yourScore;
            alert("Congatulations! You Got a New HighScore! HighScore: "+highest_score)

          }
          else{
          alert("Game Over, Well Played Your Score is "+yourScore)}
          arrayOfSquares.forEach(e => $(e).unbind())
          
          $('#highest').text(highest_score)

          clearInterval(theInterval)




        }




      }

      , 380)
  }

  // first thing to be executed is this .forEach function that creates an even listener on all squares and if square moused down equals the mole
  //score is ++ and score html text is updated .
  arrayOfSquares.forEach(e => $(e).mousedown(function() {
    if (e === theMole) {
      $("#myAudio")[0].play();
      yourScore++
      $("#score").text(yourScore)





    }
  }))

  // now we execute the molePerSec.
  molePerSec();
}
// big game is the main function i did it so i can restart the game otherwise i wouldnt have created it. hope u like this small game.<3
bigGame()
