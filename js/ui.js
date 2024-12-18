class UI {
    constructor() {
        this.gameContainer = document.getElementById('gameData');
        this.details = document.querySelector('.details');
        this.btnClose = document.getElementById('btnClose');
        this.detailsContent = document.getElementById('detailsContent');
        this.loading = document.querySelector('.loading');
        this.navItems = document.querySelectorAll('.nav-link');
        this.gamesSection = document.querySelector('.games');
        this.mainSection = document.querySelector('main.home');
    }

    clearGameCards() {
        this.gameContainer.innerHTML = '';
    }

    renderGames(games) {
        this.clearGameCards();
        games.forEach(game => {
            const gameCard = this.createGameCard(game);
            this.gameContainer.appendChild(gameCard);
        });
    }

    createGameCard(game) { 
        const col = document.createElement('div');
        col.className = 'col';

        col.innerHTML = `
            <div data-id="${game.id}" class="card h-100 bg-transparent" role="button">
                <div class="card-body">
                    <figure class="position-relative">
                        <img class="card-img-top object-fit-cover h-100" src="${game.thumbnail}">
                    </figure>
                    <figcaption>
                        <div class="hstack justify-content-between">
                            <h3 class="h6 small">${game.title}</h3>
                            <span class="badge text-bg-primary p-2">Free</span>
                        </div>
                        <p class="card-text small text-center opacity-50">
                            ${game.short_description.split(' ').slice(0, 5).join(' ')}...
                        </p>
                    </figcaption>
                </div>
                <footer class="card-footer small hstack justify-content-between">
                    <span class="badge badge-color">${game.genre}</span>
                    <span class="badge badge-color">${game.platform}</span>
                </footer>
            </div>
        `;

        return col;
    }

    showGameDetails(gameDetails) {
        this.gamesSection.classList.add('d-none');
        this.mainSection.classList.add('d-none');

        this.detailsContent.innerHTML = `
            <div class="col-md-4">
                <img src="${gameDetails.thumbnail}" class="w-100" alt="${gameDetails.title}">
            </div>
            <div class="col-md-8">
                <h3>Title: ${gameDetails.title}</h3>
                <p>Category: <span class="badge text-bg-info"> ${gameDetails.genre}</span> </p>
                <p>Platform: <span class="badge text-bg-info"> ${gameDetails.platform}</span> </p>
                <p>Status: <span class="badge text-bg-info"> ${gameDetails.status}</span> </p>
                <p class="small">${gameDetails.description}</p>
                <a class="btn btn-outline-warning" target="_blank" href="${gameDetails.game_url}">Show Game</a>
            </div>
        `;

        this.details.classList.remove('d-none');
    }

    toggleLoading(isLoading) {
        this.loading.classList.toggle('d-none', !isLoading);
    }

    categoryNavigate(callback) {
        this.navItems.forEach(navItem => {
            navItem.addEventListener('click', (e) => {
                this.navItems.forEach(item => item.classList.remove('active'));
                e.target.classList.add('active');
                callback(e.target.dataset.category);
            });
        });
    }

    gameCards(callback) {
        this.gameContainer.addEventListener('click', (e) => {
            const gameCard = e.target.closest('[data-id]');
            if (gameCard) {
                const gameId = gameCard.dataset.id;
                callback(gameId);
            }
        });
    }

    closeDetails() {
        this.btnClose.addEventListener('click', () => {
            this.details.classList.add('d-none');
            this.gamesSection.classList.remove('d-none');
            this.mainSection.classList.remove('d-none');
        });
    }
}

export default UI;