let order = getAListOfRandomNumbers(0, 3);
let currentQuestion = 0;
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', '../amplify/sound/intro-tune-' + order[currentQuestion] + '.wav');

$('#correctOutput').hide();
$('#incorrectOutput').hide();
displayLogic()


$('#playButton').click(function() {
    audioElement.play();
});

$('#stopButton').click(function() {
    audioElement.pause();
});

$('#nextButton').click(function() {
    displayLogic();
    $('#correctOutput').hide();
    $('#incorrectOutput').hide();
});

for(let index = 0;index < 9; index++) {
    let correct = "Woo-hoo!";
    let wrong = "Ehh! What's Up Doc?";

    $('#option-' + index).click(function() {
        console.log(currentQuestion);
        console.log(index);
        if (currentQuestion  == 0 && index == 8 ) {
            $('#correctOutput').show();
            $('#incorrectOutput').hide();
        } else if (currentQuestion== 1 && index == 0 ) {
            $('#correctOutput').show();
            $('#incorrectOutput').hide();
        } else if (currentQuestion == 2 && index == 4 ) {
            $('#correctOutput').show();
            $('#incorrectOutput').hide();
        } 
        else {
            $('#correctOutput').hide();
            $('#incorrectOutput').show();
        }
    });
}

function getAListOfRandomNumbers(min, max) {
	let randoms = [];
	let randomNumbers = [];

	while(randomNumbers.length < max){
		var randomnumber = Math.floor(Math.random()*max) + min;
		if(randomNumbers.indexOf(randomnumber) > -1) continue;
		randomNumbers[randomNumbers.length] = randomnumber;
	}

	return randomNumbers;
}

function displayLogic() {
    for(let index = 0;index < 3; index++) {
        $('#question-' + index).hide();
    }
    $('#question-' + currentQuestion).show();
    audioElement.setAttribute('src', '../amplify/sound/intro-tune-' + currentQuestion + '.wav');
    currentQuestion++;
    if(currentQuestion >= order.length) {
        currentQuestion = 0;
    }
}