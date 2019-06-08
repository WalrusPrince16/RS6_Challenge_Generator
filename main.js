

$(document).ready(function(){
  // When the roll button is clicked...
  $("#roll").click(function(){
    // Create a var equal to the value of the option form
    var $option = $("#exampleFormControlSelect1").val();
    // then call a function with it as its parameter.
    roll($option);
  });
});


/// Seclects a raondom challnege

function roll($option) {

  var atkChallenges = [
    "no hard-breaching Ops", "don't use drones",
    "only enter through windows", "finish the round within 1:30",
    "no ACOGs", "LMGs only", "Only Finka can revive allies",
    "all Ops must be in the same room at all times",
    "recruits only", "ash and four recruits",
    "Fuze, Thermite, Hibana, Maverick, Sledge",
    "if you are shot, you must be still for 10 seconds",
    "DMRs only", "3 speed Ops only", "only shoot if you are at full health",
  ];


  var defChallenges = [
    "only Doc can heal or revive", "no reinforcements or barricades",
    "handguns only", "one op must always be outside", "no cams unless you're dead",
    "no callouts allowed", "no shooting outside", "castle barricade the objective",
    "the team point leader does not have to move and can rest his aching back",
    "the one with the least points must run outside and stay there until death or the end of the round",
    "you must be in a mute jammer's range to shoot", "trap ops only",
    "use all gadgets in the prep phase", "use Ops that aren't recruits but don't use their unique gadgets",
    "choose a hiding spot and stay there all round"
  ];


  var randomChallenge = [
    "male Ops only", "female Ops only", "suppressors only",
    "no explosives", "don't break anything (walls, windows, doors, etc.)",
    "DLC ops only", "no reviving", "no crouching", "laser sights only",
    "team shoot each other until you're all below 10 health",
  ];

  // Stores a random value from each of the above lists

  var randomAtkChallenge = atkChallenges[Math.floor(Math.random()*atkChallenges.length)];
  var randomDefChallenge = defChallenges[Math.floor(Math.random()*defChallenges.length)];
  var randomChallenge = randomChallenge[Math.floor(Math.random()*randomChallenge.length)];

  var $display = $("#display");

  if ($option === "Attack") {
    $display.text(randomAtkChallenge);
  } else if ($option == "Defense") {
    $display.text(randomDefChallenge);
  } else {
    $display.text(randomChallenge);
  };
};
