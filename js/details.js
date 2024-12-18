class GameDetail{
    constructor(ui){
        this.ui = ui;
        this.apiKey = 'a0419f77c5msha15c8f6ac817358p190c3ajsnd5b8ddb75ad8';
        this.baseUrl = 'https://free-to-play-games-database.p.rapidapi.com/api';
    }

    async getGameDetails(id){
        this.ui.toggleLoading(true);

        const url = `${this.baseUrl}/game?id=${id}`;
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
            this.ui.showGameDetails(data);
        } catch (error) {
            console.error(error);
        }
        finally {
            this.ui.toggleLoading(false);
        }
    }

    init(){
        this.ui.gameCards(gameId => this.getGameDetails(gameId));
        this.ui.closeDetails();
    }
}

export default GameDetail;