// JavaScript Quiz

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let answer1 = document.getElementById("q1").value.toLowerCase();
  let answer2 = document.getElementById("q2").value.toLowerCase();
  let answer3 = document.getElementById("q3").value.toLowerCase();
  let answer4 = document.getElementById("q4").value.toLowerCase();

  let result1 = 0;
  let result2 = 0;
  let result3 = 0;
  let result4 = 0;

  // Quiz Answers
  if (answer1 == "islamabad") {
    document.getElementById("q1").style.backgroundColor = "lightgreen";
    document.getElementById("out1").innerHTML = `Correct!`;
    result1 = 1;
  } else {
    document.getElementById("q1").style.backgroundColor = "red";
    document.getElementById(
      "out1"
    ).innerHTML = `Incorrect! The correct answer is Islamabad`;
    result1 = 0;
  }

  if (answer2 == "cricket") {
    document.getElementById("q2").style.backgroundColor = "lightgreen";
    document.getElementById("out2").innerHTML = `Correct!`;
    result2 = 1;
  } else {
    document.getElementById("q2").style.backgroundColor = "red";
    document.getElementById(
      "out2"
    ).innerHTML = `Incorrect! The correct answer is cricket`;
    result2 = 0;
  }

  if (answer3 == "bangladesh") {
    document.getElementById("q3").style.backgroundColor = "lightgreen";
    document.getElementById("out3").innerHTML = `Correct!`;
    result3 = 1;
  } else {
    document.getElementById("q3").style.backgroundColor = "red";
    document.getElementById(
      "out3"
    ).innerHTML = `Incorrect! The correct answer is Bangladesh`;
    result3 = 0;
  }

  if (answer4 == "four" || answer4 == "4" || answer4 == "iv") {
    document.getElementById("q4").style.backgroundColor = "lightgreen";
    document.getElementById("out4").innerHTML = `Correct!`;
    result4 = 1;
  } else {
    document.getElementById("q4").style.backgroundColor = "red";
    document.getElementById(
      "out4"
    ).innerHTML = `Incorrect! The correct answer is 4`;
    result4 = 0;
  }

  let score = ((result1 + result2 + result3 + result4) / 4) * 100;
  let sum = result1 + result2 + result3 + result4;

  if (sum == 0 || sum == 1) {
    document.getElementById("output").innerHTML = `Please read again.`;
  } else if (sum == 2) {
    document.getElementById("output").innerHTML = `Halfway there.`;
  } else if (sum == 3) {
    document.getElementById("output").innerHTML = `Very close!`;
  } else {
    document.getElementById(
      "output"
    ).innerHTML = `You aced this quiz, congratulations!!!`;
  }
  document.getElementById("scores").innerHTML =
    `You got ` + sum + `/4! (` + score + `%)`;
}
