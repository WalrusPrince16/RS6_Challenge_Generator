

$(document).ready(function(){
  $("#roll").click(function(){
    var $option = $("#exampleFormControlSelect1").val();
    roll($option);
  });
});

function roll($option) {

  var atkChallenges = ["a1", "a2", "a3"];
  var defChallenges = ["d1", "d2", "d3"];
  var randomChallenge = ["e1", "e2", "e3"];

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
