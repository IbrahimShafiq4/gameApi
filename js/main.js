import { Game } from "./game.js";
import { Details } from "./details-module.js";
import { Display } from "./ui-module.js";

// ! HTML Varaibles

let iconDiv = document.querySelector(".icon");
let linksDiv = document.querySelector(".links");
let hideBtn = document.querySelector(".hide-modal");
export let mainDiv = document.querySelector("main");
export let detailsDiv = document.querySelector(".details");
export let gameBoxContainer = document.querySelector(".games .row");
let allLinks = document.querySelectorAll("li a");
let input = document.querySelector("input");

// ^ js Varaibles
export let gameContent;
export let gameDetailsForTheGame;

function displayActiveElement() {
  allLinks.forEach(function (el) {
    if (el.classList.contains("active")) {
      let gameVariable = new Game(el.innerText);
      gameContent = gameVariable;
      let details = new Display();
      details.displayGames();
    }
  });
}

function getNamesOfTheCategory() {
  for (let i = 0; i < allLinks.length; i++) {
    displayActiveElement();
    allLinks[i].addEventListener("click", function (e) {
      allLinks.forEach((el) => el.classList.remove("active"));
      e.target.classList.add("active");
      if (e.target.classList.contains("active")) {
        let gameVariable = new Game(e.target.innerText);
        gameContent = gameVariable;
        let details = new Display();
        details.displayGames();
      }
    });
  }
}

getNamesOfTheCategory();

export async function getInfo(id) {
  let gameId = new Details(id);
  let gameDet = await gameId.getDetailsOfTheGame();
  // console.log(gameDet);
}

iconDiv.onclick = function () {
  iconDiv.classList.toggle("active");
  linksDiv.classList.toggle("active");
};

input.addEventListener("input", function () {
  let gameVariable = new Game(this.value);
  gameContent = gameVariable;
  let details = new Display();
  details.displayGames();
});

hideBtn.onclick = function () {
  if (hideBtn.innerText === "Hide Modal") {
    $(".top-section").fadeOut(1000, function () {
      $(".games").animate({ marginTop: "0px" });
    });
    hideBtn.innerText = "UnHide Modal";
  } else {
    $(".games").animate({ marginTop: "60px" }, function () {
      $(".top-section").fadeIn(1000);
    });
    hideBtn.innerText = "Hide Modal";
  }
};

$(".closeBtn").click(function() {
  hide();
});

export function hide() {
  mainDiv.classList.replace("d-none", "d-block");
  detailsDiv.classList.replace("d-block", "d-none");
}

export function show() {
  detailsDiv.classList.replace("d-none", "d-block");
  mainDiv.classList.replace("d-block", "d-none");
}

document.addEventListener('keydown', function(e) {
  if (e.code == 'Escape') {
    hide();
  }
})


// async function returnedBox() {
//     let contentVari = new Display();
//     box = await contentVari.displayGames();
//     return box;
// }

// let boxEl = returnedBox();
// window.addEventListener('load', async function() {
//     let boxElement = await boxEl;
//     for (let i = 0; i < boxElement.length; i++) {
//         boxElement[i].addEventListener('click', function() {
//             console.log(boxElement[i].getAttribute('data-id'))
//         })
//     }
// })

// function displayDetailsForTheClickedGame() {
//     let detailsOfTheGame = new Details();
//     gameDetailsForTheGame = detailsOfTheGame.getDetailsOfTheGame();
//     let details = new Display();
//     details.displayDetails();
// }

// // displayDetailsForTheClickedGame()
// let box;

export let detailsContainer = document.querySelector(".details .container");
// import { gameBox } from "./ui-module.js";

// export let gameBox = document.querySelector('.games .row .box');
