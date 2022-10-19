class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state *=1.5;
    }

    set state(state) {
        if (state > 100) {
            this._state = 100;
        }
        else if (state < 0) {
            this._state = 0;
        }
        else {
            this._state = state;
        }  
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

//Задача №2. Библиотека
class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            return this.books.push(book);
        }
        return;
    }

    findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i];
            } 
        }
    return null;    
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                let shareBook = this.books[i];
                this.books.splice(i,1);
                return shareBook;
            } 
        }
    return null;    
    }
}

//Задача №3. Журнал успеваемости
class Student {
    #journal;
    constructor(fullName) {
        this.name = fullName;
        this.#journal = {};
    }

    getName() {
        return this.name;
    }

    addMark(grade, subject) {
        if ((grade < 1) || (grade > 5) || (typeof grade !== "number")) {
            return console.log(`Ошибка, оценка должна быть числом от 1 до 5`);
        }
        if (this.#journal[subject] === undefined) {
            this.#journal[subject] = [];
        }
        return this.#journal[subject].push(grade);
    }   

    getAverageBySubject(subject) {
        let averageMark = 0;
        if (this.#journal[subject] !== undefined) {
            if (this.#journal[subject].length > 0) {
                let sum = 0;
                this.#journal[subject].forEach((mark) => {sum += mark});
                averageMark = sum / this.#journal[subject].length;
            }
        }
        return averageMark;
    }

    getAverage() {
        const AverageMarksArrays = [];
        for (let i = 0; i < Object.keys(this.#journal).length; i++) {
            AverageMarksArrays.push(this.#journal[Object.keys(this.#journal)[i]]);
        }
        let allAverageMarks = AverageMarksArrays.flat();
        let sumTotal = 0;
        allAverageMarks.forEach((averageMark) => {sumTotal += averageMark});
        return sumTotal / allAverageMarks.length;
    }
}