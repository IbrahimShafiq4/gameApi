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

// description
// : 
// "Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed. In Lost Ark, players enter the world of Arkesia and embark on a journey across several lands in a quest to locate the Ark of Legends. Stop the demon Kazeros and his army before they seize control. And hurry, the demons are searching for the Ark too.\r\n\r\nChoose to play as one of several classes ranging from the sword-wielding warrior to a mage or even the gunner – each with several advanced class options. Play alone or with friends (or acquaintances) to explore seven vast continents filled with strange cultures and creatures. Fight in PvP, explore dungeons, and work together in raids. Decide what you like to do best and go for it – but don’t forget to save the world.\r\n\r\nLost Ark offers an easy-to-learn system with plenty of room to customize. Use the game’s ‘Tripod’ system to unlock up to three tiers of customization for each ability and create the combat style that works best for you.\r\n\r\nAs for other features, Lost Ark offers crafting, guilds, and other systems players expect from online games. Whatever you want to do, it’s up to you.\r\n"
// developer
// : 
// "Smilegate RPG"
// freetogame_profile_url
// : 
// "https://www.freetogame.com/lost-ark"
// game_url
// : 
// "https://www.freetogame.com/open/lost-ark"
// genre
// : 
// "ARPG"
// id
// : 
// 517
// minimum_system_requirements
// : 
// {os: 'Windows 10 (64-bit only)', processor: 'Intel i3 or AMD Ryzen 3', memory: '8 GB RAM', graphics: 'NVIDIA GeForce GTX 460 / AMD HD6850', storage: '50 GB available space'}
// platform
// : 
// "Windows"
// publisher
// : 
// "Amazon Games"
// release_date
// : 
// "2022-02-11"
// screenshots
// : 
// (3) [{…}, {…}, {…}]
// short_description
// : 
// "Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed."
// status
// : 
// "Live"
// thumbnail
// : 
// "https://www.freetogame.com/g/517/thumbnail.jpg"
// title
// : 
// "Lost Ark"