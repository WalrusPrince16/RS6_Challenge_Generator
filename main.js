// The roller button that genrates a new challenge.
let $roll = $("#roll");
// The place where challenge text is displayed.
let $display = $("#display");

$(document).ready(()=>{
  setInterval(()=>{
    let $challenges = $("#singleOrMulti").val();
    if ($challenges === "Single Challenge") {
      $("#challengeList").empty();
    } else {
      $("#challnegeName").text("Challenge(s)");
    };
  }, 1);

  $roll.click(()=>{
    let $challenges = $("#singleOrMulti").val();
    let $team = $("#team").val();
    var flag = true;
    if ($challenges === "Multi-Challenge") {
      flag = false;
    };
    $display.empty();
    roll($team, flag);
    $(".remove").click(()=>{$(this).closest("h4").remove();
    });
  });
});

function roll($team, flag) {
  // Lists that hold the challenges for each selection.
  const atkChallenges = [
    ["Stealth Operation","No hard-breaching operators"],
    ["Blind Hour", "Don't use drones during the round"],
    ["Windows are just glass doors", "Only enter/exit through windows"],
    ["Recruit-Rush", "Finish the round within two minutes"],
    ["Anti-Meta Gang", "No ACOGs"],
    ["Super Good Advisors", "LMGs only"],
    ["Nanobot Swarm", "Only Finka can revive allies"],
    ["Seperation-Anxiety", "All Ops must be in the same room at all times"],
    ["Roblox Ops", "Recruits only"],
    ["FBI", "FBI operators only"]
    ["Beta Squad", "Ash and four recruits"],
    ["#nowalls", "Fuze, Thermite, Hibana, Maverick, Sledge"]
    ["One Shot One Kill", "Single-fire weapons only"],
    ["Don't Move, Re Re!", "DMRs only"],
    ["In & Out", "3 speed operators only"],
    ["Perfectionists", "When below 90 health, you can only use your sidearm"]
  ];
  const defChallenges = [
    ["Battle Medic", "Only Doc can heal or revive allies", ]
    ["Build Bridges", "No reinforcements or Barricades"],
    ["Home-defense", "Handguns only"],
    ["Marked for Death", "One operator must always be outside"],
    ["Nokk Virus", "No cameras, drones, or Maestro turrets"],
    ["Code M", "You cannot make callouts while alive"],
    ["Fort Castle", "Castle barricade the objective with all operators inside"],
    ["Well-rested", "The team leader can order any two operators to remain outside until death"],
    ["The Eternal Burden","The weakest team member must be vote kicked if they do not get a kill/assist"],
    ["Complete Silence", "Suppresors only and no impact grenades"],
    ["Labyrinth", "Trap operators only"],
    ["Prepared", "Use ALL gadgets in the prep phase"],
    ["Far From Home", "Reinforce a room that isn't the objective"],
    ["Wide Open", "Do not reinforce or use use trap gadgets"]
  ];
  const randomChallenges = [
    ["Male Men", "Male operators only"],
    ["Waifuwaffen", "Female operators only"],
    ["Stealth Ops", "Suppressors only"],
    ["Silence", "No explosives"],
    ["No insurance", "Don't break anything (walls, windows, doors, etc.)"],
    ["Pay-To-Lose", "DLC ops only"],
    ["Ethical Team-Killing", "No reviving"],
    ["Hipfire Squad", "Laser-sights only"],
    ["Precision Framing", "Single-shot weapons only"],
    ["Defenders", "Shotguns only"],
    ["SMG Squad", "SMGs only"],
    ["Sidearmy", "Hanguns only"],
    ["Hacked", "No marking/pinging targets"]
  ];
  // Stores a random value from each of the above lists
  let randomAtkChallenge = atkChallenges[Math.floor(Math.random()*atkChallenges.length)];
  let randomDefChallenge = defChallenges[Math.floor(Math.random()*defChallenges.length)];
  let randomChallenge = randomChallenges[Math.floor(Math.random()*randomChallenges.length)];

  let $challnegeName = $("#challnegeName");
  let $challengeItem = $("<h4 class='d-flex justify-content-between pb-2'></h4>");
  let $listButton = $("<button type='button' name='button' class='remove btn btn-warning ml-1'><i class='fas fa-times fa-2x'></i></button>");
  try {
    if ($team === "Attack") {
      if (flag) {
        $challnegeName.text(randomAtkChallenge[0]);
        $display.text(randomAtkChallenge[1]);
      } else {
        $challengeItem.text(randomAtkChallenge[1]).addClass("text-warning");
      };
    } else if ($team === "Defense") {
      if (flag) {
        $challnegeName.text(randomDefChallenge[0]);
        $display.text(randomDefChallenge[1]);
      } else {
        $challengeItem.text(randomDefChallenge[1]).addClass("text-primary");
      };
    } else {
      if (flag) {
        $challnegeName.text(randomChallenge[0]);
        $display.text(randomChallenge[1]);
      } else {
        $challengeItem.text(randomChallenge[1]);
      };
    };
  } catch (e) {
    roll($team, flag);
  } finally {
    // Caught
  };

  if (flag) {
    // Prevents the list button from being added
    // while using single challenge mode.
    return;

  } else {
    // Catches instances of blank challenges and prevents
    // them from being added.
    if ($challengeItem.text() !== "") {
      // Adds the challenge to the list.
      $("#challengeList").append($challengeItem);
      // Adds the button to the challenge.
      $challengeItem.append($listButton);
    } else {
      // Otherwise, leave the function.
      return;
    };
  };
};