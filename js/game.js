export class Game {
  constructor(category) {
    this.g = category;
  }

  getApiReady() {
    return `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.g}`;
  }

  async getGames() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4c7677fb3amshca16a1ccba2cb43p1a7ffdjsn15dbb737351a",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const games = await (await fetch(this.getApiReady(), options)).json();
    return games;
  }
}
