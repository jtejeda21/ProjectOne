//load game at start up
window.onload = function() {

//Strech goal is to load multiple words
var boardword = document.getElementsByClassName("dubs");
	for (var a = 0; a < boardword.length; a++){
		// console.log(boardword[a].class);
	}
var dupword = false;
var wordWin = ['W','A','R','R','I','O','R','S'];
var players = [1];
var youlose = [];


//Grabbed all available letter and added click event
var alphabet = document.getElementsByClassName("letter-strike");
	// console.log(alphabet);
	// console.log(alphabet[0]);
	for (var i = 0; i < alphabet.length; i++) {
    	alphabet[i].addEventListener('click', getUsersLetter);
	};

//Grabbing user's letter
function getUsersLetter(){
	var user_letter = this.innerHTML;
	// console.log(user_letter);
	checkIfCorrect(user_letter);
};

//Checking user letter to winning word.
function checkIfCorrect(user_letter){
	for (var i = 0; i < wordWin.length; i++) {
				// console.log(wordWin[i]);
				console.log(dupword);
		if (wordWin[i] === user_letter){
				// console.log("this is the user's letter and it's right! " + user_letter);
				appendToBoard(user_letter,i);
				dupword = true;

				// return true;
	  } else{
				// console.log("this is the user's letter and it's wrong!" + user_letter);
				// dupword = false;
			}
				alert("Next Player's Turn");
				//function for next player
				// return false;		
	};
		if	(dupword === false) {
				youlose.push("false");
			}
				dupword = false;
		if (youlose.length === 3) {
				// console.log(youlose);
				document.getElementById("before-face").src = "images/after.png";
			}
};

//If letter matches, need to append to board
function appendToBoard(user_letter,index){
	// alert('made it inside appendTestFunction');
		// var letters = boardword[index].id;

       	document.getElementById("A" + index).innerHTML = user_letter;	
      }
};

/// To do:
//1. Make the letter disappear once it has been chosen
//2. Swap player function
//Notes:
//var max = 3x check , if counter is = max
//right subtract 1, wrong add 1


////////////////////////////////////////////////////////////////////////////////
// BELOW IS TEST CODE NOT IN USE:

// var letterBox = document.getElementById('guess-box');
// 	for (var i = 0; i < alphaBet.length; i++) {
// 		if (letterBox[i] === wordWin['']);

// 			}
// 		}
// document.getElementById('dubs-w')

	// console.log($('.letter-strike'))

	// var letterStrike = []
	// // letterStrike = $('.letter-strike');
	// // console.log(letterStrike)

	//  $('.letter-strike').each(function(index) {

 //        var $idVal = $(this).attr('id'); //Gets the id of the div
 //        letterStrike.push($idVal)
 //        // console.log($idVal)

 //         $(this).on("click", function(e) {
 //             $(this).addClass('clicked')
 //        });

 //    })

	//       addingOnclick(letterStrike);
	// }

//UN-COMMENT WHEN DONE TESTING!!!!!!!!!!!!!!!!!
	// function addingOnclick(letterStrike) {
	// 	    $('.letter-strike').on("click", function(e) {

	// 	    	var arr = []

	// 	    	var x = $(this).attr('id');
	// 	    	$(this).removeClass('available'); //that class will deffirintiate 

	// 	    	//you can only input new .html(x) if there is no class of
	// 	    	if $('.dubs').hasClass('available') { 
	// 	    		// loop that goes through dubs with available class

	// 	    	$('#WW').html(x) ///has to be dynamic

		    	// }
		    // });

		    // call the class that is gonna compare clicked values arr to specific hardcoded arr

	// };
	// alert('PLAYER 1, YOU\'RE UP!') //on load prompts player 1


// var alphaBet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// var letters = document.getElementsByClassName('letter-strike');

// for (var i = 0; i < letters.length; i++) {
// 	letters[i].addEventListener('click', function(){
// 	 checkIfCorrect(this.innerHTML);
// 	})
// };
// }