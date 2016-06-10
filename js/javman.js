//to do:
//player clicks on letter itself

//load game at start up
window.onload = function() {

	// console.log($('.letter-strike'))

	var letterStrike = []
	// letterStrike = $('.letter-strike');
	// console.log(letterStrike)

	 $('.letter-strike').each(function(index) {

        var $idVal = $(this).attr('id'); //Gets the id of the div
        letterStrike.push($idVal)
        // console.log($idVal)

        //  $(this).on("click", function(e) {
        //      $(this).addClass('clicked')
        // });

    })
	

var letterBox = document.getElementById('guess-button');
	for (var i = 0; i < alphaBet.length; i++) {
		


		if {
			alphaBet[i] === ['W']
			
		}
		

	      addingOnclick(letterStrike);
		 
	}


	function addingOnclick(letterStrike) {
		    $('.letter-strike').on("click", function(e) {

		    	var arr = []

		    	var x = $(this).attr('id')
		    	$(this).removeClass('available') //that class will deffirintiate 

		    	//you can only input new .html(x) if there is no class of
		    	if $('.dubs').hasClass('available') { 
		    		loop that goes through dubs with available class

		    	$('#WW').html(x) ///has to be dynamic

		    	}
		    })

		    // call the class that is gonna compare clicked values arr to specific hardcoded arr

	}
	// alert('PLAYER 1, YOU\'RE UP!') //on load prompts player 1


// var alphaBet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// var letters = document.getElementsByClassName('letter-strike');

// for (var i = 0; i < letters.length; i++) {
// 	letters[i].addEventListener('click', function(){
// 	 checkIfCorrect(this.innerHTML);
// 	})
// };
// }

// var wordWin = ['W','A','R','R','I','O','R','S'];

// function checkIfCorrect(letter){
// 	for (var i = 0; i < wordWin.length; i++) {
// 		if (wordWin[i] === letter){
// 				console.log('correct');
// 			letter.getElementById('dubs')
// 			// get the correct word box and save it to a var using its getElementById
// 			// its ID is the letter we passed in 
// 			// set the innerHTML equal to the letter
// 		}else{
// 			console.log('not correct')
// 		}
// 	};

// }

// var letterBox = document.getElementById('guess-box');
// 	for (var i = 0; i < alphaBet.length; i++) {
// 		if (letterBox[i] === wordWin['']);

// 			}
// 		}


// document.getElementById('dubs-w')
