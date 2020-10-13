var currentQuestion = 0;
var score = 0;
var timeleft = 16;
var stopTimer = false;
var countDownTimer;
var click = 0;

function endTest() {
	document.getElementById("message").innerHTML = "You Opened A New Tab, This Question Is Now Skipped";
	document.getElementById("lightbox").style.display="block";
	stopTimer = true;
	endTimer();
}

function disBlurb(){
	if(score >= 0 && score <= 2){
		document.getElementById("message").innerHTML = "You Are A Scarab";
	}else if(score >= 3 && score <= 4) {
		document.getElementById("message").innerHTML = "You Are A Boneweb Spider";
	}else if(score >= 5 && score <= 6){
		document.getElementById("message").innerHTML = "You Are A Sea Serpent";
	}else if(score >= 7 && score <= 8){
		document.getElementById("message").innerHTML = "You Are A Nerubian";
	}else if(score >= 9 && score <= 10){
		document.getElementById("message").innerHTML = "You Are A Devilsaur";
	}else {
		document.getElementById("message").innerHTML = "Don't Break My Code";
	}
}
function startTimer() {
	
	timeleft = 16;
	countDownTimer = setInterval (function(){
	  document.getElementById("countdown").innerHTML = timeleft-1 + " seconds remaining";
	  timeleft -= 1;
	  endTimer();
	}, 1000);
}
function endTimer() {
	if(timeleft <= 0 || stopTimer){
		clearInterval(countDownTimer);
		document.getElementById("countdown").innerHTML = " ";
		currentQuestion++;
		loadQuestion();
	}
}

var questions = [
   {
	"question": "How much attack does Anub'Arak have?",
	"a": "8",
	"b": "4",
	"c": "6",
	"d": "7",
	"image":"quizimages/q1.jpg",
	"answer": "a"
   },
   {
	"question": "What class is Nithogg in?",
	"a": "Warrior",
	"b": "Mage",
	"c": "Shaman",
	"d": "Druid",
	"image":"quizimages/q2.jpg",
	"answer": "c"
   },
   {
	"question": "What is Ragnaros the Firelord's Ability?",
	"a": "At the end of your turn, do 8 damage to a random enemy",
	"b": "At the end of your turn, do 8 damage to all characters",
	"c": "At the beginning of your turn, do 8 damage to a random enemy",
	"d": "At the beginning of your turn, do 4 damage to all characters",
	"image":"quizimages/q3.jpg",
	"answer": "a"
   },
   {
	"question": "How much does Archmage Antonidas cost?",
	"a": "6 mana",
	"b": "7 mana",
	"c": "5 mana",
	"d": "none of the above",
	"image":"quizimages/q4.jpg",
	"answer": "b"
   },
   {
	"question": "What is the Charge ability?",
	"a": "Charge makes it so a minion can attack other minions, but not heroes",
	"b": "Charge makes it so a minion can attack heroes but not minions",
	"c": "Charge makes it so a minion can attack anything immediately",
	"d": "none of the above",
	"image":"quizimages/q5.jpg",
	"answer": "c"
   },
   {
	"question": "What is the Rush ability?",
	"a": "Rush makes it so am enemy minion cannot attack their next turn",
	"b": "Rush makes it so a minion can attack heroes but not minions",
	"c": "Rush makes it so a minion can attack anything immediately",
	"d": "none of the above",
	"image":"quizimages/q6.jpg",
	"answer": "d"
   },
   {
	"question": "What is the Burn ability",
	"a": "Burn makes it so enemies take damage their next turn",
	"b": "Burn makes it so you take damage your next turn",
	"c": "Burn makes it so all characters take damage the next turn",
	"d": "none of the above",
	"image":"quizimages/q7.jpg",
	"answer": "d"
   },
   {
	"question": "What set does Deathstalker Rexxar belong to?",
	"a": "Knights of the Frozen Throne",
	"b": "Descent of Dragons",
	"c": "Journey to Un'Goro",
	"d": "Ashes of Outland",
	"image":"quizimages/q8.jpg",
	"answer": "a"
   },
   {
	"question": "What set does Galakrond belong to?",
	"a": "Journey to Un'Goro",
	"b": "Rise of Shadows",
	"c": "Saviors of Ul'dum",
	"d": "Descent of Dragons",
	"image":"quizimages/q9.jpg",
	"answer": "d"
   },
   {
	"question": "Who is the best teacher in Mount Doug?",
	"a": "Mr. Johnson",
	"b": "Mr. Boorman",
	"c": "Mrs. Wear",
	"d": "Mr. Quast",
	"image":"quizimages/q10.jpg",
	"answer": "c"
   }
 ];


 
function initialize() {
	 document.getElementById("lightbox").style.display="none";
	 loadQuestion();
 }
 function closeLightbox(){
	document.getElementById("lightbox").style.display="none"; 
 }
 
 
 function loadQuestion() {
	 click = 0;
	 stopTimer  = false;
	 //endTimer();
	 startTimer();
	 let message = "";
	 if (currentQuestion == questions.length){
		disBlurb();
		document.getElementById("lightbox").style.display="block";
		currentQuestion = 0;
		score = 0;
		document.getElementById("score").innerHTML = score + " / " + questions.length;
		document.getElementById("message").style.backgroundColor = "white";
	 }
	 document.getElementById("p").innerHTML = "Question Number " + (currentQuestion+1) + "/" + questions.length;
	 
	 
	var img = document.getElementById("image");
	var preLoad = new Image();
	preLoad.src = questions[currentQuestion].image;
	
	preLoad.onLoad = function () {
		img.height = this.height;
	}
	img.style.maxHeight = "500px";
	img.src = preLoad.src;
	
	
   document.getElementById("question").innerHTML = questions[currentQuestion].question;
   document.getElementById("a").innerHTML = "A " + questions[currentQuestion].a;
   document.getElementById("b").innerHTML = "B " + questions[currentQuestion].b;
   document.getElementById("c").innerHTML = "C " + questions[currentQuestion].c;
   document.getElementById("d").innerHTML = "D " + questions[currentQuestion].d;
   
 } // loadQuestion
 
 
 function markIt(ans) {
	let message = "";
	if(ans == questions[currentQuestion].answer) {
		
		score += 1;
		document.getElementById("score").innerHTML = score + "/10";
		
		message = "Correct!" + score + "/10";
		
		document.getElementById("message").style.backgroundColor = "green";
	}else{
		message = "Wrong!" + score + "/10";
		document.getElementById("message").style.backgroundColor = "red";
	}
	
	document.getElementById("lightbox").style.display="block";
	document.getElementById("message").innerHTML = message;
	stopTimer = true;
	endTimer();
 }  // markIt
 
   function next(){
	   stopTimer = true;
	   endTimer();
   }
   
   function addTime() {
	if( click < 2){
		timeleft += 10;
		click++;
	}
}
  if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}




   

