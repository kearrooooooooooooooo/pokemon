var their_HP = 100;
var my_HP = 100; 

their_attacks = [thunderbolt, quickAttack, thunder, chargeBeam];

playerMove = 0; 

function ice_beam() {
	if(playerMove == 0 && my_HP != 0) {
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
