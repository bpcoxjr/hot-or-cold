
$(document).ready(function(){
//First, generate a random number between 1 and 100

var randomNum = Math.ceil(Math.random() * 100);
console.log(randomNum);
	

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

//New game begins by taking a guess from the user and storing in the variable "guess", which is then parsed(converted from string to integer)

var guess;
var counter = 0;



$('#guessButton').click(function(){
	//alert("Here");
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


	var compareNumNew;
	var compareNumOld = 99999;

	function hotorcold(guess) {
		
		if (guess <= 100) {
			$('#guessList').append("<li>" + guess + "</li>");
			console.log(guess);
			compareNumOld = compareNumNew;
			compareNumNew = guess;

			var compareNum = Math.abs(guess - randomNum);
			console.log(compareNum);
			//Cold & warm logic	
			if (compareNum >= 50) {
				$('#feedback').html("<h2>" + "Ice cold!" + "</h2>");
			}

			else if (compareNum >= 30 && compareNum < 50) {
				$('#feedback').html("<h2>" + "Pretty cold!" + "</h2>");
			}

			else if (compareNum >= 20 && compareNum <30) {
				$('#feedback').html("<h2>" + "Warm-ish!" + "</h2>");
			}

			else if (compareNum >= 10 && compareNum < 20) {
				$('#feedback').html("<j2>" + "Warm!" + "</h2>");
			}

			else if (compareNum > 1 && compareNum <= 10) {
				$('#feedback').html("<h2>" + "Hot!" + "</h2>");
			}
			else if (guess == randomNum) {
				$('#feedback').html("<h2>" + "You got it!" + "</h2>");
			}
			//Colder & warmer logic
			if (compareNumOld !== 99999) {
			
			//alert(compareNumOld);
			//alert(compareNumNew - guess);
				if ((compareNumNew - guess) > (compareNumOld - guess)) {
					$('#feedback').append("<h3>" + "You're getting warmer!" + "</h3>");
				}
				else {
					$('#feedback').append("<h3>" + "You're getting colder!" + "</h3>");
				}
			}
		}
		
	};

	$('.new').click(function(){
		location.reload();
	});
});
	