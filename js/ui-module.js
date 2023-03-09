import { Details } from "./details-module.js";
import { detailsContainer, gameBoxContainer, gameContent } from "./main.js";
import { show, hide } from "./main.js";

export let gameBox;

export class Display {
  async displayGames() {
    let gameArr = await gameContent.getGames();
    let contentBx = "";
    for (let i = 0; i < gameArr.length; i++) {
      contentBx += `
                <div class="col-md-6 col-lg-3 game-card" data-id=${
                  gameArr[i].id
                }>
                    <div class="box">   
                        <img src="${
                          gameArr[i].thumbnail
                        }" class="w-100 mb-3" alt="fortnite">
                        <div class="content d-flex align-items-center justify-content-between">
                            <p class="gameName fs-4 fw-bold text-white">
                                ${gameArr[i].title
                                  .split(" ")
                                  .slice(0, 1)
                                  .join(" ")}
                            </p>
                            <p class="free">
                                Free
                            </p>
                        </div>
                        <div class="middle-content">
                            <p class="text-center text-white-50">
                                ${gameArr[i].short_description
                                  .split(" ")
                                  .slice(0, 5)
                                  .join(" ")}
                            </p>
                        </div>
                        <div class="bottom-content d-flex justify-content-between align-items-center">
                            <p class="text-white-50">
                                ${gameArr[i].genre}
                            </p>
                            <p class="text-white-50">
                                ${gameArr[i].platform
                                  .split(" ")
                                  .slice(0, 2)
                                  .join(" ")}
                            </p>
                        </div>
                    </div>
                </div>

            `;
    }
    gameBoxContainer.innerHTML = contentBx;

    const allCards = document.querySelectorAll(".game-card");
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].addEventListener("click", async (e) => {
        const gameDetails = new Details(e.currentTarget.dataset.id);
        const gameInfo = await gameDetails.getDetailsOfTheGame();
        console.log(gameInfo)
        this.displayDetails(gameInfo);
        show()
      });
    }
  }

  displayDetails(details) {
    let contentBx = `
            <div class="top-content d-flex align-items-center justify-content-between">
                <h2 class="GameDetail text-white mb-3">Game Details</h2>
                <i class="closeBtn fa-solid fa-close text-white fa-2x""></i>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <img src="${details.thumbnail}" class="w-100 rounded-4" alt="${details.title}" />
                </div>
                <div class="col-md-8">
                    <p class="title mb-4 text-white">Title: <span class="tit">${details.title}</span></p>
                    <p class="category mb-4 text-white">Category: <span class="cat">${details.genre}</span></p>
                    <p class="platform mb-4 text-white">Platform: <span class="plat">${details.platform
                                  .split(" ")
                                  .slice(0, 2)
                                  .join(" ")}</span></p>
                    <p class="status mb-4 text-white">Status: <span class="stat">${details.status}</span></p>
                    <p class="desc mb-5">
                        ${details.description}
                    </p>
                    <a href="${details.game_url}" target="_blank" class="px-4 py-2 text-decoration-none anchor">Show Game</a>
                </div>
            </div>
        `;

    detailsContainer.innerHTML = contentBx;
    const closeBtn = document.querySelector('.closeBtn');
    closeBtn.addEventListener('click', hide)
  }
}