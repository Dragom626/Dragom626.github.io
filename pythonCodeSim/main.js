// JavaScript Document
"use strict";




//Varibles ~ Basic
var Cash = 0;
var Code = 0;
var ContractPay = 0;
var SkillLevel = 1;
var PyGameM = 0;
var MathM = 0;
var TimeM = 0;
var Message = "Nothing";
var CodeTotal = 0;
var CashTotal = 0;
var CodeAdded = 0;

//Upgrades ~ Skill Level
var SkillPrice = 10;

//Modules Bonus Power
var TimeM = 0;
var MathM = 0;
var PyGameM = 0;

//Contracts Sell Price
var ContractOne = 100;
var ContractTwo = 1000;
var ContractThree = 10000;
var ContractFour = 100000;
var ContractFive = 1000000;



//Main Code Button
function writeCode(){
	CodeAdded = SkillLevel + (PyGameM + MathM + TimeM);
    Code = Code + SkillLevel + (PyGameM + MathM + TimeM);
	CodeTotal = CodeTotal + CodeAdded;
	CodeAdded = 0;
	
    document.getElementById("Code").innerHTML = Code;
	document.getElementById("CodeTotal").innerHTML = CodeTotal;
}

//Sell Code Button
function sellCode(){
	if(Code >= 10){
		Code = Code - 10;
		Cash = Cash + 1;
		document.getElementById('Code').innerHTML = Code;
		document.getElementById('Cash').innerHTML = Cash;
	} else{
		Message = "Not Enough Code fucko";
		document.getElementById('Message').innerHTML = Message;
	}
}


//Upgrade Skill Level
function upgradeSkills(){
	var SkillPrice = Math.floor(1000 * Math.pow(5,SkillLevel));
	document.getElementById('SkillPrice').innerHTML = SkillPrice;
	if(Cash >= SkillPrice && SkillLevel <5){
		SkillLevel = SkillLevel + 1;
		Cash = Cash - SkillPrice;
		var SkillPrice = Math.floor(100 * Math.pow(5,SkillLevel));
		document.getElementById('SkillPrice').innerHTML = SkillPrice;
		document.getElementById('SkillLevel').innerHTML = SkillLevel;
		document.getElementById('Cash').innerHTML = Cash;
		if (SkillLevel >= 5){
			document.getElementById('SkillLevel').innerHTML = "Max Skill Level";
			document.getElementById('SkillPrice').innerHTML = "Max Skill Level";
		}
	}};

//Buy Skills


function buyTime(){
	if (Cash >= 1000 && TimeM < 1){
		TimeM = 10;
		document.getElementById('TimeS').innerHTML = "Time,";
	} else{
			Message = "Need 1000 cash you poor piece of shit";
			document.getElementById('Message').innerHTML = Message;
		}
}

function buyMath(){
	if (Cash >= 10000 && MathM < 1){
		MathM = 100;
		document.getElementById('MathS').innerHTML = "Math,";
		} else{
			Message = "You disappointment, come back with 10000 before clicking me again";
			document.getElementById('Message').innerHTML = Message;
		}
}



function buyPyGame(){
	if (Cash >= 100000 && PyGameM < 1){
		PyGameM = 1000;
		document.getElementById('PyGameS').innerHTML = "PyGame";
	} else{
			Message = "100000 or no bean burrito";
			document.getElementById('Message').innerHTML = Message;
		}
}









