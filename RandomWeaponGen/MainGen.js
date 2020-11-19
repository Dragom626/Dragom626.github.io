function GenWeapon(){
	var prefix = ['Crushing', 'Obliterating', 'Devouring', 'Exterminating', 'Devastative', 'Of'];
	var weapon = ['Dagger', 'Sword', 'Bow', 'Scythe', 'Longsword', 'Hammer', 'Axe', 'Great Axe', 'Polearm', 'Staff', 'Pebble' , 'Lego', 'of' ];
	var element = ['Sparks', 'Flames', 'Frost', 'Nova', 'Stone', 'Lego', 'Darkness', 'Light', 'Void', 'Sand', 'Blood', 'Crip', 'Atomizing', 'Healing', 'of'];
	var PrefixOutput = prefix[Math.floor(Math.random() * prefix.length)];
	var WeaponOutput = weapon[Math.floor(Math.random() * weapon.length)];
	var ElementOutput = element[Math.floor(Math.random() * element.length)];
	document.getElementById("Weapon").innerHTML = PrefixOutput + " " + WeaponOutput + " of " + ElementOutput;

}