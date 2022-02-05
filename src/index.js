class Site {
    constructor() {
        this.boards = [];
    }
    addBoard(board) {
        for (let i = 0; i < this.boards.length; i++) {
            if (this.boards[i].boarding === board.boarding) {
                throw new Error('중복');
            }
        }
        board.isInsite = true;
        this.boards.push(board);
    }

    findBoardByName(board) {
        for (let i = 0; i < this.boards.length; i++) {
            if (this.boards[i].boarding === board) {
                return this.boards[i];
            }
        }
    }
}

class Board {
    constructor(name) {
        if (name === '' || name === null || !name) {
            throw new Error('유효하지 않은 값');
        } else {
            this.boarding = name;
            this.articles = [];
            this.isInsite = false;
        }
    }

    publish(article) {
        if (this.isInsite) {
            article.id = `${this.boarding}-${Math.random()}`;
            article.createdDate = new Date().toISOString();
            this.articles.push(article);
        } else throw new Error();
    }

    getAllArticles() {
        return this.articles;
    }
}

class Article {
    constructor(art) {
        this.articled = art;
    }
}

class Comment {}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
