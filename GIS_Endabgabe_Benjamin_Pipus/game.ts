class Card {
    imgUrl: String = "";
    id: number;
    constructor(url: String, id: number) {
        this.imgUrl = url;
        this.id = id;
    }
}

function pad(val: number) { //(https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript)
    let valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}


class Game {
    cards: Card[] = [];
    uncoveredCards: String[] = [];
    fieldHeight: number = 0;
    fieldWidth: number = 0;
    clickedCard: number = -1;
    secondClickedCard: number = -1;
    pairsFound: Card[] = [];
    fieldHtml: HTMLElement;
    timerHtml: HTMLElement;
    scoreFormHtml: HTMLElement;
    animationActive: boolean = false;
    timerHandle;
    secondsSinceStart: number = 0;





    constructor(fieldHtml: HTMLElement, scoreFormHtml: HTMLElement, timerHtml: HTMLElement) {


        this.fieldWidth = 5; //festgelegte fieldsize
        this.fieldHeight = 4;

        this.fieldHtml = fieldHtml;
        this.scoreFormHtml = scoreFormHtml;
        this.timerHtml = timerHtml;

        this.initCards();
        this.timerHandle = setInterval(() => { this.handleTimer(); }, 1000);

        let formElem: HTMLFormElement = scoreFormHtml.querySelector("form");

        formElem.addEventListener("submit", (e) => {
            e.preventDefault();
            fetch("https://bennihirokugis.herokuapp.com/addScore?name=" + encodeURI((document.getElementById("PlayerName") as HTMLInputElement).value) + "&time=" + encodeURI(pad(Math.floor(this.secondsSinceStart / 60))) + "." + this.secondsSinceStart % 60);
            formElem.reset();
        }); 

        // formElem.addEventListener("submit", (e) => {
        //     e.preventDefault();
        //     fetch("https://bennihirokugis.herokuapp.com/addScore?name=" + encodeURI(e.target[0].value) + "&time=" + encodeURI(pad(Math.floor(this.secondsSinceStart / 60))) + "." + this.secondsSinceStart % 60);
        // }); 

    }


    handleTimer(): void {
        this.secondsSinceStart++;
        this.timerHtml.innerHTML = "<br>Time: " + pad(Math.floor(this.secondsSinceStart / 60)) + " : " + pad(this.secondsSinceStart % 60) + "<br>";
    }

    async initCards() {

        if (this.fieldHeight * this.fieldWidth % 2 != 0) {
            console.error("Ungültige Feldgröße! Höhe: " + this.fieldHeight + " Breite: " + this.fieldWidth + " Durch 2 teilbar? " + (this.fieldHeight * this.fieldWidth % 2 != 0));
        }



        let response: Response = await fetch("https://bennihirokugis.herokuapp.com/getUrl");



        if (!response.ok) {
            console.error("Error fetching URLs", response);
        }

        let allUrls = await response.json();


        if (allUrls.length < ((this.fieldWidth * this.fieldHeight) / 2)) {
            console.error("Not enough URLs for fieldsize. Fieldsize is : " + ((this.fieldHeight * this.fieldWidth) / 2) + " URLs on Server : " + allUrls.length);
        }



        for (let col: number = 0; col <= ((this.fieldHeight * this.fieldWidth) - 1); col += 2) {
            this.cards[col] = new Card(allUrls[(col / 2)].url, col);
            this.cards[col + 1] = new Card(allUrls[(col / 2)].url, (col + 1));
            console.log(this.cards);
        }


        this.shuffle(this.cards);

        this.drawBoard();

    }

    shuffle(array: any): [] { //Fisher-Yates (aka. Knuth) Shuffle Algorithmus (https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-1-shuffing-cards)
        let currentIndex: number = array.length, temporaryValue: number, randomIndex: number;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    clickHandler(index: number): void {

        if (this.animationActive)
            return;

        if (this.clickedCard == -1) { //Case that no other card is active
            this.clickedCard = index;
        } else {
            this.secondClickedCard = index;
            this.drawBoard();
            this.animationActive = true;
            setTimeout(() => {

                if (this.cards[this.clickedCard].imgUrl == this.cards[this.secondClickedCard].imgUrl) { //Check if cards match
                    this.pairsFound.push(this.cards[this.clickedCard]);
                    this.pairsFound.push(this.cards[index]);
                }
                this.clickedCard = -1;
                this.secondClickedCard = -1;

                this.drawBoard();
                this.animationActive = false;

            }, 1000);
        }
        this.drawBoard();
    }


    winGame(): void {

        clearInterval(this.timerHandle);
        this.scoreFormHtml.hidden = false;

    }


    drawBoard(): void {
        this.fieldHtml.innerHTML = "";

        let table: HTMLTableElement = document.createElement("table");
        table.className = "gameTable";
        let tableBody: HTMLTableSectionElement = document.createElement("tbody");
        table.appendChild(tableBody);
        let tr: HTMLTableRowElement;

        for (let index: number = 0; index <= ((this.fieldHeight * this.fieldWidth) - 1); index++) {

            if ((index % this.fieldWidth == 0)) {
                tr = document.createElement("tr"); //"Zeilenumbruch"
                tableBody.appendChild(tr);
            }
            let td: HTMLTableDataCellElement = document.createElement("td");
            let fieldButton: HTMLElement = document.createElement("div");
            fieldButton.className = ".gameButton";
            if (index == this.clickedCard || index == this.secondClickedCard || (this.pairsFound.indexOf(this.cards[index]) != -1)) { // Wenn karte gezeigt werden soll
                fieldButton.innerHTML = "<img class='memoryImage' src='" + this.cards[index].imgUrl.toString() + "'></img>";
            } else {
                fieldButton.innerHTML = "<div class='coveredCard'></div>";
                fieldButton.addEventListener("click", function (): void { handleClick(index); });

            }
            td.appendChild(fieldButton);
            tr.appendChild(td);
        }
        this.fieldHtml.appendChild(table);

        if (this.pairsFound.length == this.cards.length) {
            this.winGame();
        }
    }
}

let game: Game;

window.addEventListener("load", function (): void {
    game = new Game(document.querySelector("#game"), document.querySelector("#scores"), document.querySelector("#timer"));
});


function handleClick(index: number): void {
    game.clickHandler(index);
}