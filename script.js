/* Troll Game Project 3/22/2022 */

// Definition of the trollBattle() function which runs the game
function trollBattle() {
	//clear any losing messages from the document
	document.getElementById("death").innerHTML = "";
	document.getElementById("result").innerHTML = "";

	// initial prompt for the user that gets stored in a variable
	let action = window.prompt("You're walking through the forest minding your own business and a troll suddenly appears! \n\nDo you FIGHT the troll?\n\n Do you RUN from the troll?\n\nDo you BRIBE the troll?").toUpperCase();

	// switch statement to handle the players intital choice
	switch(action) {
		case "FIGHT" : {
			let skill = window.prompt("Are you a skilled fighter?(YES or NO?)").toUpperCase();

			let strong = window.prompt("Are your stronger than a troll?(YES or NO?)").toUpperCase();

			// if statement that analyses user repsonses
			if(skill === "YES" || strong === "YES") {
				// the reason why we're here is that the user said yes to at leaat one of those prompts
				// write winning result to document
				document.getElementById("result").innerHTML = "You can either be more skilled or stronger than a troll to survive <br> You live another day!"

				
				

				//play the winning audio file
				document.getElementById("win").play();
			}
			else {
				// user said no to both prompts
				//write negative result to the document
				document.getElementById('death').innerHTML = "You are not skilled or strong? Why did you fight a troll!<br>You have died!";
				document.getElementById("lose").play();
			}
			break;
		} //end of case FIGHT
		case "RUN" : {
			let fast = window.prompt("Are you fast? (YES OR NO?)").toUpperCase();
			if (fast === "YES") {
				//write positive result to document
				document.getElementById("result").innerHTML = "Your speed has saved you!<br> But can you live with your cowardice?";
				//play the winning audio file
				document.getElementById("win").play();
			} else {
				//write the negatove result through the document 
				document.getElementById("death").innerHTML = "If you are going to be a coward, at least be fast!<br>You have died!";
				//play the losing audio file
				document.getElementById("lose").play();
			}
			break;
		}// end of case RUN
		case "BRIBE" : {
			let money = window.prompt("You have to pay troll toll!\nDo you have any money?(YES or NO?)").toUpperCase();
			//only ask if they certain amount if they say YES to the first prompt
			if (money === "YES") {
				let amount = window.prompt("How much money do you have?\nPlease enter a numeric value");
				//convert string to integer
				amount = parseInt(amount);
				// check the amount against our condition
				if (amount > 50) {
					//write the positive result to the document
					document.getElementById("result").innerHTML = "Great job! The troll is happy!<br> You may pass!";

					document.getElementById("win").play();
				}
				else {
				//user has money just not enough
				//write negative result for scenario
				document.getElementById("death").innerHTML = "The troll needs more money than that. <br> You have died!";
				//play lsoing audio file
				document.getElementById("lose").play();

				}
			}else {
				//user said no to having any money
				document.getElementById("death").innerHTML = "What were you planning on bribing the troll with?<br> You have died!";
				//play losing audio file
				document.getElementById("lose").play();
			}
			//end of case bribe
			default: {
				window.alert("You entered:" + action + "that is not a valid choice! Please try again!");
				//run the trollBattle funtion again from the beginning
				trollBattle();
				break;
			}//end of default case
	
	} //end of switch statement
}// end of trollBattle() function