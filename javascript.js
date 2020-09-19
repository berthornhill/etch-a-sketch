// CREATE CSS GRID-CONTAINER FOR PARENT DIV BASED ON SIZE OF GRID

const tester = document.getElementById("grid-container");
var chooseColor = 1;

// SELF INITIALIZING FUNCTION TO CALL createGrid() UPON PAGE LOAD with an agument of 16.
(function () {
  createGrid(16);
})();
// FUNCTION TO CREATE AND DISPLAY X NUMBER OF DIVs INSIDE THE GRID-CONTAINER.
// -- INCLUDES LISTENER FUNCTION TO CHANGE BACKGROUND COLOR ON MOUSE HOVER.
function createGrid(num) {
  document.documentElement.style.setProperty("--gridSize", num);
  y = num * num;
  for (x = 0; x < y; x++) {
    const divMaker = document.createElement("div");
    tester.appendChild(divMaker);
    divMaker.className = "sketch-box";
  }
  // LISTENER TO CHANGE BACKGROUND COLOR ON MOUSE HOVER.
  const sketchBox = document.querySelectorAll(".sketch-box").forEach((item) => {
    item.addEventListener("mouseover", function (event) {
      // item.setAttribute("style", "background-color: darkgoldenrod;");
      event.target.style.backgroundColor = color();
    });
  });
}

//  CREATES EVENT LISTENER TO RESET GRID AND PROMPT USER FOR DESIRED GRID SIZE.
const restartButton = document.getElementById("btn");
restartButton.addEventListener("click", function (event) {
  // RESETS GRID BY CHANGING INNER HTML OF 'GRID-CONTAINER' TO '' BEFORE CALLING createGrid() with user input.
  var refresh = document.getElementById("grid-container");
  refresh.innerHTML = "";
  //  PROMTS USER FOR NEW BOX SIZE
  sizePrompt();
});

// PROMPTS USER FOR INPUT BETWEEN 2..30 AND RUNS createGrid() AFTER RECIEVING VALID INPUT.
function sizePrompt() {
  num = window.prompt(
    "How many squares wide would you like to make the Etch-A-Sketh? Choose a number between 2 and 30"
  );
  if (num < 2 || num > 30) {
    sizePrompt();
  } else {
    createGrid(num);
  }
}

// FUNCTION TO MANAGE COLOR OPTIONS.
function color() {
  if (chooseColor == 1) {
    return "rgb(0,0,0)";
  } else if (chooseColor == 2) {
    return randomColor();
  } else if (chooseColor == 3) {
    return "rgba(0,0,0," + Math.random() + ")";
  }
}

// RANDOM COLOR GENERATOR
function randomColor() {
  var r = getRandomInt(256);
  var g = getRandomInt(256);
  var b = getRandomInt(256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

// GETS RANDOM NUMBER
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// EVENT LISTENER FOR COLOR CHANGE BUTTONS

const colorful = document.getElementById("colorful");
colorful.addEventListener("click", function (e) {
  if (chooseColor == 1 || chooseColor == 3) {
    chooseColor = 2;
  } else {
    chooseColor == 1;
  }
});

const grayScale = document.getElementById("grayScale");
grayScale.addEventListener("click", function (e) {
  if (chooseColor == 1 || chooseColor == 2) {
    chooseColor = 3;
  } else {
    chooseColor == 1;
  }
});
