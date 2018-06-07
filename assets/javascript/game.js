'use strict';

var solo = {
  "id": 1,
  "name": "Han Solo",
  "hitpoints": 200,
  "attackpoints": 55,
  "defensepoints": 15,
  "counterattackpoints": 5,
  "attacknames": [
    "Shoot Second",
    "Millenium Falcon",
    "Yahoo",
  ]
};

var greedo = {
  "id": 2,
  "name": "Greedo",
  "hitpoints": 110,
  "attackpoints": 30,
  "defensepoints": 10,
  "counterattackpoints": 5,
  "attacknames": [
    "Shoot First",
    "Millenium Falcon",
    "Yahoo",
  ]
};

var jango = {
  "id": 3,
  "name": "Jango Fett",
  "hitpoints": 120,
  "attackpoints": 65,
  "defensepoints": 30,
  "counterattackpoints": 5,
  "attacknames": [
    "Clone",
    "Jetpack",
    "Yahoo",
  ]
};

var jawa = {
  "id": 4,
  "name": "Jawa Raider",
  "hitpoints": 50,
  "attackpoints": 15,
  "defensepoints": 5,
  "counterattackpoints": 5,
  "attacknames": [
    "Mob",
    "Wear Hood",
    "Yahoo",
  ]
};

var userID = solo.id;

// when everything is finished loading
$(document).ready(function() {
  $("#player1").click(function(){
    // on click of first character image, populate user card
    $("#userCard").css("background-image", "url(assets/images/characters/solo2.jpg)");
    $("#userName").append(solo.name);
    $("#userHitpoints").append(solo.hitpoints);
    $("#userAttack").append(solo.attackpoints);
    $("#userDefense").append(solo.defensepoints);

    // remove character select options
    $("#characterSelectPrompt").empty();
    $("#characterSelections").empty();

    // generate random enemies
    generateEnemies();

    // update attack buttons
    updateAttacks();
  })


    $("#player2").click(function(){
      var userID = jango.id;
      // on click of second character image, populate user card
      $("#userCard").css("background-image", "url(assets/images/characters/jango2.jpg)");
      $("#userName").append(jango.name);
      $("#userHitpoints").append(jango.hitpoints);
      $("#userAttack").append(jango.attackpoints);
      $("#userDefense").append(jango.defensepoints);

      // remove character select options
      $("#characterSelectPrompt").empty();
      $("#characterSelections").empty();

      // generate random enemies
      generateEnemies();
      updateAttacks();
    })

  // select random number for enemy
  var enemyRandom = Math.round(Math.random());

  function updateAttacks() {
    if (userID == 1) {
      $("#attack1").text(solo.attacknames[0]);
      $("#attack1").val(solo.attacknames[0]);
      $("#attack2").text(solo.attacknames[1]);
      $("#attack2").val(solo.attacknames[1]);
      $("#attack3").text(solo.attacknames[2]);
      $("#attack3").val(solo.attacknames[2]);
       }

    else if (userID == 3) {
      $("#attack1").text(jango.attacknames[0]);
      $("#attack1").val(jango.attacknames[0]);
      $("#attack2").text(jango.attacknames[1]);
      $("#attack2").val(jango.attacknames[1]);
      $("#attack3").text(jango.attacknames[2]);
      $("#attack3").val(jango.attacknames[2]);
    }

  }
  function generateEnemies() {
    if (enemyRandom == 1) {
      $("#enemyCard1").css("background-image", "url(assets/images/characters/greedo1.jpg)");
      $("#enemy1Name").append(greedo.name);
      $("#enemy1Hitpoints").append(greedo.hitpoints);
      $("#enemy1Attack").append(greedo.attackpoints);
      $("#enemy1Defense").append(greedo.defensepoints);

      $("#enemyCard2").css("background-image", "url(assets/images/characters/jawa1.jpg)");
      $("#enemy2Name").append(jawa.name);
      $("#enemy2Hitpoints").append(jawa.hitpoints);
      $("#enemy2Attack").append(jawa.attackpoints);
      $("#enemy2Defense").append(jawa.defensepoints);
    }

    else if (enemyRandom == 0)
    {
      $("#enemyCard1").css("background-image", "url(assets/images/characters/jawa1.jpg)");
      $("#enemy1Name").append(jawa.name);
      $("#enemy1Hitpoints").append(jawa.hitpoints);
      $("#enemy1Attack").append(jawa.attackpoints);
      $("#enemy1Defense").append(jawa.defensepoints);

      $("#enemyCard2").css("background-image", "url(assets/images/characters/jawa1.jpg)");
      $("#enemy2Name").append(jawa.name);
      $("#enemy2Hitpoints").append(jawa.hitpoints);
      $("#enemy2Attack").append(jawa.attackpoints);
      $("#enemy2Defense").append(jawa.defensepoints);
    }
  }
});
