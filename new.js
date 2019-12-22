var roll = document.getElementById("roll");
var display = document.getElementById("display");
var singleOrMulti = document.getElementById("singleOrMulti");
var team = document.getElementById("team");
var challengeName = document.getElementById("challnegeName");
var challengeList = document.getElementById("challengeList");
var displaySingleChallenge = document.getElementById("display");

var singleChallenge = true;
var teamName = team.value;

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

init();

function init() {
    singleOrMulti.addEventListener("change", function() {
        singleChallenge = !(singleChallenge);
        if (singleChallenge == false) {
            challengeName.textContent = "Multi Challenge Mode"
            displaySingleChallenge.textContent = "";
        } else {
            challengeList.innerHTML = ""
        }
    });
    team.addEventListener("change", function(){
        teamName = team.value;
    });
    roll.addEventListener("click", displayChallenges);
}

function displayChallenges() {
    var challenge = getChallenge();
    renderChallenge(challenge);
}

function getChallenge() {
    if (teamName == "Attack") {
        return atkChallenges[Math.floor(Math.random()*atkChallenges.length)];
    } else if (teamName == "Defense") {
        return defChallenges[Math.floor(Math.random()*defChallenges.length)];
    } else {
        return randomChallenges[Math.floor(Math.random()*randomChallenges.length)];
    }
}

function renderChallenge(arr) {
    if (singleChallenge) {
        challengeName.textContent = arr[0];
        displaySingleChallenge.textContent = arr[1];
    } else {
        var elem = `<li class="pl-3 text-success">${arr[1]}</li>`;
        challengeList.innerHTML += elem;
    }
}