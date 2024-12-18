class Home {
    constructor(ui) {
        this.ui = ui;
        this.apiKey = 'a0419f77c5msha15c8f6ac817358p190c3ajsnd5b8ddb75ad8';
        this.baseUrl = 'https://free-to-play-games-database.p.rapidapi.com/api';
    }

    async getGames(category ='mmorpg') {
        this.ui.toggleLoading(true);

        const url = `${this.baseUrl}/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': this.apiKey,
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            this.ui.renderGames(data);
        } catch (error) {         
            console.error(error);
        }
        finally {
            this.ui.toggleLoading(false);
        }
    }
    init(){
        this.getGames();
        this.ui.categoryNavigate(category => this.getGames(category));
    }
}

export default Home;