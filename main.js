

$(document).ready(function(){
  // When the roll button is clicked...
  $("#roll").click(function(){
    // Create a var equal to the value of the option form
    var $option = $("#exampleFormControlSelect1").val();
    // then call a function with it as its parameter.
    roll($option);
  });

  $("#prev").click(function(){

  });
  $("#next").click(function(){

  })
});


/// Seclects a raondom challnege

function roll($option) {

  var atkChallenges = [
    ["no loud noises","no hard-breaching Ops"],
    ["blind hour", "don't use drones"],
    ["windows are just glass doors", "only enter through windows"],
    ["the ultimate rush", "finish the round within 1:30"],
    ["anti-meta gang", "no ACOGs"],
    ["super good advisors", "LMGs only"],
    ["nanobot swarm", "Only Finka can revive allies"],
    ["seperation-anxiety", "all Ops must be in the same room at all times"],
    ["roblox ops", "recruits only"],
    ["beta squad", "ash and four recruits"],
    ["#nowalls", "Fuze, Thermite, Hibana, Maverick, Sledge"]
    ["one shot one death", "if you are shot, you must be still for 10 seconds"],
    ["long-range gang", "DMRs only"],
    ["speedy bois unite", "3 speed Ops only"],
    ["Perfectionists", "you can only only shoot if you are at full health"]
  ];

  var defChallenges = [
    ["ok guys, team kill doc", "only Doc can heal or revive", ]
    ["build bridges not walls", "no reinforcements or barricades"],
    ["home-defense", "handguns only"],
    ["marked for death", "one op must always be outside"],
    ["the afterlife in seige", "no cams unless you're dead"],
    ["the m-strat", "no callouts allowed"],
    ["shhh! the sun people will hear us!", "no shooting outside"],
    ["team player", "castle barricade the objective"],
    ["nap time", "the team point leader does not have to move and can rest his aching back"],
    ["make yourself useful","the one with the least points must run outside and stay there until death or the end of the round"],
    ["mobile silencer", "you must be in a mute jammer's range to shoot"],
    ["trap-clap", "trap ops only"],
    ["prepared", "use all gadgets in the prep phase"],
    ["busted right bumper", "use Ops that aren't recruits but don't use their unique gadgets"],
    ["hide & hide", "choose a hiding spot and stay there all round"]
  ];


  var randomChallenge = [
    ["high-t squad", "male Ops only"],
    ["dead on arrival", "female Ops only"],
    ["stealth boys", "suppressors only"],
    ["ptsd platoon", "no explosives"],
    ["no insurance", "don't break anything (walls, windows, doors, etc.)"],
    ["pay-to-lose", "DLC ops only"],
    ["ethical team-killing", "no reviving"],
    ["broken-knees", "no crouching"],
    ["hipfire horde", "laser sights only"],
    ["bleeding out", "team shoot each other until you're all below 10 health"]
  ];

  // Stores a random value from each of the above lists

  var randomAtkChallenge = atkChallenges[Math.floor(Math.random()*atkChallenges.length)];
  var randomDefChallenge = defChallenges[Math.floor(Math.random()*defChallenges.length)];
  var randomChallenge = randomChallenge[Math.floor(Math.random()*randomChallenge.length)];

  var $display = $("#display");
  var $challnegeName = $("#challnegeName");

  if ($option === "Attack") {
    $challnegeName.text(randomAtkChallenge[0])
    $display.text(randomAtkChallenge[1]);
  } else if ($option == "Defense") {
    $challnegeName.text(randomDefChallenge[0])
    $display.text(randomDefChallenge[1]);
  } else {
    $challnegeName.text(randomChallenge[0])
    $display.text(randomChallenge[1]);
  };
};
