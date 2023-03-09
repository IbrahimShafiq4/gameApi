export class Details {
  constructor(id) {
    this.i = id;
  }

  getApiReady() {
    return `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.i}`;
  }

  async getDetailsOfTheGame() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4c7677fb3amshca16a1ccba2cb43p1a7ffdjsn15dbb737351a",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const details = await (await fetch(this.getApiReady(), options)).json();
    console.log(details);
    return details;
  }
}
