import UI from './ui.js';
import Home from './home.js';
import GameDetail from './details.js';

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    const home = new Home(ui);
    const gameDetail = new GameDetail(ui);

    home.init();
    gameDetail.init();
});