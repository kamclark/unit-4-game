'use strict';

var characters = {
  solo : {
  id: 1,
  name: "Han Solo",
  hitpoints: 200,
  attackpoints: 55,
  defensepoints: 15,
  counterattackpoints: 5,
  attacknames: [
    "Shoot Second",
    "Millenium Falcon",
    "Yahoo",
  ]
  },

  jango : {
    id: 2,
    name: "Jango Fett",
    hitpoints: 120,
    attackpoints: 65,
    defensepoints: 30,
    counterattackpoints: 5,
    attackNames: [
      "Laser", "Jetpack Smash", "Bowcast Shot"
    ]
  },

  greedo : {
    id: 3,
    name: "Greedo",
    hitpoints: 110,
    attackpoints: 30,
    defensepoints: 10,
    counterattackpoints: 5,
    attacknames: [
      "Shoot First", "Dust in Eye", "Punch"
    ]
  },

  jawa : {
    id: 4,
    hitpoints: 50,
    attackpoints: 15,
    defensepoints: 5,
    counterattackpoints: 5,
    attacknames: [
      "Form Mob", "Wear Hood", "Flail"
    ]
  }
};

var character = {};
var user = {};

var enemy1 = {};
var enemy2 = {};

var userSelected = false;
var enemiesSelected = false;

var gameOver = false;

// This function will initialize the character value from the global object variables defined above
function loadCharacter(selectedCharacter) {
  character.name = selectedCharacter.name;
  character.hitpoints = selectedCharacter.hitpoints;
  character.attackpoints = selectedCharacter.attackpoints;
  character.defensepoints = selectedCharacter.defensepoints;
}

function loadEnemy1(selectedEnemy) {
  enemy1.name = selectedEnemy.name;
  enemy1.hitpoints = selectedEnemy.hitpoints;
  enemy1.attackpoints = selectedEnemy.attackpoints;
  enemy1.defensepoints = selectedEnemy.defensepoints;
}

function loadEnemy2(selectedEnemy) {
  enemy2.name = selectedEnemy.name;
  enemy2.hitpoints = selectedEnemy.hitpoints;
  enemy2.attackpoints = selectedEnemy.attackpoints;
  enemy2.defensepoints = selectedEnemy.defensepoints;
}

// when everything is finished loading
$(document).ready(function() {
  $("#player1").on("click", function () {

    // initialize character
      loadCharacter(characters.solo);
    // show character
    $("#userCard").css("background-image", "url(assets/images/characters/solo2.jpg)");
    $("#userName").append(characters.solo.name);
    $("#userHitpoints").append(characters.solo.hitpoints);
    $("#userAttack").append(characters.solo.attackpoints);
    $("#userDefense").append(characters.solo.defensepoints);

    // remove character select options
    $("#characterSelectPrompt").empty();
    $("#characterSelections").empty();

    // initialize enemies
    loadEnemy1(characters.greedo);
    loadEnemy2(characters.jawa);
    // show enemies
    $("#enemyCard1").css("background-image", "url(assets/images/characters/greedo1.jpg)");
    $("#enemy1Name").append(characters.greedo.name);
    $("#enemy1Hitpoints").append(characters.greedo.hitpoints);
    $("#enemy1Attack").append(characters.greedo.attackpoints);
    $("#enemy1Defense").append(characters.greedo.defensepoints);

    $("#enemyCard2").css("background-image", "url(assets/images/characters/jawa1.jpg)");
    $("#enemy2Name").append("Jawa Raider");
      $("#enemy2Hitpoints").append(characters.jawa.hitpoints);
    $("#enemy2Attack").append(characters.jawa.attackpoints);
    $("#enemy2Defense").append(characters.jawa.defensepoints);

    // set user and enemy to ready so combat can start
    userSelected = true;
    enemiesSelected = true;
  });

  $("#player2").on("click", function () {

    // initialize character
      loadCharacter(characters.jango);
    // show character
    $("#userCard").css("background-image", "url(assets/images/characters/jango2.jpg)");
    $("#userName").append(characters.jango.name);
    $("#userHitpoints").append(characters.jango.hitpoints);
    $("#userAttack").append(characters.jango.attackpoints);
    $("#userDefense").append(characters.jango.defensepoints);

    // remove character select options
    $("#characterSelectPrompt").empty();
    $("#characterSelections").empty();

    // initialize enemies
    loadEnemy1(characters.greedo);
    loadEnemy2(characters.jawa);

    // show enemies
    $("#enemyCard1").css("background-image", "url(assets/images/characters/greedo1.jpg)");
    $("#enemy1Name").append(characters.greedo.name);
    $("#enemy1Hitpoints").append(characters.greedo.hitpoints);
    $("#enemy1Attack").append(characters.greedo.attackpoints);
    $("#enemy1Defense").append(characters.greedo.defensepoints);

    $("#enemyCard2").css("background-image", "url(assets/images/characters/jawa1.jpg)");
    $("#enemy2Name").append("Jawa Raider");
    $("#enemy2Hitpoints").append(characters.jawa.hitpoints);
    $("#enemy2Attack").append(characters.jawa.attackpoints);
    $("#enemy2Defense").append(characters.jawa.defensepoints);

    // set user and enemy to ready so combat can start
    userSelected = true;
    enemiesSelected = true;
  });

  $("#attack1").on("click", function() {
    if (userSelected == true && enemiesSelected == true && gameOver == false) {
      enemy1.hitpoints = enemy1.hitpoints - character.attackpoints;
      if (enemy1.hitpoints <= 0) {
        enemy1.hitpoints = 0;
        $("#enemyCard1").empty();
        $("#enemyCard1").html("X");
        $("#enemyCard1").css("color", "red");      }
      $("#enemy1Hitpoints").empty();
      $("#enemy1Hitpoints").html(enemy1.hitpoints);
      if (enemy1.hitpoints == 0 && enemy2.hitpoints == 0) {
        alert("You are a winner, my friend.");
      }
      console.log("Enemy 1 Remaining HP: " + enemy1.hitpoints);
    }
  });

  $("#attack2").on("click", function() {
    if (userSelected == true && enemiesSelected == true && gameOver == false) {
      enemy2.hitpoints = enemy2.hitpoints - character.attackpoints;
      if (enemy2.hitpoints <= 0) {
        enemy2.hitpoints = 0;
        $("#enemyCard2").empty();
        $("#enemyCard2").html("X");
        $("#enemyCard2").css("color", "red");
      }
      $("#enemy2Hitpoints").empty();
      $("#enemy2Hitpoints").html(enemy1.hitpoints);
      if (enemy1.hitpoints == 0 && enemy2.hitpoints == 0) {
        alert("You are a winner, my friend.");
      }
      console.log("Enemy 2 Remaining HP: " + enemy2.hitpoints);
    }
  });
  if (enemy1.hitpoints == 0 && enemy2.hitpoints == 0) {
    alert("You are a winner, my friend.");
  }

});
