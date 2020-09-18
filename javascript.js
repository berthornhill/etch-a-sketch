// CREATE CSS GRID-CONTAINER FOR PARENT DIV BASED ON SIZE OF GRID

const tester = document.getElementById("grid-container");

// CREATES 16 NUMBER OF DIVS
(function () {
  y = 256;
  for (x = 0; x < y; x++) {
    const divMaker = document.createElement("div");
    tester.appendChild(divMaker);
    divMaker.className = "sketch-box";
  }
})();

// LISTENER TO CHANGE COLOR OF DIVS IN SKETCHBOX

const sketchBox = document.querySelectorAll(".sketch-box").forEach((item) => {
  item.addEventListener("mouseover", function (event) {
    item.setAttribute("style", "background-color: darkgoldenrod;");
  });
});

// Listener for button click

// // CREATES 16 NUMBER OF DIVS

// function createGrid(num) {
//   document.documentElement.style.setProperty('--gridSize', num);
//   y = num * num;
//   for (x = 0; x < y; x++) {
//     const divMaker = document.createElement("div");
//     tester.appendChild(divMaker);
//     divMaker.className = "sketch-box";
//   }
// }
