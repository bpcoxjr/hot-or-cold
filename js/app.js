
$(document).ready(function(){
	//First, generate a random number between 1 and 100


	var randomNum = Math.ceil(Math.random() * 100);
	console.log('randomNum: ' + randomNum);

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	//New game begins by taking a guess from the user and storing in the variable "guess", 
	//which is then parsed(converted from string to integer)

	var guess;
	var counter = 0;



	$('#guessButton').click(function(){
		guess = $('#userGuess').val();
		guess = parseInt(guess);
		counter++;
		console.log(counter);
		$('span').text(counter);


		//checks that user input is greater than 1 and less than 100, and if so, runs function hotorcold
	if (guess % 1 === 0 && guess >= 1 && guess <=100){
		hotorcold(guess);
	}
	//if user inputs number not between 1 and 100 they are alerted to try again
	else {
		alert("The number you enter must be between 1 and 100! Try again!");
			$('.user-input').val ("")
	}
	});

	var lastGuess;

	function hotorcold(guess) {
		
		if (guess > 100) return;
			$('#guessList').append("<li>" + guess + "</li>");
			console.log(guess);

			var compareNum = Math.abs(guess - randomNum);
			console.log(compareNum);

			//Cold & warm logic	
			if (compareNum >= 50) {
				$('#feedback h2').text("Ice cold!");
			}

			else if (compareNum >= 30) {
				$('#feedback h2').text("Pretty cold!");
			}

			else if (compareNum >= 20) {
				$('#feedback h2').text("Warm-ish!");
			}

			else if (compareNum >= 10) {
				$('#feedback h2').text("Warm!");
			}

			else if (compareNum > 1) {
				$('#feedback h2').text("Hot!");
			}
			else if (guess == randomNum) {
				$('#feedback h2').text("You got it!");
				$('#feedback h3').text("");
                return; // we can escape out of the function now
			}

				//Colder & warmer logic
		if(lastGuess !== undefined) { //second guess onward
<<<<<<< HEAD
<<<<<<< HEAD
			var currentGuessDistance = compareNum; //just a pointer variable to make this more legible.
			var lastGuessDistance = Math.abs(lastGuess-randomNum);
			console.log('guess: ' + guess);
			console.log('lastGuess: ' + lastGuess);
			console.log('lastGuessDistance ' + lastGuessDistance);
			console.log('currentGuessDistance ' + currentGuessDistance);
			if (lastGuess === guess) {
				alert("You just guessed that! Try again!");
				$('.user-input').val ("");
			}
=======
=======
>>>>>>> eab04a18545f11bfa6cb6517d5bc2266d8ffd1ab
            var currentGuessDistance = compareNum; // just a pointer variable to make things more legible. could just use compareNum instead
            var lastGuessDistance = Math.abs(lastGuess - randomNum);
            console.log('guess: ' + guess);
            console.log('lastGuess: ' + lastGuess);
            console.log('lastGuessDistance: ' + lastGuessDistance);
            console.log('currentGuessDistance: ' + currentGuessDistance);
            if (lastGuess === guess) {
    			alert("You just guessed that! Try again!");
    			$('.user-input').val ("");
            }
<<<<<<< HEAD
>>>>>>> eab04a18545f11bfa6cb6517d5bc2266d8ffd1ab
=======
>>>>>>> eab04a18545f11bfa6cb6517d5bc2266d8ffd1ab
			else if (currentGuessDistance < lastGuessDistance) {
				$('#feedback h3').text("You're getting warmer!");
			}
			else { 
				$('#feedback h3').text("You're getting colder!");
			}
		} else { //first guess 
				$('#feedback h3').text("");
			}

			$('#feedback h3').show();

		lastGuess = guess;
	};
	//game reset function
	$('.new').click(function(){
		location.reload();
	});
});
	