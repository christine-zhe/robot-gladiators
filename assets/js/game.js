// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = 'Clank McKrank';
// var playerName = window.prompt("What is your robot's name?");
// ask player if they'd like to fight or run


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// console.log(playerName, playerAttack, playerHealth);
// console.log(enemyNames);
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);

// console.log(enemyNames.length);

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
  }

// fight function
var fight = function(enemyName) {
    // Alert players that they are starting the round
   
  while (enemyHealth>0 && playerHealth > 0){
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + " has decided to skip this fight. Goodbye!");
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney);
          break;

        }
    }
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }

  };

var startGame = function() {

    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0){
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
    
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
          }
      
        }
        var endGame = function() {

            if (playerHealth > 0 ) {
                window.alert("The game has now ended. Let's see how you did!");
            }
          else {
              window.alert("You've lost your robot in battle.");
          }
        var playAgainConfirm = window.confirm("Would you like to play again");
          if (playAgainConfirm) {
        startGame();
          }
        
          else {
              window.alert("Thank you for playing! Come back Soon");
          }
        };
        // startGame();
        endGame();
};

startGame();

debugger;


// start the game when the page loads


//  // if player choses to fight, fight
//  if (promptFight === "fight" || promptFight === "FIGHT") {
//     // remove enemy's health by subtracting the amount set in the playerAttack variable
//     enemyHealth = enemyHealth - playerAttack;
//     console.log(
//       playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
//     );

//     // check enemy's health
//     if (enemyHealth <= 0) {
//       window.alert(enemyName + " has died!");
//       break;
//     } else {
//       window.alert(enemyName + " still has " + enemyHealth + " health left.");
//     }

//       // remove players's health by subtracting the amount set in the enemyAttack variable
//       playerHealth = playerHealth - enemyAttack;
//       console.log(
//         enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
//       );

//       // check player's health
//       if (playerHealth <= 0) {
//         window.alert(playerName + " has died!");
//         break;
//       } else {
//         window.alert(playerName + " still has " + playerHealth + " health left.");
//       }
//       // if player choses to skip
//     }  
//       }
//       // if no (false), ask question again by running fight() again
//       else {
//         fight();
//       }
//       // if player did not chose 1 or 2 in prompt
//     } else {
//       window.alert("You need to pick a valid option. Try again!");
//     } 
    



//   };

  


  

  // run fight function to start game
