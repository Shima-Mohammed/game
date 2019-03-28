


var iteration = 0 ; 
var rAllPossibleInput = ["paper","rock","scissors"] ; 
var robotInput ; 



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
	iteration +=1 ; 
	checkIteration(iteration) ; 
	var i = Math.floor(Math.random()*3) ; 
	console.log(i);
	robotInput = rAllPossibleInput[i]; 
	console.log(robotInput);
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
		
	}
}
/****************************show result section**********************/
function showReult(userInput , robotInput)
{
	setNumbers(checkInput(userInput,robotInput));
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
	checkIteration(iteration);
	
	
}
/***************remove result section*********/
function removeResult()
{
     setTimeout(function(){
	    document.getElementById("hands").style.display = "block"; 
		document.getElementById("oneRsult").style.display="none";
		document.getElementById("result").innerHTML ="";
		
	},600)	
}
/************************************************/
/*********************check inputs***********************************/
function checkInput(userInput , robotInput)
{
	if(userInput ==="paper" )
		{
			if(robotInput === "paper")
				{
					
					return "Draw" ; 
				}
			else if(robotInput === "rock")
				{
					return "Win" ; 
					
					
				}
			else
				{
					return "Lose" ;
				}
		}/****************************/
	else if(userInput ==="rock")
		{
			if(robotInput  === "rock")
				{
					return "Draw" ; 
				}
			else if(robotInput === "paper")
				{
					return "Win" ; 
				}
			else{
				return "Lose";
			}
		}/**********************************************/
	else{
		if(robotInput ==="scissors")
			{
				return "Draw" ; 
			}
		else if (robotInput ==="rock")
			{
				return "Lose";  
			}
		else{
			return "Win";
		}
	}
	
}/****end of function**************/
/*****************************************************************/
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
 
