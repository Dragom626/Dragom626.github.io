//I HATE HAVING RED SO THIS BITCH HERE
"use strict";

// Main Variables
var BaseDamage = 1;
var Damage = 0;
var Attack = 0;
var AttackDelay = 0 * 1000;


var HP = 10;
var Gold = 0;
var randomNum = 0;

var EnemyHp = 0;
var EnemyHpMax = 0;
var EnemyLevel = 2;

var damageOutput = 0;


//Jobs
var WoodcuttingSkill = 1;
var MiningSkill = 1;
var HuntingSkill = 1;
var BardshipSkill = 1;
var WritingSkill = 1;

var WritingCalc = 0;
var BookBindingSkill = 0;
var MiningSkill = 0;

//Currency - Non money

	//Writing
	var Pages = 0;
	var Books = 0;

	//Woodcutting
	var Lumber = 0;
	var LumberGained = 0;
	var Bark = 0;
	var Planks =0;

	//Hunting
	var Meat = 0;
	var Hide = 0;
	var Leather = 0;

	//Mining
	var Stone = 0;
	var Ore = 0;
	var StoneGained = 0;
	var OreGained = 0;

	//Singing
	var Fame = 0;


//Random Number Gen
function randomNumGen(min, max){
	min = Math.ceil(min);
 	max = Math.floor(max);
 	return Math.floor(Math.random() * (max - min) + min);
}


function resourceTierSelect(evt, tierSelect) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tierSelect).style.display = "block";
  evt.currentTarget.className += " active";
}

//Damage Calc Function
function preAttack(){
	if(EnemyHp <= 0){
		enemySet();
	}
	else{
		defineDamage();
		EnemyHp = EnemyHp - damageOutput;
		document.getElementById("EnemyHpBar").setAttribute("value", EnemyHp);
		document.getElementById("EnemyHp").innerHTML = EnemyHp;
		document.getElementById("AttackButton").disabled = true;
		setTimeout(function(){document.getElementById("AttackButton").disabled = false;},AttackDelay);
		if(EnemyHp <= 0){
			randomNumGen();
			Gold = Gold + randomNum;
			document.getElementById("Gold").innerHTML = Gold;
			enemySet();
		}
	}
}

//Attacking Function
function defineDamage(){
	damageOutput = BaseDamage + Attack;
}

//Enemy Creating Function
function enemySet(){
	randomNumGen();
	EnemyHpMax = (randomNum * 1.3) + 10;
	EnemyHpMax = Math.round(EnemyHpMax);
	EnemyHp = EnemyHpMax;
	document.getElementById("EnemyHpBar").setAttribute("value", EnemyHp);
	document.getElementById("EnemyHpBar").setAttribute("max", EnemyHp);
	document.getElementById("EnemyHp").innerHTML = EnemyHp;
}

//Job Functions

//Woodcutting Skill Functions
function woodcutting(){
		LumberGained = randomNumGen((WoodcuttingSkill*0.2), (WoodcuttingSkill*0.8))
		if(LumberGained === 0){LumberGained = 1;}
		Lumber = Lumber + LumberGained;
		document.getElementById("Lumber").innerHTML = Lumber;
		document.getElementById("logger").innerHTML = "You wildly swing your axe and manage to fell a small tree.";
		LumberGained = 0;
	}

function processLumber(){
	if(Lumber > 0){
	Lumber = Lumber - 1;
	Bark = Bark + 1;
	Planks = Planks + 1;
	document.getElementById("Bark").innerHTML = Bark;
	document.getElementById("Planks").innerHTML = Planks;
	}
	else{document.getElementById("logger").innerHTML = "You need more lumber to do this."}
}

//Mining Skill Functions
function mining(){
	if(MiningSkill <= 14){
		StoneGained = 1;
		if(StoneGained === 0){StoneGained = 1;}
		Stone = Stone + StoneGained;
		document.getElementById("Stone").innerHTML = Stone;
		document.getElementById("logger").innerHTML = "You swing the pickaxe you found near the quarry and some stone comes loose.";
	}
	else {
		Stone = Stone + 1;//(randomNumGen((MiningSkill*0.2), (MiningSkill*0.4)))
		Ore = Ore + (randomNumGen((MiningSkill*0.5), (MiningSkill*1)))
		document.getElementById("Stone").innerHTML = Stone;
		document.getElementById("Ore").innerHTML = Ore;
		document.getElementById("logger").innerHTML = "With your newfound skills you are able to spot and mine ore. What ore though, you have no clue.";
	}
	Ore = Ore + MiningSkill;
	document.getElementById("Ore").innerHTML = Ore;
}

//Hunting Skill Functions
function hunting(){
	Meat = Meat + HuntingSkill;
	Hide = Hide + HuntingSkill;
	document.getElementById("Meat").innerHTML = Meat;
	document.getElementById("Hide").innerHTML = Hide;
}

function tanHide(){
	if(Hide > 0){
		Leather = Leather + 1;
		Hide = Hide - 1;
		document.getElementById("Hide").innerHTML = Hide;
		document.getElementById("Leather").innerHTML = Leather;
		document.getElementById("logger").innerHTML = "You successfully tanned a piece of Hide into Leather.";
	}
	else{
		document.getElementById("logger").innerHTML = "You need more hide for this.";
	}
}

function bardship(){
	Fame = Fame + BardshipSkill;
	document.getElementById("Fame").innerHTML = Fame;
	document.getElementById("logger").innerHTML = "You attempt to sing about your tales, turns out your off key voice is more deadly then then your sword.";
}

function writing(){
	WritingCalc = ((MiningSkill + HuntingSkill + WoodcuttingSkill) * 0.01) + WritingSkill;
	Pages = Pages + Math.round(WritingCalc);
	document.getElementById("Pages").innerHTML = Pages;
	document.getElementById("logger").innerHTML = "Full of badly written memories and enough errors to make a scholar cry, you write about one of your grand adventures. At least they can't hear you singing.";
	WritingCalc = 0;
}

function bindBook(){
	if (Pages >= 10 || Leather >= 2){
		setTimeout(function(){Books = Books + 1;},(BookBindingSkill * 500));
		}
	else{
		document.getElementById("logger").innerHTML = "You need more materials to do this.";
	}
}


function rF(){
	document.getElementById("EHP").innerHTML = EHP;
	document.getElementById("HP").innerHTML = HP;
	document.getElementById("Gold").innerHTML = Gold;
	document.getElementById("DamageUpgradeCost").innerHTML = DamageUpgradeCost;
}
