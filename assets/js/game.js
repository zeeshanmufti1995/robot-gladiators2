var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {

    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // Alert players that they are starting the round
    if (promptFight === "FIGHT" || promptFight === "fight") {
        
  
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth =  enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyNames + " . " + enemyNames + " now has " + enemyHealth + "left."
    );
   
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack ;

  // Log a resulting message to the console so we know that it worked.
  console.log(enemyNames + " attacked " + playerName+ " . " + playerName+ " now has " + playerHealth + "left."
  );

  // check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
 // check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyNames + " has died!");
  } 
  else {
    window.alert(enemyNames + " still has " + enemyHealth + " health left.");
  }
    }
 else if (promptFight === "skip" || promptFight === "SKIP") {

    confirmSkip = confirm("Are you sure you'd like to quit?");

    if (confirmSkip) {

        window.alert(playerName + " has chosen to skip the fight!");
        playerMoney = playerMoney - 2;
        }
        else{
            fight();
        }

 

  } else {
    window.alert("You need to choose a valid option. Try again!");
  }

  };
 
 
  for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }


