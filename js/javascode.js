


var iteration = 0 ; 
var rAllPossibleInput = ["paper","rock","scissors"] ; 
var robotInput ;
var userInputImage = document.getElementById("userInputImage") ; 
var robotInputImage = document.getElementById("robotInputImage") ;





/***************************move from start home to instructions page **********************/
function gotoinstructions(){

	document.getElementById("startPage").style.display ="none"; 
	document.getElementById("instructionsPage").style.display = "block";
}
/****************************go to play************************************************/
function gotoplay(){
	
	document.getElementById("instructionsPage").style.display = "none";
	document.getElementById("mygame").style.display ="block";
}




/**********************************play ************************************/
function play(userInput)
{
	var i = Math.floor(Math.random()*3) ; 
	robotInput = rAllPossibleInput[i]; 
	iteration +=1 ; 
	showReult(userInput,robotInput) ;
	 
	 	
}
/******************************check iteration*******************/
function checkIteration(num)
{
	if(num < 10)
		{
			removeResult()
		}
	else{
		
		showFinalResult();
		
	}
}
/****************************show result section**********************/
function showReult(userInput , robotInput)
{
	
	/*******************set result p **************/
	document.getElementById("result").innerHTML = checkInput(userInput,robotInput);
	if(checkInput(userInput,robotInput) =="Lose")
		{
			document.getElementById("result").style.color = "red";
			
		}
	else if(checkInput(userInput,robotInput) =="Win")
		{
			document.getElementById("result").style.color = "green";
		}
	else{
		document.getElementById("result").style.color = "green";
	}
	
	/******************show result section****************************/
	document.getElementById("hands").style.display = "none"; 
	document.getElementById("oneRsult").style.display="block";
	setNumbers(checkInput(userInput,robotInput));
	checkIteration(iteration);
	
	
}



/*********************check inputs***********************************/
function checkInput(userInput , robotInput)
{
	if(userInput ==="paper" )
		{
			userInputImage.src="images/paperUser.jpg" ; 
			if(robotInput === "paper")
				{
					
					robotInputImage.src ="images/paperRobot.jpg" ;  
					return "Draw" ; 
				}
			else if(robotInput === "rock")
				{
					robotInputImage.src ="images/rockRobot.jpg" ; 
					return "Win" ; 
					
					
				}
			else
				{
					robotInputImage.src ="images/scissorsRobot.jpg" ; 
					return "Lose" ;
				}
		}/****************************/
	else if(userInput ==="rock")
		{
			userInputImage.src="images/rockUser.jpg" ;
			if(robotInput  === "rock")
				{
					robotInputImage.src ="images/rockRobot.jpg" ; 
					return "Draw" ; 
				}
			else if(robotInput === "paper")
				{
					robotInputImage.src ="images/paperRobot.jpg" ; 
					return "Win" ; 
				}
			else{
				robotInputImage.src ="images/scissorsRobot.jpg" ; 
				return "Lose";
			}
		}/**********************************************/
	else{
		userInputImage.src="images/scissorsUser.jpg" ;
		if(robotInput ==="scissors")
			{
				robotInputImage.src ="images/scissorsRobot.jpg" ;
				return "Draw" ; 
			}
		else if (robotInput ==="rock")
			{
				robotInputImage.src ="images/rockRobot.jpg" ;
				return "Lose";  
			}
		else{
			robotInputImage.src ="images/paperRobot.jpg" ; 
			return "Win";
		}
	}
	
}/****end of function**************/
/*****************************************************************/
/***************remove result section*********/
function removeResult()
{
     setTimeout(function(){
	    document.getElementById("hands").style.display = "block"; 
		document.getElementById("oneRsult").style.display="none";
		document.getElementById("result").innerHTML ="";
		
	},1000)	
}
/************************************************/
function showFinalResult()
{
	 userScoreNumber = Number(document.getElementById("myscore").innerHTML);
     robotScoreNumber = Number(document.getElementById("robotscore").innerHTML);
	if(userScoreNumber > robotScoreNumber)
		{
			document.getElementById("finalresult").innerHTML="Win"
			document.getElementById("finalresult").style.color="green" ; 
		}
	else if (robotScoreNumber > userScoreNumber)
		{
			document.getElementById("finalresult").innerHTML="Lose" ; 
			document.getElementById("finalresult").style.color="red" ;
			
		}
	else
		{
			document.getElementById("finalresult").innerHTML="Draw" ; 
			document.getElementById("finalresult").style.color="green" ; 
		}
	
	 setTimeout(function(){
	    document.getElementById("conFinalResult").style.display = "block"; 
		document.getElementById("oneRsult").style.display="none";
		document.getElementById("result").innerHTML ="";
		
	},1200)	
}

/***************************set numbers *******************************/
function setNumbers(result){
	
	 userScoreNumber = Number(document.getElementById("myscore").innerHTML);
     robotScoreNumber = Number(document.getElementById("robotscore").innerHTML);
	
	if(result ==="Lose")
		{
			robotScoreNumber += 1 ;
			console.log(robotScoreNumber) ; 
			document.getElementById("robotscore").innerHTML  = robotScoreNumber  ;
			
		}
	else if(result ==="Win")
		{
			userScoreNumber += 1 ;
			console.log(userScoreNumber)
			document.getElementById("myscore").innerHTML = userScoreNumber ; 
			
		}
	else{
		document.getElementById("robotscore").innerHTML  =  robotScoreNumber ;
		document.getElementById("myscore").innerHTML = userScoreNumber ;
		
	}
	
}
/*****************************************************************************************/
/******************************playAgain************************************************/
function playAgain()
{
	iteration = 0 ; 
	document.getElementById("myscore").innerHTML = "0" ; 
	document.getElementById("robotscore").innerHTML = "0" ;
	document.getElementById("hands").style.display = "block"; 
	document.getElementById("oneRsult").style.display="none";
	document.getElementById("conFinalResult").style.display = "none"; 
	
}

 
