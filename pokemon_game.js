var their_HP = 300;
var my_HP = 300; 

//their_attacks = [thunderbolt, quickAttack, thunder, chargeBeam];

var playerMove = 0; 

function ice_beam() {
	if (playerMove == 0 & my_HP != 0) {
		var miss = Math.floor((Math.random() * 10) + 1); // miss rate
		if(miss == 1) {
			document.getElementById("message").innerHTML = "MUDKIP's attack missed!";
		}
		else{
			document.getElementById("message").innerHTML = "MUDKIP used Ice Beam!"; // ice beam used
			var crit = Math.floor((Math.random() * 10) + 1); // crit chance
			if (crit == 4) {
				for (var x = 0; x < 2; x++) {
					their_HP -= 30; 
				}
			}
			else{
				their_HP -= 30; // no crit
			}
			if(their_HP < 0){their_HP = 0} // enemy faints
				document.getElementById("their_HP").innerHTML = their_HP; // updated HP
			if(their_HP == 0) {
				document.getElementById("message").innerHTML = "PIKACHU fainted!" // if enemy pokemon's HP is 0
				}
			}
			//wait();
			playerMove = 1; 
		}
		}

<<<<<<< HEAD
function thunderbolt(){
	var miss = Math.floor((Math.random() * 10) + 1); // miss rate
	if(miss == 1) {
		document.getElementById("message").innerHTML = "PIKACHU's attack missed!";
	}
	else{
		document.getElementById('message').innerHTML = "PIKACHU used thunderbolt"	
		var crit = Math.floor((Math.random() * 10) + 1);
		if(crit == 4){
			for(var x = 0; x < 2; x++){
				my_HP -= 30;
			}
		}
		else{
			my_HP -=30;
		}
		if(my_HP < 0){my_HP =0}
			document.getElementById("my_HP").innerHTML = my_HP;
		if(my_HP == 0){
			document.getElementById("message").innerHTML = "MUDKIP fainted!"
		}
	}
}

/*function comp_pokemon(){
	if(playerMove == 1 & their_HP != 0){
		//var moves = Math.floor((Math.random() * 4) + 1); their math is wrong lul
		thunderbolt();
		playerMove = 0;
	}
}
*/
=======
function surf() {
	if (playerMove == 0 & my_HP != 0) {
		var miss = Math.floor((Math.random() * 10) + 1); // miss rate
		if(miss == 1) {
			document.getElementById("message").innerHTML = "MUDKIP's attack missed!";
		}
		else{
			document.getElementById("message").innerHTML = "MUDKIP used Surf!"; // surf used
			var crit = Math.floor((Math.random() * 10) + 1); // crit chance
			if (crit == 4) {
				for (var x = 0; x < 2; x++) {
					their_HP -= 20; 
				}
			}
			else{
				their_HP -= 20; // no crit
			}
			if(their_HP < 0){their_HP = 0} // enemy faints
				document.getElementById("their_HP").innerHTML = their_HP; // updated HP
			if(their_HP == 0) {
				document.getElementById("message").innerHTML = "PIKACHU fainted!" // if enemy pokemon's HP is 0
				}
			}
			//wait();
			playerMove = 1; 
		}
		}

function earthquake() {
	if (playerMove == 0 & my_HP != 0) {
		var miss = Math.floor((Math.random() * 10) + 1); // miss rate
		if(miss == 1) {
			document.getElementById("message").innerHTML = "MUDKIP's attack missed!";
		}
		else{
			document.getElementById("message").innerHTML = "MUDKIP used Earthquake!"; // surf used
			var crit = Math.floor((Math.random() * 10) + 1); // crit chance
			if (crit == 4) {
				for (var x = 0; x < 2; x++) {
					their_HP -= 80; 
				}
			}
			else{
				their_HP -= 80; // no crit
			}
			if(their_HP < 0){their_HP = 0} // enemy faints
				document.getElementById("their_HP").innerHTML = their_HP; // updated HP
			if(their_HP == 0) {
				document.getElementById("message").innerHTML = "PIKACHU fainted!" // if enemy pokemon's HP is 0
				}
			}
			//wait();
			playerMove = 1; 
		}
		}

function waterfall() {
	if (playerMove == 0 & my_HP != 0) {
		var miss = Math.floor((Math.random() * 10) + 1); // miss rate
		if(miss == 1) {
			document.getElementById("message").innerHTML = "MUDKIP's attack missed!";
		}
		else{
			document.getElementById("message").innerHTML = "MUDKIP used Waterfall!"; // waterfall used
			var crit = Math.floor((Math.random() * 10) + 1); // crit chance
			if (crit == 4) {
				for (var x = 0; x < 2; x++) {
					their_HP -= 50; 
				}
			}
			else{
				their_HP -= 50; // no crit
			}
			if(their_HP < 0){their_HP = 0} // enemy faints
				document.getElementById("their_HP").innerHTML = their_HP; // updated HP
			if(their_HP == 0) {
				document.getElementById("message").innerHTML = "PIKACHU fainted!" // if enemy pokemon's HP is 0
				}
			}
			//wait();
			playerMove = 1; 
		}
		}

//enemy pokemon moves
>>>>>>> 45122942becfac9165591d99e9dd951e8b591f7e
