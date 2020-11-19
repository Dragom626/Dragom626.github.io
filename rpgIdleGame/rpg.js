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
function randomNumGen(){
	randomNum = Math.floor(Math.random() * EnemyLevel);
}

var X = 0;
var Y = 0;
var Output = 0;

function addVariables(){
	Output = Math.round(X + Y);
	console.log(Output);
	document.getElementById("Books").innerHTML = Output;
}

//Damage Calc Function
/*jshint unused:false*/
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
function woodcutting(){
	if(WoodcuttingSkill <= 14){
		LumberGained = Math.round((((WoodcuttingSkill * 0.5))* 0.5));
		if(LumberGained === 0){LumberGained = 1;}
		Lumber = Lumber + LumberGained;
		document.getElementById("Lumber").innerHTML = Lumber;
		document.getElementById("logger").innerHTML = "You wildly swing your axe and manage to fell a small tree.";
		LumberGained = 0;
		}
	else if(WoodcuttingSkill <= 49 || WoodcuttingSkill >= 15){
		LumberGained = Math.round((((WoodcuttingSkill * 0.5))* 0.5));
		Lumber = Lumber + LumberGained;
		LumberGained = 0;
		document.getElementById("Lumber").innerHTML = Lumber;
		document.getElementById("logger").innerHTML = "With newfound skills you start attacking a slightly larger tree.";
	}
	}

function processLumber(){
	Lumber = Lumber - 1;
	Bark = Bark + 1;
	Planks = Planks + 1;
	document.getElementById("Bark").innerHTML = Bark;
	document.getElementById("Planks").innerHTML = Planks;
}


function mining(){
	if(MiningSkill <= 14){
		StoneGained = Math.round((((MiningSkill * 0.5))* 0.5));
		Stone = Stone + StoneGained;
		StoneGained = 0;
		document.getElementById("Stone").innerHTML = Stone;
		document.getElementById("logger").innerHTML = "You swing the pickaxe you found near the quarry and some stone comes loose.";
	}
	else if(MiningSkill <= 49 || MiningSkill >= 15){
		OreGained = Math.round((((MiningSkill * 0.5))* 0.5));
		StoneGained = Math.round((((MiningSkill * 0.5))* 0.5));
		Stone = Stone + StoneGained;
		Ore = Ore + OreGained;
		StoneGained = 0;
		document.getElementById("Stone").innerHTML = Stone;
		document.getElementById("Ore").innerHTML = Ore;
		document.getElementById("logger").innerHTML = "With your newfound skills you are able to spot and mine ore. What ore though, you have no clue.";
	}
	Ore = Ore + MiningSkill;
	document.getElementById("Ore").innerHTML = Ore;
}

function hunting(){
	Meat = Meat + HuntingSkill;
	Hide = Hide + HuntingSkill;
	document.getElementById("Meat").innerHTML = Meat;
	document.getElementById("Hide").innerHTML = Hide;
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
